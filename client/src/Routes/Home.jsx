import React from "react";
import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import Todo from "../components/Todo";



import "../App.css";
import Navbar from "../components/Navbar";



export function AddTodo() {
  
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <h3>WELCOME AGAIN!</h3>
      </div>
    </div>)   
}
