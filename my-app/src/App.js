import { Routes, Route } from "react-router-dom";
//import { AddTodo } from "./Routes/Home";
import { Login } from "./Routes/Login";
import { Register } from "./Routes/Register";
import { AuthProvider } from "./contex/authContex";
import "bootstrap/dist/css/bootstrap.min.css";
import { Logout } from "./Routes/Logout";
import { Main } from "./Routes/Main";
import { Profile } from "./Routes/Profile";
import { HomePage } from "./Routes/HomePage";

export default function AppT() {
  return (
    <>
      <div>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Main />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </AuthProvider>
      </div>
    </>
  );
}
