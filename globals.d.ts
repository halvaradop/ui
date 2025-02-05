/**
 * This module augmentation adds the `decorator` export to the `@halvaradop/ui-utils` module.
 * The `decorator.tsx` file should not be compiled directly due to errors such as unrecognized
 * hooks like `useState` and `useEffect`. Therefore, we add the type definition here.
 *
 * This file will be used until a better solution is found.
 */
declare module "@halvaradop/ui-utils" {
    //import { Decorator } from "@storybook/react"
    //export const decorator: Decorator
}
