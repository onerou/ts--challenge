const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type a = MyReturnType<typeof fn>; // should be "1 | 2"

type MyReturnType<T extends (...arg: any[]) => unknown> = T extends (
  ...arg: any[]
) => infer V
  ? V
  : never;
