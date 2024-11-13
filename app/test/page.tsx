import TodoList from "./todo"
import { stackServerApp } from "@/stack";

export default async function Page() {
  await stackServerApp.getUser({ or: 'redirect' });
  return <TodoList />;
}