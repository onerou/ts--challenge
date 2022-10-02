type perm = Permutation<"A" | "B" | "C">; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

type Permutation<T, K = T> = [T] extends [never]
  ? []
  : T extends K
  ? [T, ...Permutation<Exclude<K, T>>]
  : never;
// 每一次执行时K只保留当前T的一个值进行递归