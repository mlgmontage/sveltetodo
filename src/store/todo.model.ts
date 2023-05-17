import { createEvent, createStore } from "effector";

type TodoT = {
  text: string;
  completed: boolean;
};

let todos: TodoT[] = [
  { text: "wash dishes", completed: false },
  { text: "practice english", completed: true },
  { text: "watch TV", completed: false },
  { text: "watch YT", completed: false },
];

export const addtodo = createEvent<TodoT>("addtodo");
export const completetodo = createEvent<number>("completetodo");

export const counterStore = createStore(todos)
  .on(addtodo, (state, payload) => [...state, payload])
  .on(completetodo, (state, payload) => {
    const list = [...state];
    list[payload].completed = !list[payload].completed;
    return list;
  });
