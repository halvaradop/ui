#!/bin/bash

# Script: release.bash
# Description: Automated version management and publishing for packages in @halvaradop/ui
# Usage: ./release.bash [--publish] [--dry-run]
# By default, only updates versions without publishing. The --publish and --dry-run options control publishing behavior.
# --publish will publish the packages, and --dry-run simulates publishing without making changes.

set -eo pipefail

ROOT_DIR=$(git rev-parse --show-toplevel)
PACKAGES_DIR="${ROOT_DIR}/packages"
TODAY=$(date +'%Y-%m-%d')

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

PUBLISH=false
DRY_RUN=false
PUBLISH_CURRENT=false
PREPUBLISH_TAG=""

# Validate the environment checking that the necessary tools are installed like jq and git
validate_environment() {
  if [ ! -d "${PACKAGES_DIR}" ]; then
    echo -e "${RED}Error: 'packages' directory not found.${NC}"
    exit 1
  fi
  if ! command -v jq &> /dev/null; then
    echo -e "${RED}Error: 'jq' is not installed.${NC}"
    exit 1
  fi
  if [[ -n $(git status --porcelain) ]]; then
    echo -e "${RED}Error: There are uncommitted changes.${NC}"
    git status --short
    exit 1
  fi
}

# Get the package name from package.json
get_package_name() {
  local pkg_dir="$1"
  jq -r '.name' "${pkg_dir}/package.json"
}

# Get the package version from package.json
get_package_version() {
  local pkg_dir="$1"
  jq -r '.version' "${pkg_dir}/package.json"
}

# Increment only the pre-release if exist in the version from package.json
increment_prerelease_version() {
  local version="$1"
  if [[ ! $version =~ - ]]; then
    echo -e "${RED}Error: Current version ${version} is not a pre-release version.${NC}"
    return
  fi
  name=$(echo "$version" | cut -d '-' -f 2 | cut -d '.' -f 1)
  preversion=$(echo "$version" | cut -d '-' -f 2 | cut -d '.' -f 2)
  if [ -n "$name" ] && [ -n "$preversion" ]; then
    new_version="${version%%-*}"
    echo "$new_version-$name.$((preversion + 1))"
  fi
}

# Increment the version of a package following the SemVer versioning standards
# Structure: Major.Minor.Patch | Major.Minor.Patch-PreRelease
increment_version() {
  local version="$1"
  local component="$2"
  IFS='.' read -r major minor patch prerelease <<< "$version"
  case "$component" in
    major) echo "$((major + 1)).0.0" ;;
    minor) echo "${major}.$((minor + 1)).0" ;;
    patch) echo "${major}.${minor}.$((patch + 1))" ;;
    prerelease) increment_prerelease_version "$version" ;;
    *) echo -e "${RED}Error: Invalid version type${NC}"; exit 1 ;;
  esac
}

# Update the package version in package.json and CHANGELOG.md files
update_package_version() {
  local pkg_dir="$1"
  local new_version="$2"
  local pkg_name
  pkg_name=$(get_package_name "$pkg_dir")

  if [ "$DRY_RUN" = true ]; then
    echo -e "${YELLOW}[DRY RUN] Would update ${pkg_name} to version ${new_version}${NC}"
    return
  fi

  echo -e "${GREEN}Updating ${pkg_name} to version ${new_version}${NC}"
  jq --arg v "$new_version" '.version = $v' "${pkg_dir}/package.json" > "${pkg_dir}/temp.json"
  mv "${pkg_dir}/temp.json" "${pkg_dir}/package.json"

  if [ -f "${pkg_dir}/CHANGELOG.md" ]; then
    sed -i.bak "s|## \\[Unreleased\\]|## [Unreleased]\n\n## [${new_version}] - ${TODAY}|" "${pkg_dir}/CHANGELOG.md"
    rm -f "${pkg_dir}/CHANGELOG.md.bak"
  fi
}

publish_package() {
  local pkg_dir="$1"
  local pkg_name="$2"
  local publish_version="$3"
  local publish_tag="$4"
  if [[ -z $publish_tag ]]; then
    publish_tag="latest"
  fi

  if [ "$DRY_RUN" = true ]; then
    echo -e "${YELLOW}[DRY RUN] Would publish ${pkg_name} from ${pkg_dir} (version: ${publish_version}, tag: ${publish_tag})${NC}"
    return
  fi
  cd "$pkg_dir"
    echo -e "${GREEN}Publishing ${pkg_name} from ${pkg_dir} (version: ${publish_version}, tag: ${publish_tag})${NC}"
    pnpm publish --access public --no-git-checks --tag "$publish_tag"
  cd "$ROOT_DIR"
}

