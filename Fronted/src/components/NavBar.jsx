import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";

const Navbar = ({ setFormType }) => {
  const [selectedButton, setSelectedButton] = useState("cliente");

  useEffect(() => {
    setFormType(selectedButton);
  }, [selectedButton, setFormType]);

  return (
    <nav className="bg-[#000000] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-32 sm:w-48 md:w-34 lg:w-50 xl:w-96 object-contain"
        />

        <div>
          <button
            onClick={() => setSelectedButton("cliente")}
            className={`text-white mx-2 p-2 border-b-4 rounded
              ${
                selectedButton === "cliente"
                  ? "border-purple-500"
                  : "border-transparent"
              }`}
          >
            <span className="text-purple-300">Cliente</span>
          </button>
          <button
            onClick={() => setSelectedButton("factura")}
            className={`text-white mx-2 p-2 border-b-4 rounded ${
              selectedButton === "factura"
                ? "border-purple-500"
                : "border-transparent"
            }`}
          >
            <span className="text-purple-300">Factura</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
