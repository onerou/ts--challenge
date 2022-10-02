type Test = "123";
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"

type StringToUnion<T> = T extends `${infer U}${infer Rest}`
  ? U | StringToUnion<Rest>
  : never;
