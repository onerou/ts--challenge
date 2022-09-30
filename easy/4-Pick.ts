interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false
};

type MyPick<T extends Record<string, any>, K extends keyof T> = {
  [k in K]: T[k];
};
