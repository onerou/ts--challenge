type replaced = ReplaceAll<"t y p e s", " ", "">; // expected to be 'types'

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer R}${From}${infer P}`
  ? `${ReplaceAll<R, From, To>}${To}${ReplaceAll<P, From, To>}`
  : S;
// 二分法
