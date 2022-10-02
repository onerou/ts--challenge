type LengthOfString<
  S extends string,
  M extends any[] = []
> = S extends `${infer R}${infer L}`
  ? LengthOfString<L, [...M, R]>
  : M["length"];

type Length = LengthOfString<"123">;
