import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import carreras from "../components/carreras.json";
import semestres from "../components/semestres.json";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

function Register2() {
  const [openCarreras, setOpenCarreras] = useState(false);
  const [openSemestres, setOpenSemestres] = useState(false);
  const [selectedCarrera, setSelectedCarrera] = useState("");
  const [selectedSemestre, setSelectedSemestre] = useState({});
  const [selectedAsignaturas, setSelectedAsignaturas] = useState([]);
  const navigate = useNavigate();

  const toggleCarreras = () => {
    setOpenCarreras(!openCarreras);
    setOpenSemestres(false);
  };

  const toggleSemestres = () => {
    setOpenSemestres(!openSemestres);
    setOpenCarreras(false);
  };

  const handleCarreraClick = (carrera) => {
    setSelectedCarrera(carrera);
    setOpenCarreras(false);
    setOpenSemestres(true);

    // Encuentra la carrera seleccionada en el JSON y obtén los semestres
    const carreraSeleccionada = carreras.find((c) => c.carrera === carrera);
    if (carreraSeleccionada) {
      setSelectedSemestre({});
      setSelectedAsignaturas([]);
    }
  };

  const handleSemestreClick = (semestre) => {
    setSelectedSemestre(semestre);
    setSelectedAsignaturas(semestre.asignaturas || []);
    setOpenSemestres(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
    // Aquí puedes realizar acciones adicionales después del envío del formulario
    navigate("/ruta-deseada");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="col-12 col-md-8 m-4 col-xl-6 col-xl-5 p-12 w-full sm:max-w-md bg-amarillo rounded-lg">
        <div className="mb-md-5 mt-md-4 pb-6">
          <div>
            <h2 className="text-4xl">Perfecto!</h2>
            <h3 className="mb-5 text-xl">Solo unos datos más...</h3>
          </div>

          <label htmlFor="carrera" className="block text-start">
  Dinos qué carrera estás cursando
</label>
<div className="relative flex flex-col items-center text-center w-full rounded-lg mt-4">
  <button
    className="bg-white text-menta w-full px-8 flex items-center text-center justify-between text-xl rounded-lg tracking-wider border-4 border-transparent active:border-blue-500 duration-200 active:text-menta"
    onClick={toggleCarreras}
  >
    Selecciona tu carrera
    {openCarreras ? (
      <RiArrowDropUpLine className="w-6 h-6 text-menta" />
    ) : (
      <RiArrowDropDownLine className="w-6 h-6 text-menta" />
    )}
  </button>


  {openCarreras && (
    <div className="bg-white absolute top-20 flex flex-col items-start rounded-lg p-2 w-full z-10">
      {carreras.map((item, i) => (
        <div
          className="flex w-full p-4 justify-between hover:bg-menta hover:text-white cursor-pointer rounded-r-lg border-l-transparent hover:border-l-blue-200 border-l-4"
          key={i}
          onClick={() => {
            handleCarreraClick(item.carrera);
            toggleCarreras(); // Esto cierra el dropdown después de seleccionar una carrera
          }}
        >
          <h3>{item.carrera}</h3>
          <h3>{item.emoticon}</h3>
        </div>
      ))}
    </div>
  )}
</div>

        

          <label htmlFor="semestre" className="block text-start mt-4">
            En qué semestre te encuentras?
          </label>
          <div className="relative flex flex-col items-center text-center w-full rounded-lg mt-4">
            <button
              className="bg-white text-menta w-full px-8 flex items-center text-center justify-between text-xl rounded-lg tracking-wider border-4 border-transparent active:border-blue-500 duration-200 active:text-menta"
              onClick={toggleSemestres}
            >
              Selecciona tu semestre
              {openSemestres ? (
                <RiArrowDropUpLine className="w-6 h-6 text-menta" />
              ) : (
                <RiArrowDropDownLine className="w-6 h-6 text-menta" />
              )}
            </button>
            {openSemestres && (
              <div className="bg-white absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
                {semestres.map((item) => (
                  <div
                    className="flex w-full p-4 justify-between hover:bg-menta hover:text-white cursor-pointer rounded-r-lg border-l-transparent hover:border-l-pink-200 border-l-4"
                    key={item.semestre}
                    onClick={() => handleSemestreClick(item)}
                  >
                    <h3>{item.semestre}</h3>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="text-end mt-4">
            <button
              className="bg-menta text-white text-xl p-3 px-5 rounded-full"
              onClick={handleSubmit}
            >
              Registrarme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register2;