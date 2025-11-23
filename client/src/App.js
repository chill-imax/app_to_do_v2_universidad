import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./Routes/Login";
import Auth from "./components/Auth";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";
import { useEffect, useState } from "react";
import { Register } from "./Routes/Register";
import Register2 from "./Routes/Register2";
import SideBar from "./components/SideBar";
import { useCookies } from "react-cookie";

const App = (setSidebarOpen) => {
  
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const authToken = cookies.AuthToken
  const userEmail = cookies.Email;
  const [tasks, setTasks] = useState(null);


  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      console.log(json);
      setTasks(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if(authToken){
      getData();
    }},
  )

  console.log(tasks);

  // Sort by date
  const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <Routes>
      <Route
        path="/login"
        element={
          !authToken ? (
            <Login />
          ) : (
            <Navigate to="/" replace={true} />
          )
        }
      />
      <Route
        path="/"
        element={
          authToken ? (
            <>
            <SideBar setSidebarOpen={setSidebarOpen}/>
            
            <div className="bg-menta shadow-md rounded-lg p-10 w-900 my-10">
              
              <ListHeader listName={"Agregar tareas"} getData={getData} />
              {/**<p className="float-right text-md m-8 text-gray-200">Bienvenid@ de nuevo, {userEmail}</p> */}
              
            </div>

            <div className="bg-amarillo shadow-md rounded-lg p-10 w-900 my-10">
            <h1 className="text-2xl font-bold text-blanco">Tareas Pendientes</h1>
            {sortedTasks?.map((task) => (
                <ListItem key={task.id} task={task} getData={getData} />
              ))}
            </div>
            <p className="text-md m-8 text-gray-500">Creado por: Alejandra Brito - ADS</p>
            </>
            
            
            
          ) : (
            <Navigate to="/login" replace={true} />
          )
        }
      />
  <Route
  path="/signup"
  element={
    !authToken ? (
      <Register />
    ) : (
      <Navigate to="/" replace={true} />
    )
  }
/>
<Route
  path="/2signup"
  element={
    !authToken ? (
      <Register2 />
    ) : (
      <Navigate to="/" replace={true} />
    )
  }
/>
    </Routes>
  );
};

export default App;