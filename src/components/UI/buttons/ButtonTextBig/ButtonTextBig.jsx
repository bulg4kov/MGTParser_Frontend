import React from 'react'
import classes from './ButtonTextBig.module.scss'

export default function ButtonTextBig({title, ...props}) {

  return (
    <button className={classes.ButtonText} value={props.value} onClick={props.handleClick}>
        {title}
    </button>
  )
}
