import React, { useState } from "react"
import classes from "./InputDefault.module.scss"

export default function InputDefault({
	placeholder,
	callback,
	size,
	disabled,
	value,
	mask,
}) {
	return (
		<input
			type="text"
			placeholder={placeholder}
			onChange={callback}
			className={classes.InputDefault}
			size={size}
			disabled={disabled}
			value={value}
			maxLength={mask.max}
			data-type={mask.type}
		/>
	)
}
