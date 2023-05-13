import estilos from "../SearchBar/SearchBar.module.css"
import { useState } from "react";

function SearchBar({onSearch}) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div>
         <input type='search' placeholder="Buscar personaje." onChange={handleChange} value={id}/>
         <button onClick={() => onSearch(id)} className={estilos.boton1}>Agregar</button>
      </div>
   );
}

export default SearchBar