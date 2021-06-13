import React from 'react'
import s from './ListActivities.module.css'

function ListActivities({activities}) {
  console.log(activities)
  return (
    <div className={s.listActivities__container}>
      <h1 className={s.listActivities__title}>Activities List</h1>
      {activities[0] === undefined ? (
        <h2 className={s.listActivities__title}>No Activities</h2>
      ) : (
        activities.map((act) => (
          <div className={s.listActivities__activities} key={act.id}>
            <h4 className={s.activities__title}>{act.name[0].toUpperCase() + act.name.slice(1)}</h4>
            <p className={s.activities__p}>Difficulty: {act.difficulty}</p>
            <p className={s.activities__p}>Duration: {act.duration}</p>
            <p className={s.activities__p}>Season: {act.season}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ListActivities
