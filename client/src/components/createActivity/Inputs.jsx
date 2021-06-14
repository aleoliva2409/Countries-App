import React from 'react'

function Inputs({state, changeState}) {

  const handleForm = (e) => {
    if(e.target.name === 'difficulty') {
      changeState({
        ...state,
        [e.target.name]: e.target.valueAsNumber
      });
    } else {
      
      changeState({
        ...state,
        [e.target.name]: e.target.value,
      });
    }
  }

  return (
    <div className="">
      <div className="">
        <label className="" htmlFor="name">Name Activity:</label>
        <input
          type="text"
          id="name"
          name="name"
          className=""
          onChange={handleForm}
          value={state.name}
          placeholder="Name activity..."
        />
      </div>
      <div className="">
        <label className="" htmlFor="difficulty">Difficulty:</label>
        <input
          type="number"
          id="difficulty"
          name="difficulty"
          className=""
          onChange={handleForm}
          value={state.difficulty}
          placeholder="1 to 5"
        />
      </div>
      <div className="">
        <label className="" htmlFor="duration">Duration:</label>
        <input
          type="text"
          id="duration"
          name="duration"
          className=""
          onChange={handleForm}
          value={state.duration}
          placeholder="15 days , 3 weeks , 2 months"
        />
      </div>
      <p className="">Season:</p>
      <div className="">
        <div className="">
          <input
            type="radio"
            id="spring"
            name="season"
            onChange={handleForm}
            value="spring"
          />
          <label className="" htmlFor="spring">Spring</label>
        </div>
        <div className="">
          <input
            type="radio"
            id="summer"
            name="season"
            onChange={handleForm}
            value="summer"
          />
          <label className="" htmlFor="summer">Summer</label>
        </div>
        <div className="">
          <input
            type="radio"
            id="winter"
            name="season"
            onChange={handleForm}
            value="winter"
          />
          <label className="" htmlFor="winter">Winter</label>
        </div>
        <div className="">
          <input
            type="radio"
            id="fall"
            name="season"
            onChange={handleForm}
            value="fall"
          />
          <label className="" htmlFor="fall">Fall</label>
        </div>
      </div>
    </div>
  );
}

export default Inputs
