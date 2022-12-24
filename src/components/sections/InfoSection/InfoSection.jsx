import React from 'react'
import classes from './InfoSection.module.scss'

export default function InfoSection({title, text}) {
  return (
    <section className={classes.InfoSection}>
        <h3 className={classes.InfoSection__infoTitle}>
            {title}
        </h3>
        <p className={classes.InfoSection__infoText}>
            {text}
        </p>
    </section>
  )
}
