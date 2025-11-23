import { useState } from "react";
import { FaUserAlt, FaCircleUser } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiSolidLockAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export function Login() {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const [error, setError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  console.log(cookies);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e, endpoint) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      setError("Completar los campos");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

    
      const data = response.json()
      if(data.detail){
      setError(data.detail)
  
      }else{
        setCookie('Email', data.email)
        setCookie('AuthToken', data.detail)
  
        window.location.reload()
      }
    } catch (error) {
      console.error(error);
    }
  };

  console.log(user.email, user.password);

  return (
    <div className="">
      <div className="flex justify-center items-center h-screen">
        <div className="w-full sm:max-w-md">
          <div
            className="bg-menta text-negro shadow-md p-10"
            style={{ borderRadius: "3rem" }}
          >
            <h2 className="mb-2 text-uppercase text-3xl">Hola de nuevo!</h2>
            <p className="text-dark mb-5">
              Estamos felices de tenerte de vuelta :)
            </p>

            {error && <p className="text-red-600">{error}</p>}

            <form className="needs-validation" onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <span className="absolute left-3 top-3 text-gray-500">
                  <FaUserAlt className="text-rosa" />
                </span>
                <input
                  type="email"
                  id="email"
                  className="form-control form-control-lg pl-10 p-2 w-full"
                  style={{ borderRadius: "3rem" }}
                  placeholder="Ingrese su email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
                
              </div>

              <div className="relative mb-4">
                <span className="absolute left-3 top-3 text-gray-500">
                  <BiSolidLockAlt className="text-rosa" />
                </span>
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  className="form-control form-control-lg pl-10 p-2 w-full"
                  style={{ borderRadius: "3rem" }}
                  placeholder="Ingrese su contraseña"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
                <button
                  className="absolute right-4 top-3 text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <AiOutlineEyeInvisible />
                  ) : (
                    <AiOutlineEye />
                  )}
                </button>
                
              </div>

              <div className="text-center mt-12">
                <button
                  className="bg-amarillo p-2.5 btn-lg w-full text-xl rounded-full font-bold"
                  type="submit"
                  onClick={(e)=> handleSubmit(e)}
                >
                  Iniciar sesión
                </button>
              </div>
            </form>

            <div className="text-center mt-4 text-blanco ">
              <p className="m-0">
                ¿No tienes cuenta?{" "}
                <a href="/signup" className="text-blanco font-bold">
                  Registrarme
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}