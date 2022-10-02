type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]

type Flatten<T extends unknown[]> = T extends [infer First, ...infer Last]
  ? [...(First extends any[] ? Flatten<First> : [First]), ...Flatten<Last>]
  : [];

// type Flatten<T extends unknown[]> = T extends [infer First, ...infer Rest]
//   ? [...(First extends any[] ? Flatten<First> : [First]), ...Flatten<Rest>]
//   : [];
