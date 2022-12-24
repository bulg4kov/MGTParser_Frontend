import React from "react";
import { Link } from "react-router-dom";

import classes from "./Main.module.scss";
import ButtonText from "../../components/UI/buttons/ButtonText/ButtonText";
import bubbles from "../../assets/images/bubbles.png";
import backdrop from "../../assets/images/backdrop.png";
import Header from "../../components/Header/Header";
import InfoSection from "../../components/sections/InfoSection/InfoSection";
import ButtonBig from "../../components/UI/buttons/ButtonBig/ButtonBig";
import PageTitles from "../../components/UI/Textual/PageTitles/PageTitles";

export default function Main() {
  return (
    <>
      <Header />
      <main className={classes.Main}>
        <img src={backdrop} alt="" className={classes.Main__bgBackdrop} />
        <article className={classes.Main__inner}>
          <img src={bubbles} alt="" className={classes.Main__bgBubbles} />
          <PageTitles
            style={{ marginBottom: "2.5vw" }}
            title="Транспорт близко"
            subtitle="ищите транспорт МГТ по бортовому номеру"
          />
          <Link to="/parser">
            <ButtonText title="Опробовать" />
          </Link>
          <article className={classes.Main__info}>
            <InfoSection
              title="Что это?"
              text="МГТПарсер - это набор инструментов для отслеживания транспортных средств Московского городского транспорта"
            />
            <InfoSection
              title="Подробнее?"
              text="Вы можете отследить, например автобус, по его бортовому номеру, или посмотреть все автобусы на определённом маршруте"
            />
          </article>
          <article className={classes.Main__action}>
            <h3 className={classes.Main__actionTitle}>Начните сейчас</h3>

            <Link to="/parser">
              <ButtonBig title="Начать триал" />
            </Link>
          </article>
        </article>
      </main>
    </>
  );
}
