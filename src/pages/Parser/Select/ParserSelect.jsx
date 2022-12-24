import React from 'react'
import classes from '../Parser.module.scss'
import ButtonTextBig from '../../../components/UI/buttons/ButtonTextBig/ButtonTextBig'

export default function ParserSelect({handleAction}) {
  return (
    <div className={classes.Parser__selectType}>
        <ButtonTextBig title='Парсер ТС' value='cars' handleClick={handleAction}/>
        <ButtonTextBig title='Парсер маршрутов' value='routes' handleClick={handleAction}/>
    </div>
  )
}
