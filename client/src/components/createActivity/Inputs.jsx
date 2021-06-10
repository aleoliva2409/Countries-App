import React from 'react'

function Inputs({state, changeState}) {

  const handleForm = () => {
    
  }

  return (
    <div>
      <div>
        <label htmlFor="name">Name Activity:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="difficulty">Difficulty:</label>
        <input type="text" id="difficulty" name="difficulty" />
      </div>
      <div>
        <label htmlFor="duration">Duration:</label>
        <input type="text" id="duration" name="duration" />
      </div>
      <div>
        <p>Season:</p>
        <div>
          <input type="radio" name="season" id="spring" />
          <label htmlFor="spring">Spring</label>
        </div>
        <div>
          <input type="radio" name="season" id="summer" />
          <label htmlFor="summer">Summer</label>
        </div>
        <div>
          <input type="radio" name="season" id="winter" />
          <label htmlFor="winter">Winter</label>
        </div>
        <div>
          <input type="radio" name="season" id="fall" />
          <label htmlFor="fall">Fall</label>
        </div>
      </div>
    </div>
  );
}

export default Inputs
