interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type NewKey = MyReadonly2<Todo, "title" | "description">;

const todo: NewKey = {
  title: "Hey",
  description: "foobar",
  completed: false
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
todo.completed = true; // OK

type MyReadonly2<T extends Record<string, any>, U extends keyof T> = Omit<
  T,
  U
> & {
  readonly [k in keyof T]: T[k];
};

// 所谓动态检查，应当就是每个属性都会通过type类型语句得出类型 ，所以completed因为未通过Omit检查，所以不会触发后面readonly类型判断
