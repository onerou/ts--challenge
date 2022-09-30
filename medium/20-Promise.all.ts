const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const);

declare function PromiseAll<T extends unknown[]>(
  value: readonly [...T]
): Promise<{ [k in keyof T]: T[k] extends Promise<infer P> ? P : T[k] }>;

// declare function PromiseAll<T extends unknown[]>(
//   value: readonly [...T]
// ): Promise<{ [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P] }>;
