const foo = (arg1: string, arg2: number): void => {};

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]

type MyParameters<T extends (...U: any[]) => void> = T extends (
  ...args: infer U
) => unknown
  ? U
  : never;
