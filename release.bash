
PACKAGE_DIR="packages"

for package in "$PACKAGE_DIR"/*; do
  if [ "$(basename "$package")" != "ui-utils" ] && [ "$(basename "$package")" != "ui-template" ]; then
    cd "$package"
    echo "path: $(pwd)"
    pnpm publish --access public --no-git-checks --tag rc
    cd -
  fi
done
