'use client';

import { useState } from 'react';
import { getUserDisplayName } from '../actions';

export default function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [userName, setUserName] = useState('unknown');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (input) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const getName = async () => {
    const result = await getUserDisplayName();
    setUserName(result.displayName || 'null');
  };

  return (
    <div>
      <h1>Todo List</h1>
      
      <form onSubmit={addTodo}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add todo"
          className="border border-gray-300 rounded-md p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Add</button>
      </form>

      <ul className="list-disc ml-4">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <button className="bg-red-500 text-white p-2 rounded-md" onClick={getName}>Get user name</button>
      <div>User name is: {userName}</div>
    </div>
  );
}