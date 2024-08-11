import React, { useState } from "react"; // Asegúrate de importar useState

const ClienteForm = () => {
  const [nombre, setNombre] = useState("");
  const [tipoIdentificacion, setTipoIdentificacion] = useState("");
  const [numeroIdentificacion, setNumeroIdentificacion] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const handleSubmit = async () => {
    const cliente = {
      nombre,
      tipo_identificacion: tipoIdentificacion,
      numero_identificacion: numeroIdentificacion,
      observaciones,
    };

    alert("Guardando cliente: " + JSON.stringify(cliente)); // Convertimos el objeto a una cadena
    console.log(cliente);

    try {
      const response = await fetch("http://localhost:3000/api/cliente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cliente),
      });

      if (response.ok) {
        alert("Cliente guardado con éxito");
        // Limpia el formulario si lo deseas
        setNombre("");
        setTipoIdentificacion("");
        setNumeroIdentificacion("");
        setObservaciones("");
      } else {
        alert("Error al guardar el cliente");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error en la conexión");
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-5 p-6 border border-gray-300 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Clientes</h2>
      <p className="text-lg mb-6 bg-purple-100 text-purple-700 p-2 rounded-lg">
        Rellena la siguiente información
      </p>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="relative mb-6">
          <input
            type="text"
            id="nombre-cliente"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder=" "
            className="block w-full px-2.5 pb-2 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="nombre-cliente"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#F3F4F6] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Nombre del cliente
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="relative">
            <select
              id="tipo-identificacion"
              value={tipoIdentificacion}
              onChange={(e) => setTipoIdentificacion(e.target.value)}
              className="block w-full px-2.5 pb-2 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            >
              <option value="" disabled>
                Escoge una opción ...
              </option>
              <option value="CC">Cédula</option>
              <option value="TI">Tarjeta de Identidad</option>
              <option value="CE">Cédula de Extranjería</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
            <label
              htmlFor="tipo-identificacion"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#F3F4F6] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Tipo de identificación
            </label>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              id="numero-identificacion"
              value={numeroIdentificacion}
              onChange={(e) => setNumeroIdentificacion(e.target.value)}
              placeholder=" "
              className="block w-full px-2.5 pb-2 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
            <label
              htmlFor="numero-identificacion"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#F3F4F6]  px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Número de identificación
            </label>
          </div>
        </div>

        <div className="relative mb-4">
          <textarea
            id="observaciones"
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
            placeholder=" "
            rows="4"
            className="block w-full px-2.5 pb-2 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          ></textarea>
          <label
            htmlFor="observaciones"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#F3F4F6]  px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Observaciones
          </label>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Guardar Cliente
        </button>
      </form>
    </div>
  );
};

export default ClienteForm;
