import { twMerge } from "tailwind-merge"

/**
 * Merge multiple classes into a single class string. It prioritizes the
 * last class in case of conflicts.
 * @params classes - The classes to merge.
 * @returns The merged class string.
 * @example
 * // Expected: "text-red-500"
 * merge("text-blue-500 text-red-500")
 */
export const merge = twMerge
