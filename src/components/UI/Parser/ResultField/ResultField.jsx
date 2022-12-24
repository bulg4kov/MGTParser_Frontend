import React from "react"
import classes from "./ResultField.module.scss"

export default function ResultField({ title, body }) {
	return (
		<div className={classes.ResultField}>
			<span className={classes.ResultField__title}>{title}</span>
			<span className={classes.ResultField__body}>{body}</span>
		</div>
	)
}
