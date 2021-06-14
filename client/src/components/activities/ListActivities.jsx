import s from '../../sass/activities/ListActivities.module.sass'
import React from 'react'

function ListActivities({activities}) {
  return (
    <div className={`wrapper ${s.listActivities}`}>
      <h1 className={s.title}>Activities List</h1>
      {activities[0] === undefined ? (
        <h2 className={s.error__title}>No Activities</h2>
      ) : (
        activities.map((act) => (
          <div className={s.activities} key={act.id}>
            <h4 className={s.activities__title}>{act.name[0].toUpperCase() + act.name.slice(1)}</h4>
            <p className={s.activities__paragraph}>Difficulty: {act.difficulty}</p>
            <p className={s.activities__paragraph}>Duration: {act.duration}</p>
            <p className={s.activities__paragraph}>Season: {act.season}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ListActivities
