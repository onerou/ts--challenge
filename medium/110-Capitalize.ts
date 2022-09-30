type capitalized = Capitalizes<"hello world">; // expected to be 'Hello world'

type Capitalizes<T> = T extends `${infer F}${infer L}`
  ? `${Uppercase<F>}${L}`
  : never;
