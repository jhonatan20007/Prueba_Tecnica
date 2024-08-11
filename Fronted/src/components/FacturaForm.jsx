import React, { useState } from "react";
import SearchInput from "./SearchInput";

const FacturaForm = () => {
  const [cliente, setCliente] = useState(1);
  const [fecha, setFecha] = useState("");
  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [descuento, setDescuento] = useState("");
  const [iva, setIva] = useState("");
  const [valorTotal, setValorTotal] = useState("");

  

  const handleSubmit = async () => {
    // Calcula el IVA y el valor total si es necesario
    const valorSinDescuento = precio - (precio * (descuento / 100));
    const valorConIva = valorSinDescuento + (valorSinDescuento * (iva / 100));

    const factura = {
      cliente,
      fecha,
      producto,
      precio: parseFloat(precio),
      descuento: parseFloat(descuento),
      iva: parseFloat(iva),
      valor_total: valorConIva,
    };

    try {
      const response = await fetch("http://localhost:3000/api/factura", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(factura),
      });

      if (response.ok) {
        alert("Factura guardada con éxito");
        // Limpia el formulario si lo deseas
        setCliente("");
        setFecha("");
        setProducto("");
        setPrecio("");
        setDescuento("");
        setIva("");
        setValorTotal("");
      } else {
        alert("Error al guardar la factura");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error en la conexión");
    }
  };

//   funcion para actualizar el valor de cliente
    const updateClient = (client) => {
        alert("Cliente seleccionado: " + JSON.stringify(client));
        setCliente(client);
    };

  return (
    <div className="max-w-4xl mx-auto my-5 p-6 border border-gray-300 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Nueva Factura</h2>
      <p className="text-lg mb-6 bg-purple-100 text-purple-700 p-2 rounded-lg">
        Rellena la siguiente información para registrar la factura
      </p>

      <form onSubmit={(e) => e.preventDefault()}>

        <SearchInput />

        <div className="relative mb-6">
          <input
            type="date"
            id="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="block w-full px-2.5 pb-2 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="fecha"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#F3F4F6] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Fecha
          </label>
        </div>

        <div className="relative mb-6">
          <input
            type="text"
            id="producto"
            value={producto}
            onChange={(e) => setProducto(e.target.value)}
            placeholder=" "
            className="block w-full px-2.5 pb-2 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="producto"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#F3F4F6] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Producto
          </label>
        </div>

        <div className="relative mb-6">
          <input
            type="number"
            id="precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            placeholder=" "
            className="block w-full px-2.5 pb-2 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="precio"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#F3F4F6] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Precio
          </label>
        </div>

        <div className="relative mb-6">
          <input
            type="number"
            id="descuento"
            value={descuento}
            onChange={(e) => setDescuento(e.target.value)}
            placeholder=" "
            className="block w-full px-2.5 pb-2 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="descuento"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#F3F4F6] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Descuento (%)
          </label>
        </div>

        <div className="relative mb-6">
          <input
            type="number"
            id="iva"
            value={iva}
            onChange={(e) => setIva(e.target.value)}
            placeholder=" "
            className="block w-full px-2.5 pb-2 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="iva"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#F3F4F6] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            IVA (%)
          </label>
        </div>

        <div className="relative mb-6">
          <input
            type="number"
            id="valorTotal"
            value={valorTotal}
            onChange={(e) => setValorTotal(e.target.value)}
            placeholder=" "
            className="block w-full px-2.5 pb-2 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            readOnly
          />
          <label
            htmlFor="valorTotal"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#F3F4F6] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Valor Total (calculado)
          </label>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Guardar Factura
        </button>
      </form>
    </div>
  );
};

export default FacturaForm;
