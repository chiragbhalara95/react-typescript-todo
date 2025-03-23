import React, { useState } from "react";

// Define the structure of a to-do item
interface TodoObj {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoObj[]>([]);
  const [inputText, setInputText] = useState<string>("");

  // Add a new to-do
  const addTodo = () => {
    if (inputText.trim() === "") return;
    const newTodo: TodoObj = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputText(""); // Clear input field
  };

  // Toggle completion status
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a to-do
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter a task..."
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
