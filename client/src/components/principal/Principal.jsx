import React from "react";
import { Link } from "react-router-dom"; // * imbrl
import s from "./Principal.module.css";

function Principal() {
  return (
    <div className={s.container}>
      <div className={`wrapper ${s.content}`}>
        <h1 className={s.title}>Welcome</h1>
        <button className={s.btn}>
          <Link className={s.a} to="/home">Go Home</Link>
        </button>
      </div>
    </div>
  );
}

export default Principal;
