import React, { useState,useEffect } from 'react';

const SearchInput = () => {
// llamar  a la funcion asyncrona
    const[data, setData] = useState([]);
useEffect(() => {
    const fetchFacturas = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/cliente/");
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        const data = await response.json();
        console.log(data);
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchFacturas();
  }, []);
            

//   const data = [
//     { id_cliente: 1, nombre: "Juan Pérez", tipo_identificacion: "CC", numero_identificacion: "1234567890", observaciones: "Cliente frecuente" },
//     { id_cliente: 2, nombre: "María Gómez", tipo_identificacion: "CC", numero_identificacion: "9876543210", observaciones: "Sin observaciones" },
//     { id_cliente: 3, nombre: "Carlos Ramírez", tipo_identificacion: "TI", numero_identificacion: "1122334455", observaciones: "Cliente nuevo" },
//     { id_cliente: 4, nombre: "Ana Torres", tipo_identificacion: "CC", numero_identificacion: "1029384756", observaciones: "Requiere atención especial" },
//     { id_cliente: 5, nombre: "Luis Sánchez", tipo_identificacion: "CC", numero_identificacion: "5647382910", observaciones: "Cliente VIP" },
//     { id_cliente: 6, nombre: "Diana Martínez", tipo_identificacion: "TI", numero_identificacion: "5566778899", observaciones: "Observaciones adicionales" },
//     { id_cliente: 7, nombre: "Jorge Herrera", tipo_identificacion: "CC", numero_identificacion: "9988776655", observaciones: "Cliente con descuento permanente" },
//     { id_cliente: 8, nombre: "Paola Ríos", tipo_identificacion: "CE", numero_identificacion: "6655443322", observaciones: "Cliente internacional" },
//     { id_cliente: 9, nombre: "Andrés Díaz", tipo_identificacion: "CC", numero_identificacion: "4433221100", observaciones: "Sin observaciones" },
//     { id_cliente: 10, nombre: "Laura Castro", tipo_identificacion: "CC", numero_identificacion: "3344556677", observaciones: "Cliente potencial" },
//     { id_cliente: 11, nombre: "Juan Pérez", tipo_identificacion: "CC", numero_identificacion: "123456789", observaciones: "Cliente preferencial" }
//   ];

  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.length > 0) {
      // Filtrar los resultados por nombre
      const filteredResults = data.filter(cliente =>
        cliente.nombre.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults);
      setOpen(true);
    } else {
      setResults([]);
      setOpen(false);
    }
  };

  const selectResult = (result) => {
    setSearch(result.id_cliente);
    setOpen(false);
    updateClient(result.id);
  };

  return (
    <div className="relative mb-6">
      {/* Campo de búsqueda con icono */}
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 100)} // Añadimos un pequeño delay para permitir seleccionar un elemento
        id="search-input"
        placeholder=" "
        className="block w-full pl-12 pr-4 pb-2 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      />
      <label
        htmlFor="search-input"
        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#F3F4F6] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-12"
      >
        Buscar cliente
      </label>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"></path>
        </svg>
      </div>

      {/* Resultados de la búsqueda */}
      {open && results.length > 0 && (
        <ul className="absolute z-20 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto">
          {results.map((result) => (
            <li
              key={result.id_cliente}
              onClick={() => selectResult(result)}
              className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
            >
              {result.nombre}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
