"use client";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Finish assignment", done: false },
    { id: 2, text: "Study Next.js", done: false },
    { id: 3, text: "Setup Git repository", done: true },
  ]);
  const [input, setInput] = useState("");
  const addTask = () => {
  if (input.trim() === "") return;
  setTasks([...tasks, { id: Date.now(), text: input.trim(), done: false }]);
  setInput("");
};

  const toggleTask = (id) => {
  setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
};

  const deleteTask = (id) => {
  setTasks(tasks.filter((t) => t.id !== id));
};

  return (
    <main style={{ maxWidth: 500, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>My ToDo App — Version 1.1 Development</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task..."
      />
      <button onClick={addTask}>Add Task</button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t) => (
          <li key={t.id}>
            <input type="checkbox" checked={t.done} onChange={() => toggleTask(t.id)} /> {t.text}{" "}
            <button onClick={() => deleteTask(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
