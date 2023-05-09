import { Routes, Route } from "react-router-dom";
import { Home } from "./Routes/Home";
import { Login } from "./Routes/Login";
import { Register } from "./Routes/Register";
import { AuthProvider } from "./contex/authContex";
//import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Logout } from "./Routes/Logout";

function AppT() {
  return (
    <>
      <div>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </AuthProvider>
      </div>
    </>
  );
}

export default AppT;
