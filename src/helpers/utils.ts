/**
 * Combines all the classes passed in and returns a string
 */

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};
