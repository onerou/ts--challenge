type foo = {
  name: string;
  age: string;
};
type coo = {
  age: number;
  sex: string;
};

type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}

let res: Result = {
  name: "123",
  age: 1,
  sex: "123"
};
type Merge<T, U> = {
  [k in keyof T | keyof U]: k extends keyof U
    ? U[k]
    : k extends keyof T
    ? T[k]
    : never;
};


// 可以在in后面的值通过 ｜ 增加循环，再判断优先级显示
