import React from 'react'
import classes from './DL.module.scss' 

export default function DL({title, body}) {
	return (
			<dl className={classes.dl}>
					<dt className={classes.dt}>
						{title}
					</dt>
					<dd className={classes.dd}>
						{body}
					</dd>
			</dl>
	)
}
