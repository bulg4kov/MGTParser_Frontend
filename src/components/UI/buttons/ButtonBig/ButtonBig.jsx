import React from 'react'
import classes from './ButtonBig.module.scss'

export default function ButtonBig({title}) {
  return (
    <button className={classes.ButtonBig}>
        {title}
    </button>
  )
}