process_package() {
  local pkg_folder="$1"
  local pkg_dir="${PACKAGES_DIR}/${pkg_folder}"
  if [ ! -f "${pkg_dir}/package.json" ]; then
    echo -e "${RED}Error: package.json not found in ${pkg_dir}${NC}"
    return
  fi

  local pkg_name=$(get_package_name "$pkg_dir")
  local current_version=$(get_package_version "$pkg_dir")

  echo -e "\n${YELLOW}Processing: ${pkg_name} (${pkg_folder})${NC}"
  echo "Current version: ${current_version}"

  if [ "$PUBLISH_CURRENT" = true ]; then
    if [ "$PUBLISH" = true ]; then
      publish_package "$pkg_dir" "$pkg_name" "$current_version" ""
    fi
    return
  fi

  if [ -n "$PREPUBLISH_TAG" ]; then
    # Detect if current version already has a pre-release tag
    if [[ "$current_version" =~ -$PREPUBLISH_TAG\.([0-9]+)$ ]]; then
      # Extract the current pre-release number and increment it
      pre_num=${BASH_REMATCH[1]}
      base_version=${current_version%%-$PREPUBLISH_TAG.*}
      next_pre_num=$((pre_num + 1))
      pre_version="${base_version}-${PREPUBLISH_TAG}.${next_pre_num}"
    else
      pre_version="${current_version}-${PREPUBLISH_TAG}.0"
    fi

    if [ "$DRY_RUN" = true ]; then
      echo -e "${YELLOW}[DRY RUN] Would prepare pre-release: ${pre_version} (tag: ${PREPUBLISH_TAG})${NC}"
    else
      echo -e "${GREEN}Preparing pre-release: ${pre_version} (tag: ${PREPUBLISH_TAG})${NC}"
    fi

    update_package_version "$pkg_dir" "$pre_version"
    if [ "$PUBLISH" = true ]; then
      publish_package "$pkg_dir" "$pkg_name" "$pre_version" "$PREPUBLISH_TAG"
    fi
    return
  fi

  PS3="Select the update type: "
  options=("Major (1.y.z)" "Minor (x.1.z)" "Patch (x.y.1)" "Prerelease (x.y.z-pre.1)" "Skip this package" "Cancel all")
  select opt in "${options[@]}"; do
    case $opt in
      "Major (1.y.z)") new_version=$(increment_version "$current_version" "major"); break ;;
      "Minor (x.1.z)") new_version=$(increment_version "$current_version" "minor"); break ;;
      "Patch (x.y.1)") new_version=$(increment_version "$current_version" "patch"); break ;;
      "Prerelease (x.y.z-pre.1)") new_version=$(increment_version "$current_version" "prerelease"); break ;;
      "Skip this package") return ;;
      "Cancel all") exit 0 ;;
      *) echo -e "${RED}Invalid option${NC}" ;;
    esac
  done

  if [ "$DRY_RUN" = true ]; then
    echo -e "${YELLOW}[DRY RUN] Selected version: ${new_version}${NC}"
  fi

  update_package_version "$pkg_dir" "$new_version"
  if [ "$PUBLISH" = true ]; then
    publish_package "$pkg_dir" "$pkg_name" "$new_version" ""
  fi
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --publish) PUBLISH=true; shift ;;
    --dry-run) DRY_RUN=true; shift ;;
    --publish-current) PUBLISH=true; PUBLISH_CURRENT=true; shift ;;
    --prepublish)
      PUBLISH=true
      PREPUBLISH_TAG="$2"
      if [ -z "$PREPUBLISH_TAG" ]; then
        echo -e "${RED}Error: --prepublish requires a tag (e.g., rc, beta, next)${NC}"
        exit 1
      fi
      shift 2 ;;
    *) echo -e "${RED}Unrecognized argument: $1${NC}"; exit 1 ;;
  esac
done

main() {
  # validate_environment
  echo -e "${GREEN}=== Version Manager for @halvaradop/ui ===${NC}\n"
  echo -e "${YELLOW}Detected packages:${NC}"

  for pkg_dir in "${PACKAGES_DIR}"/*; do
    if [ -f "${pkg_dir}/package.json" ]; then
      pkg_name=$(get_package_name "$pkg_dir")
      current_version=$(get_package_version "$pkg_dir")
      echo " - ${pkg_name} (v${current_version})"
    fi
  done

  for pkg_dir in "${PACKAGES_DIR}"/*; do
    if [ -d "$pkg_dir" ]; then
      pkg_folder=$(basename "$pkg_dir")
      process_package "$pkg_folder"
    fi
  done

  if [[ -n $(git status --porcelain) ]]; then
    if [ "$DRY_RUN" = true ]; then
      echo -e "\n${YELLOW}[DRY RUN] No commit will be created.${NC}"
    else
      git add -A
      git commit -m "chore(release): update package versions [skip ci]"
      echo -e "\n${GREEN}Changes committed.${NC}"
    fi
  else
    echo -e "\n${YELLOW}No changes to commit.${NC}"
  fi

  echo -e "\n${GREEN}Process completed.${NC}"
}

main