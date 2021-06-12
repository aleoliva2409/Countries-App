import React from 'react'
import s from './Form.module.css'

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
    <div className={s.inputs__container}>
      <div className={s.input__container}>
        <label className={s.label} htmlFor="name">Name Activity:</label>
        <input
          type="text"
          id="name"
          name="name"
          className={s.input}
          onChange={handleForm}
          value={state.name}
          placeholder="Name activity..."
        />
      </div>
      <div className={s.input__container}>
        <label className={s.label} htmlFor="difficulty">Difficulty:</label>
        <input
          type="number"
          id="difficulty"
          name="difficulty"
          className={s.input}
          onChange={handleForm}
          value={state.difficulty}
          placeholder="1 to 5"
        />
      </div>
      <div className={s.input__container}>
        <label className={s.label} htmlFor="duration">Duration:</label>
        <input
          type="text"
          id="duration"
          name="duration"
          className={s.input}
          onChange={handleForm}
          value={state.duration}
          placeholder="15 days , 3 weeks , 2 months"
        />
      </div>
      <p className={s.label__p}>Season:</p>
      <div className={s.inputs__container_radio}>
        <div className={s.input__radio}>
          <input
            type="radio"
            id="spring"
            name="season"
            onChange={handleForm}
            value="spring"
          />
          <label className={s.label__radio} htmlFor="spring">Spring</label>
        </div>
        <div className={s.input__radio}>
          <input
            type="radio"
            id="summer"
            name="season"
            onChange={handleForm}
            value="summer"
          />
          <label className={s.label__radio} htmlFor="summer">Summer</label>
        </div>
        <div className={s.input__radio}>
          <input
            type="radio"
            id="winter"
            name="season"
            onChange={handleForm}
            value="winter"
          />
          <label className={s.label__radio} htmlFor="winter">Winter</label>
        </div>
        <div className={s.input__radio}>
          <input
            type="radio"
            id="fall"
            name="season"
            onChange={handleForm}
            value="fall"
          />
          <label className={s.label__radio} htmlFor="fall">Fall</label>
        </div>
      </div>
    </div>
  );
}

export default Inputs
