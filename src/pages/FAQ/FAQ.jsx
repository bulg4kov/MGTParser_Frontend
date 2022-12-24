import React from "react";
import Header from "../../components/Header/Header";
import ButtonFullContainer from "../../components/UI/buttons/ButtonFullContainer/ButtonFullContainer";
import DL from "../../components/UI/DL/DL";
import classes from "./FAQ.module.scss";

export default function FAQ() {
  return (
    <>
      <Header />
      <main className={classes.FAQ}>
        <article className={classes.FAQ__inner}>
          <section className={classes.FAQ__dls}>
            <DL
              title="Что это?"
              body="Это парсер МГТ (Московского городского транспорта). Можно искать транспорт по бортовоу и государственному номеру, а также искать транспорт по номеру маршрурта"
            />
            <DL
              title="Как пользоваться?"
              body="Зайдите в раздел Парсер, выберите тип поиска и начните искать"
            />
            <DL
              title="Что дает парсер?"
              body="Данные по текущей остановке, маршруте, направлении движения, на линии или в депо, а также данные с портала СТТС"
            />
          </section>
          <ButtonFullContainer title="Начать пользоваться" />
        </article>
      </main>
    </>
  );
}
