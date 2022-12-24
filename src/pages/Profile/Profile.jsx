import React from "react";
import Header from "../../components/Header/Header";
import classes from "./Profile.module.scss";
import Field from "../../components/Profile/Field/Field";

export default function Profile() {
  return (
    <>
      <Header />
      <main className={classes.Profile}>
        <article className={classes.Profile__container}>
          <section className={classes.Profile__inner}>
            <h2 className={classes.Profile__name}>Мой профиль</h2>
            <Field
              fieldName="Подписка до:"
              fieldResult="31.12.2022"
              fieldAction="Продлить"
            />
            <Field fieldName="Всего поисков:" fieldResult="34" />
          </section>
        </article>
      </main>
    </>
  );
}
