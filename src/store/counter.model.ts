import { createEvent, createStore } from "effector";

export const increment = createEvent("increment");
export const decrement = createEvent("decrement");

export const counterStore = createStore(0)
  .on(increment, (n) => n + 1)
  .on(decrement, (n) => n - 1);
