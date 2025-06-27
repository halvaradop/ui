import { twMerge } from "tailwind-merge"
import { type ClassValue, clsx } from "clsx"

/**
 * Merge multiple classes into a single class string. It prioritizes the
 * last class in case of conflicts.
 * @param {string} classes - The classes to merge.
 * @returns {string} The merged class string.
 * @example
 * // Expected: "text-red-500"
 * merge("text-blue-500", " text-red-500")
 */
export const merge = (...classes: ClassValue[]): string => {
    return twMerge(clsx(classes))
}
