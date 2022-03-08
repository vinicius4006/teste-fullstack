import React from "react";
import './Form.css';
export default function Form({ handleSearch, handleSubmit }) {
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit}>
        <label>Pesquisar por</label> <input
         placeholder="ORG"
          name="requisicao"
          onChange={handleSearch}
          className='input-style'
        />
        <button type="submit" className="btn">PESQUISAR</button>
      </form>
    </div>
  );
}
