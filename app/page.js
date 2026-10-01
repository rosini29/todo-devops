"use client";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Finish assignment", done: false },
    { id: 2, text: "Study Next.js", done: false },
    { id: 3, text: "Setup Git repository", done: true },
  ]);
  const [input, setInput] = useState("");

  return (
    <main style={{ maxWidth: 500, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>My ToDo App</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task..."
      />
      <button>Add Task</button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t) => (
          <li key={t.id}>
            <input type="checkbox" checked={t.done} readOnly /> {t.text}{" "}
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
