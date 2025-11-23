import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useCookies} from 'react-cookie'

export function Register() {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const navigate = useNavigate();
  const [email, setEmail] = useState (null)
  const [user, setUser] = useState (null)
  const [password, setPassword] = useState (null)
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(cookies);
  }, [cookies])



  console.log(email, password);

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    if (!email || !password) {
      setError("Completar los campos");
      return

    } 
    const response = await fetch (`http://localhost:8000/signup`, {
      method:  "POST",
      headers: { 'Content-Type' : 'application/json'},
      body: JSON.stringify({ email, password })
    })

    const data = response.json()
    if(data.detail){
    setError(data.detail)

    }else{
      setCookie('Email', data.email)
      setCookie('AuthToken', data.detail)

      window.location.reload()
    }
    
    }
    

    // Lógica de registro aquí
    ///navigate("/2signUp");

  

  return (
    <div>
      <div className="">
        <div className="row d-flex flex justify-center items-center h-screen">
          <div className="col-12 col-md-8 m-4 col-xl-6 col-xl-5 p-12 w-full sm:max-w-md text-negro bg-amarillo" style={{borderRadius: "3rem"}}>
            
              
                <h2 className="mb-5 text-uppercase text-3xl">
                  ¡Vamos a crear tu cuenta!
                </h2>
                {error && <p>{error}</p>}
                <form className="needs-validation" onSubmit={handleSubmit}>
                  <div className="form-outline was-validated mb-4 flex flex-col lg:flex-row lg:space-x-4">
                    <div className="w-full lg:w-1/2">
                      <label className="form-label block">Nombre</label>
                      <input
                        type="text"
                        id="userName"
                        name="userName"
                        className="form-control form-control-lg pl-3 p-2 w-full"
                        style={{ borderRadius: "3rem" }}
                        placeholder="Ingrese su nombre"
                        required
                        onChange={handleChange}
                      />
                     
                    </div>
                    <div className="w-full lg:w-1/2">
                      <label className="form-label block">Apellido</label>
                      <input
                        type="text"
                        id="userLastName"
                        name="userLastName"
                        className="form-control form-control-lg pl-3  p-2 w-full"
                        style={{ borderRadius: "3rem" }}
                        placeholder="Ingrese su apellido"
                        required
                        onChange={handleChange}
                      />
                     
                    </div>
                  </div>

                  <div className="form-outline was-validated mb-4">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control form-control-lg pl-10 p-2 w-full"
                      placeholder="Ingrese su email"
                      style={{ borderRadius: "3rem" }}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    
                  </div>

                  <div className="form-outline was-validated mb-4">
                    <label className="form-label">Contraseña</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control form-control-lg pl-10 p-2 w-full"
                      placeholder="Ingrese su contraseña"
                      style={{ borderRadius: "3em" }}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                   
                  </div>

                  <div className="">
                    <a href="/login" className="text-sm text-rosa">
                      Ya tengo cuenta
                    </a>
                    <div className="text-end mt-2">
                      <button
                        className="bg-rosa text-white text-xl p-3 btn-lg px-5"
                        style={{ borderRadius: "3em" }}
                        type="submit"
                        onClick={(e) => handleSubmit(e)}

                      >
                        REGISTRARME
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            
          
        </div>
      </div>
    </div>
  )}
