import React from "react"
import classes from "./ButtonFullContainer.module.scss"

export default function ButtonFullContainer({ title }) {
	return <button className={classes.ButtonBig}>{title}</button>
}
