type Test = { id: "1" };
type Result = AppendToObject<Test, "value", 4>; // expected to be { id: '1', value: 4 }

let result: Result = {
  id: "1",
  value: 4
};

type AppendToObject<
  O extends Record<string | symbol, any>,
  K extends string | symbol,
  V extends any
> = { [P in K]: V } & Omit<O, K>;
