import { configureStore } from "./configure-store";

export const store = configureStore();

console.log(store.getState());


