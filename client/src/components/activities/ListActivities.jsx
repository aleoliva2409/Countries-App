import React from 'react'

function ListActivities({activities}) {
  console.log(activities)
  return (
    <div>
      {
        activities[0] === undefined ?
        <h2>No Activities</h2> :
        activities.map(act => (
          <div key={act.id}>
            <h2>{act.name}</h2>
            <p>{act.difficulty}</p>
            <p>{act.duration}</p>
            <p>{act.season}</p>
          </div>
        ))
      }
    </div>
  );
}

export default ListActivities
