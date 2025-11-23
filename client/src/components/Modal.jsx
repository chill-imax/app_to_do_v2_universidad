import React from 'react'
import { useState } from 'react'
import { useCookies } from 'react-cookie'

const Modal = ({ mode, setShowModal, task, getData }) => {
    const [cookies, setCookie,  removeCookie] = useCookies(null)
    const editMode = mode === 'editar' ? true : false
  
    console.log('task:', task);
    console.log('editMode:', editMode);
  
    const [data, setData] = useState({
      user_email: editMode ? task.user_email : cookies.Email,
      title: editMode ? task.title : null,
      progress: editMode ? task.progress : 50,
      date: editMode ? task.Date : new Date()
    })

    const postData = async (e) => {
        e.preventDefault()
        try{
            const response = await fetch(`http://localhost:8000/todos`, {
                method: "POST",
                headers: {'Content-Type' : 'application/json' },
                body: JSON.stringify(data)
            })
            if (response.status === 200) {
                console.log('WORKED');
                setShowModal(false)
                getData()
            }            
        }catch (err){
            console.log(err);
        }
    }

    const editData = async(e) =>{
        e.preventDefault()
        try {
            const response = await fetch (`http://localhost:8000/todos/${task.id}`,{
                method: "PUT",
                headers:{ 'Content-Type' : 'application/json' },
                body: JSON.stringify(data)
            })
            if(response.status === 200) {
                console.log('EDITADO');
                setShowModal(false)
                getData()
            }
        } catch (err) {
            console.log(err);
            
        }
    }


    const hadleChange = (e) => {
        console.log('cambiando!', e)
        const {name, value} = e.target
        setData (data => ({
            ...data ,
            [name]:value
        }))
        
        console.log(data);
      
    }

  return (
    <>
       {/**overlay */}
       <div className="absolute left-0 top-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
        {/**modal */}
        <div className='w-[50%] bg-blanco p-16 shadow-lg' style={{ borderRadius: "12px" }} >
            {/**form-title-container */}
            <div className='flex justify-between text-xl mb-4'>
                <h3>Vamos a {mode} tu tarea☺ </h3>
                <button className='border-none bg-transparent active:text-red-500' onClick={() => setShowModal(false)}>X</button>
            </div>
            <form className='flex flex-col'>
                <input className='my-6 mx-0 py-5 px-8 border-2 text-lg' style={{ borderRadius: "12px" }} required maxLength={30} placeholder="Tu tarea va aquí" name='title' value={data.title} onChange={hadleChange} />
                <br/>
                <label htmlFor='range'  className='text-sm text-gray-800' >Arrastra para indicar tu progreso actual</label>
                <input required type="range" id='range' min="0" max="100" name="progress" value={data.progress} onChange={hadleChange} />
                <input 
                className="mt-3 p-5 px-8 text-lg font-bold text-menta rounded-xl bg-transparent border-4 border-menta hover:bg-menta hover:text-white" 
                type="submit" 
                onClick={editMode ? editData : postData} />
            </form>
        </div>
    </div>
    </>
  )
}

export default Modal
