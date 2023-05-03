import { Routes, Route } from "react-router-dom";
import { Home } from "./Routes/Home";
import { Login } from "./Routes/Login";
import { Register } from "./Routes/Register";
import { AuthProvider } from "./contex/authContex";
import Navbar from "./components/Navbar";

function AppT() {
  return (
    <>
      <Navbar />
      <div>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthProvider>
      </div>
    </>
  );
}

export default AppT;
