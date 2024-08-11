import { useState } from "react";
import Navbar from "./components/NavBar";
import ClienteForm from "./components/ClienteForm";
import FacturaForm from "./components/FacturaForm";
function App() {
  const [FormType, setFormType] = useState("");  

  return (
    <div className="bg-gray-100 mb-5 min-h-screen h-screen">
      <Navbar setFormType={setFormType} /> {/* Pasamos la función setFormType */}
      {/* dependiendo de el formato deberia cambiar el formulario */}
      {FormType === "cliente" ? <ClienteForm /> : <FacturaForm/>}
    </div>
  );
}

export default App;
