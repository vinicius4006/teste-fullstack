import { useState } from "react";
import ListaRepo from "../components/ListaRepo";
import Form from "../components/Form";
import Card from "../components/Card";
import { loadUser, loadRepo } from "../utils/loadData";
import "./API.css";

export default function API() {
  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);
  const [showMe, setShowMe] = useState(false);
  const [listRepo, setlistRepo] = useState();

  // Coletagem dos dados
  const setData = ({ name, login, avatar_url }) => {
    setName(name);
    setUsername(login);
    setAvatar(avatar_url);
  };

  // Exibição dos Repositórios
  const quantRepos = (e) => {
    if (name.length === 0) {
      alert("Insira a organização");
      return null;
    }
    if (!showMe) {
      setShowMe(!showMe);
    }
    setShowMe(!showMe);
  };

  // Busca das Oraganizações
  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  // Requisição
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataJson = await loadUser(userInput);
    if (dataJson.message) {
      setError(dataJson.message);
    } else {
      setData(dataJson);
      //Aqui chamo o repositório
      const repoJson = await loadRepo(dataJson);
      setlistRepo(repoJson);
      setError(null);
      setShowMe(false);
    }
  };

  return (
    <div id="project" className="body-api">
      <h1>Projeto</h1>
      <Form handleSearch={handleSearch} handleSubmit={handleSubmit} />
      {error ? (
        <h1>{error}</h1>
      ) : (
        <div>
          <Card
            imagem={avatar}
            name={name}
            userName={userName}
            quantRepos={quantRepos}
          />
          {showMe ? <ListaRepo repos={listRepo} /> : null}
        </div>
      )}
    </div>
  );
}

// fetch(`https://api.github.com/orgs/${userInput}`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.message) {
//           setError(data.message);
//         } else {
//           setData(data);
//           setError(null);
//           setShowMe(false);

//           // Ao receber a requisição, já chamo os repositórios
//           fetch(
//             `https://api.github.com/orgs/${userInput}/repos?per_page=60&type=owner`
//           )
//             .then((res) => res.json())
//             .then((data) => {
//               setlistRepo(data);
//             })
//             .catch((err) => {
//               console.log("Deu erro" + err.message);
//             });
//         }
//       });
