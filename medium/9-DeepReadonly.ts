type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

type Todo = DeepReadonly<X>; // should be same as `Expected`

type DeepReadonly<T> = {
  readonly [k in keyof T]: T[k] extends Record<string, unknown>
    ? DeepReadonly<T[k]>
    : T[k];
};
