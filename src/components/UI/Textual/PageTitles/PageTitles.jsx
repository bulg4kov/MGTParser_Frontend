import React from 'react'
import classes from './PageTitles.module.scss'

export default function PageTitles({title, subtitle, style}) {
  return (
    <section className={classes.PageTitles} style={style}>
        <h1 className={classes.PageTitles__Title}>{title}</h1>
        <h3 className={classes.PageTitles__Subtitle}>{subtitle}</h3>
    </section>
  )
}
