import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import Todo from "../components/Todo";
import { db } from "../firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import "../App.css";

const q = query(collection(db, "todos"), orderBy("timestamp", "desc"));

export function Home() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, [input]);
  const addTodo = (e) => {
    e.preventDefault();
    addDoc(collection(db, "todos"), {
      nameTodo: input,
      timestamp: serverTimestamp(),
      completed: false,
    });
    setInput("");
  };
  return (
    <div className="App">
      <h2> </h2>
      <form>
        <TextField
          id="outlined-basic"
          label="Make Todo"
          placeholder="what do you want to do?"
          variant="outlined"
          style={{ margin: "0px 5px" }}
          size="small"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div>
          <Button
            variant="contained"
            style={{ margin: "10px 10px" }}
            size="small"
            color="primary"
            onClick={addTodo}
          >
            Add Todo
          </Button>
        </div>
      </form>
      <ul>
        {todos.map((item) => (
          <Todo key={item.id} arr={item} />
        ))}
      </ul>
    </div>
  );
}
