type replaced = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'

type Replace<
  S extends string,
  F extends string,
  T extends string
    > = S extends `${infer H}${F}${infer E}` ? `${H}${T}${E}` : never;

    // 动态检查自带类似正则自动匹配效果
