import React, { useState } from "react";
import Inputs from "./Inputs";
import Search from "./Search";

function Form({countries}) {

  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    activities: []
  })

  return (
    <div>
      <form>
        <Inputs state={form} changeState={setForm}/>
        <Search countries={countries}/>
        <div>
          <button>Create</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
