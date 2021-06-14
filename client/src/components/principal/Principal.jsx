import s from '../../sass/principal/Principal.module.sass'
import React from "react";
import { Link } from "react-router-dom"; // * imbrl


function Principal() {
  return (
    <div className={s.container}>
      <div className={`wrapper ${s.content}`}>
        <h1 className={s.title}>Welcome</h1>
        <button className={s.btn}>
          <Link className={s.btn__link} to="/home">Go Home</Link>
        </button>
      </div>
    </div>
  );
}

export default Principal;
