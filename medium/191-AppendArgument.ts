type Fn = (a: number, b: string) => number;

type Result = AppendArgument<Fn, boolean>;
// expected be (a: number, b: string, x: boolean) => number

type AppendArgument<T, F> = T extends (...arg: infer A) => infer V
  ? (...arg: [...A, F]) => V
  : never;
