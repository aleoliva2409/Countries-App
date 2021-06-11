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
        [e.target.name]: e.target.value
      })
    }
  }

  return (
    <div>
      <div>
        <label htmlFor="name">Name Activity:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleForm}
          value={state.name}
          placeholder="Name activity..."
        />
      </div>
      <div>
        <label htmlFor="difficulty">Difficulty:</label>
        <input
          type="number"
          id="difficulty"
          name="difficulty"
          onChange={handleForm}
          value={state.difficulty}
          placeholder="1 to 5"
        />
      </div>
      <div>
        <label htmlFor="duration">Duration:</label>
        <input
          type="text"
          id="duration"
          name="duration"
          onChange={handleForm}
          value={state.duration}
          placeholder="15 days , 3 weeks , 2 months"
        />
      </div>
      <div>
        <p>Season:</p>
        <div>
          <input
            type="radio"
            id="spring"
            name="season"
            onChange={handleForm}
            value="spring"
          />
          <label htmlFor="spring">Spring</label>
        </div>
        <div>
          <input
            type="radio"
            id="summer"
            name="season"
            onChange={handleForm}
            value="summer"
          />
          <label htmlFor="summer">Summer</label>
        </div>
        <div>
          <input
            type="radio"
            id="winter"
            name="season"
            onChange={handleForm}
            value="winter"
          />
          <label htmlFor="winter">Winter</label>
        </div>
        <div>
          <input
            type="radio"
            id="fall"
            name="season"
            onChange={handleForm}
            value="fall"
          />
          <label htmlFor="fall">Fall</label>
        </div>
      </div>
    </div>
  );
}

export default Inputs
