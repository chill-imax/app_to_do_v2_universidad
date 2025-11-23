import React, { useState } from 'react'
import ProgressBar from "./ProgressBar"
import TickIcon from "./TickIcon"
import Modal from './Modal'




export default function ListItem({task, getData}) {
    const [showModal, setShowModal] = useState (false)

    const deleteItem = async () => {
        
           
        try {
           const response = await fetch (`http://localhost:8000/todos/${task.id}`,{
            method:'DELETE'
            
           })
            if (response.status === 200) {
                getData()
            }
        } catch (err) {
            console.error(err);
            
        }
    }


  return (
        <li className="w-[100%] my-10 mx-0 rounded-lg shadow-md bg-blanco flex justify-between">
           {/**INFO CONTAINER */}
            <div className="flex items-center">
                <TickIcon />
                <p className="">{task.title}</p>
                <ProgressBar progress={task.progress}/>
            </div>
            <div className="flex items-center m-2">
                {/* BUTTONS */}

                <button className="ml-5 p-5 px-8 text-md font-bold text-menta rounded-xl bg-transparent border-4 border-menta hover:bg-menta hover:text-white" 
                onClick={() => setShowModal(true)}>EDIT</button>
                <button 
                className="ml-3 mr-4 p-5 px-8 text-md font-bold text-rosa rounded-xl bg-transparent border-4 border-rosa hover:bg-rosa hover:text-white"
                onClick={deleteItem}
                >DELETE</button>
            </div>
            {showModal && <Modal mode={'editar'} setShowModal={setShowModal} getData={getData} task={task} />}
        </li>
  )
}




