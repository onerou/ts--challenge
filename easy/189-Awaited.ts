type ExampleType = Promise<string>;

type Res = MyAwaited<ExampleType>;

type MyAwaited<T> = T extends Promise<infer U> ? U : T;
