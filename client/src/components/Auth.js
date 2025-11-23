import { useState } from "react"

const Auth = () => {
    const [isLogIn,setIsLogIn] = useState(true)
    const [error, setError] = useState(null)

    const viewLogin = (status) => {
        setError(null)
        setIsLogIn(status)
    }

    return (
     <>
        {/**Auth-container */}
        <div className=" " >
        {/**Auth-container-box */}
            <div className="">
                <form>
                    <h2>
                       {isLogIn ? 'Por favor, Iniciar sesion!' : 'Por favor, registrese!'} 
                    </h2>
                    <input type="email" placeholder= "email"/>
                    <input type="password" placeholder= "Ingrese su contraseña"/>
                   
                    {!isLogIn && 
                     <input type="password" placeholder="Confirme su contraseña" />
                    }

                    <input type="submit" className="text-menta font-bold m-2 mx-5 py-2 px-10 rounded-md bg-transparent border-4 border-menta hover:bg-menta hover:text-white" />
                    {error && 
                    <p>{error}</p>
                    }
                </form>
                {/**Auth-options */}
                <div>
                <button
  className={`${
    !isLogIn ? 'bg-menta' : 'bg-rosa'
  }`}
  onClick={() => viewLogin(false)}
>
  INICIAR SESION
</button>
                    <button 
                    className={`bg-${isLogIn ? 'blue' : 'white'}`}
                    onClick={() => viewLogin(true)}
                    >REGISTRARME</button>
                </div>
            </div>
        </div>
     </>
    )
}

export default Auth