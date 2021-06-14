import s from '../../sass/notFound/NotFound.module.sass'
import React from 'react'

function NotFound() {
  return (
    <div className={s.container}>
      <div className={s.text}>
        <h1 className={s.title} >Ups!!</h1>
        <h2 className={s.subTitle} >404 Not Found</h2>
      </div>
    </div>
  )
}

export default NotFound
