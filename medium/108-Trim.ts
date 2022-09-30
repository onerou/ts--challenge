type trimmed = Trim<"  Hello World     ">; // expected to be 'Hello World'

type Removable = " " | "\n" | "\t";
type TrimLeft<T> = T extends `${Removable}${infer S}` ? TrimLeft<S> : T;
type TrimRight<T> = T extends `${infer S}${Removable}` ? TrimRight<S> : T;

type Trim<T> = TrimLeft<TrimRight<T>>;
