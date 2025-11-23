import { useState } from "react"
import Modal from "./Modal"
import { useCookies } from "react-cookie"

const ListHeader = ({ listName, getData }) => {
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const [showModal, setShowModal] = useState(false)

    const signOut = () => {
        console.log('signout')
        removeCookie('Email')
        removeCookie('AuthToken')
        window.location.reload()
    }



    return (
        <div className="flex bg-menta w-full justify-between">
            <h1 className="text-2xl text-white font-bold mr-16  " >{listName}</h1>
            {/**BUTTON CONTAINER */}
            <div className=" m-0   px-10 rounded-md bg-transparent flex justify-end">
                <button className="text-amarillo font-bold m-2 mx-5 py-2 px-10 rounded-md bg-transparent border-4 border-amarillo hover:bg-amarillo hover:text-white" 
                onClick={() =>  setShowModal (true)}>AGREGAR</button>
                <button className="text-white font-bold m-2 mx-2 py-2 px-10 rounded-md bg-rosa border-4 border-red-500 hover:bg-blanco hover:text-rosa" onClick={signOut}>SALIR</button>
            </div>
           
            {showModal && <Modal mode={'crear'} setShowModal={setShowModal} getData={getData}/>}
        </div>
    )
}

export default ListHeader;