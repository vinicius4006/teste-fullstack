import React from "react";
import "./Card.css";
export default function Card({ imagem, name, userName, quantRepos }) {
  return (
    <div className="div-pai">
      <div className="card">
        <img src={imagem} className='img'/>
        <div className="container">
          Usuário:
          <h4>
            <b>{userName}</b>
          </h4>
          Nome: 
          <p><b>{name}</b></p>
        </div>
        <button onClick={quantRepos} className='btn'>EXIBIR REPOSIÓRIOS</button>
      </div>
    </div>
  );
}
{/* <div className="card">
  <img src={imagem} className='card-image'></img>
  <div className="card-text">
    <span className="date">{name}</span>
    <h2>{userName}</h2>
  </div>
  <div className="card-stats">
    <button onClick={quantRepos}>EXIBIR REPOSIÓRIOS</button>
  </div>
</div> */}
