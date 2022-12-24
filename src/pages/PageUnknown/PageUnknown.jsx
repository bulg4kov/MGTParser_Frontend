import React from 'react'
import InfoSection from '../../components/sections/InfoSection/InfoSection'
import Header from '../../components/Header/Header'
import classes from './PageUnknown.module.scss'

export default function PageUnknown() {
  return (
    <>
        <Header/>
        <article className={classes.PageUnknown}>
            <InfoSection title='Ошибка 404' text='Страница не найдена!'/>
        </article>
    </>
  )
}
