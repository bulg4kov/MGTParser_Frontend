import React, { useState } from 'react'
import classes from './DropDown.module.scss'
import Dropdown_arrow from '../../../assets/images/dropdown_arrow.svg'

export default function DropDown(props) {
  const options = Object.entries(props.options)
  const initalValue = [props.selected, props.options[props.selected]]

  const [optionsVisible, setOptionsVisible] = useState(false)
  const [selectedOption, setSelectedOption] = useState(initalValue)

  const handleSelectClick = (e) => {
    setOptionsVisible((isVisible) => !isVisible)
  }

  const handleOptionClick = (e) => {
    setSelectedOption([e.target.getAttribute('value'), e.target.getAttribute('name')])
    setOptionsVisible((isVisible) => !isVisible)
  }

  return (
    <div className={classes.DropDown__Wrapper}>
        <div className={[classes.DropDown, optionsVisible ? classes.DropDown__opened : ''].join(' ')} onClick={handleSelectClick} value={selectedOption[0]}>
            <span className={classes.DropDown__current}>{selectedOption[1]}</span>
            <img src={Dropdown_arrow} alt="" className={classes.DropDown__Arrow}/>
        </div>
        {
            optionsVisible
            ?   <div className={classes.DropDown__options}>
                    {options.map((option) => 
                        <span value={option[0]} name={option[1]} key={option[0]} className={classes.DropDown__option} onClick={handleOptionClick}>
                            {option[1]}
                        </span>
                    )}
                </div>
            : null
        }
        
    </div>
    
  )
}
