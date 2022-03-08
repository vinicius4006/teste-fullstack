import React, { useEffect, useState } from "react";
import "./ListaRepo.css";

export default function ListaRepo({ repos }) {
  const [busca, setBuscar] = useState("");
 const lowerBusca = busca.toLowerCase();
    const reposFilter = repos.filter((item) => item.name.toLowerCase().includes(lowerBusca));


  return (
    <div className="repos-style">
      <h3>Repositórios</h3>


      <input placeholder="Filtro" type="text" value={busca} onChange={(ev) => setBuscar(ev.target.value)}/>
      <ul>
        {reposFilter.map((item) => (
        <li key={item}>-  {item.name}</li>
      ))}
      </ul>
      
    </div>
  );
}
