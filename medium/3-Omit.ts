interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false
};

type MyOmit<T extends Record<string, any>, U> = {
  [k in keyof T as k extends U ? never : k]: T[k];
};
