type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3

type First<T extends unknown[]> = T extends never[] ? never : T[0];
                                // 判断是否为空数组做的容错   因为本就是类型所以直接T[0]返回，会直接返回T[0]的类型
