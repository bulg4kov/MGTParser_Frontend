import React, { useState } from 'react'
import CustomSelect_arrow from '../../../assets/images/CustomSelect_arrow.svg'
import classes from './CustomSelect.module.scss'

export default function CustomSelect({callback, ...props}) {
  const options = Object.entries(props.options)
  const initalValue = [props.selected, props.options[props.selected]]

  const [optionsVisible, setOptionsVisible] = useState(false)
  const [selectedOption, setSelectedOption] = useState(initalValue)

  const handleSelectClick = (e) => {
    setOptionsVisible((isVisible) => !isVisible)
  }

  const handleOptionClick = (e) => {
    setSelectedOption([e.target.getAttribute('value'), e.target.getAttribute('name')])
    callback(e.target.getAttribute('value'))
    setOptionsVisible((isVisible) => !isVisible)
  }

  return (
    <div className={classes.CustomSelect__Wrapper}>
        <div className={[classes.CustomSelect, optionsVisible ? classes.CustomSelect__opened : ''].join(' ')} onClick={handleSelectClick} value={selectedOption[0]}>
            <span className={classes.CustomSelect__current}>{selectedOption[1]}</span>
            <img src={CustomSelect_arrow} alt="" className={classes.CustomSelect__Arrow}/>
        </div>
        {
            optionsVisible
            ?   <div className={classes.CustomSelect__options}>
                    {options.map((option) => 
                        <span value={option[0]} name={option[1]} key={option[0]} className={classes.CustomSelect__option} onClick={handleOptionClick}>
                            {option[1]}
                        </span>
                    )}
                </div>
            : null
        }
        
    </div>
    
  )
}
