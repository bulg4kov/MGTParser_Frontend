import React, { Children } from 'react'
import classes from './ParserField.module.scss'

export default function ParserField({title, children}) {
  return (
    <div className={classes.ParserField}>
        <span className={classes.ParserField__title}>
            {title}
        </span>
        {children}
    </div>
  )
}
