type FooBarBaz = KebabCase<"FooBarBaz">;
const foobarbaz: FooBarBaz = "foo-bar-baz";

type DoNothing = KebabCase<"do-nothing">;
const doNothing: DoNothing = "do-nothing";

type KebabCase<Str extends string> = Str extends `${infer First}${infer Other}`
  ? Other extends Uncapitalize<Other>
    ? `${Lowercase<First>}${KebabCase<Other>}`
    : `${Lowercase<First>}-${KebabCase<Other>}`
  : Str;
