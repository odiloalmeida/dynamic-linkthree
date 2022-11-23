import { useState, useEffect } from "react";
import React from "react";
import "./admin.css";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Header } from "../../components/Header";

import { MdAddLink } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

import { db } from "../../services/firebaseConection";

import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc,
  snapshotEqual,
} from "firebase/firestore";

export default function Admin() {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [backgroundColorInput, setBackgroundColorInput] = useState(
    "255,255,255"
  );
  const [textColorInput, setTextColorInput] = useState("00,00,00");

  const [links, setLinks] = useState([]);

  useEffect(() => {
    const linksRef = collection(db, "links")
    const queryRef = query(linksRef, orderBy("created", "asc"))

    const unsub = onSnapshot(queryRef, (snapshot) => {
      let list = [];

      snapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          name: doc.data().name,
          url: doc.data().url,
          bc: doc.data().bc,
          cl: doc.data().cl,
        });
      });
        setLinks(list)  
    });
  }, []);

  async function handleRegister(e) {
    e.preventDefault();
    if (nameInput === "" || urlInput === "") {
      alert("Preencha todos os campos");
      return;
    }

    addDoc(collection(db, "links"), {
      name: nameInput,
      url: urlInput,
      bc: backgroundColorInput,
      cl: textColorInput,
      created: new Date(),
    })
      .then(() => {
        setNameInput("");
        setUrlInput("");
        alert("Link Registrado com sucesso");
      })
      .catch((error) => {
        alert("Erro ao registrar o link");
        console.log("Erro ao registrar o link: " + error);
      });
  }

    function handleDeletLink (){
        alert("Test")
    }

  return (
    <div className="admin-container">
      <Header />

      <Logo />

      <form className="form" onSubmit={handleRegister}>
        <label className="label">Nome do Link</label>
        <Input
          placeholder="Nome do Link"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />

        <label className="label">Url do Link</label>
        <Input
          placeholder="URL do Link"
          type="url"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />

        <section className="container-colors">
          <div>
            <label className="label-right">Cor de fundo </label>
            <input
              type="color"
              value={backgroundColorInput}
              onChange={(e) => setBackgroundColorInput(e.target.value)}
            />
          </div>

          <div>
            <label className="label-right">Cor da fonte </label>
            <input
              type="color"
              value={textColorInput}
              onChange={(e) => setTextColorInput(e.target.value)}
            />
          </div>
        </section>

        {nameInput !== "" && (
          <div className="preview">
            <label className="label">Veja como está ficando:</label>
            <article
              className="list"
              style={{ margin: 8, backgroundColor: backgroundColorInput }}
            >
              <p style={{ color: textColorInput }}>{nameInput}</p>
            </article>
          </div>
        )}

        <button className="btn-register" type="submit">
          Cadastrar
          <MdAddLink size={24} color="#fff" />
        </button>
      </form>

      <h2 className="tittle">Meus Links</h2>

      {links.map((item, index) => (
        <article
          key={index}
          className="list animate-pop"
          style={{ backgroundColor: item.bc, color: item.cl }}
        >
          <p>{item.name}</p>
          <div>
            <button className="btn-delet" onClick={ () => handleDeletLink()}>
              <FiTrash2 size={18} color="#fff" />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
