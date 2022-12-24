import React from "react";
import ButtonFullContainer from "../../../../components/UI/buttons/ButtonFullContainer/ButtonFullContainer";
import ResultField from "../../../../components/UI/Parser/ResultField/ResultField";
import classes from "./Result.module.scss";
import fetchCars from "../../../../utils/Parser/Cars/fetchCars";
import { useEffect } from "react";
import { useState } from "react";

export default function Result({ plateNumber, garageNumber }) {
  const [data, setData] = useState("");

  useEffect(() => {
    const newData = fetchCars(plateNumber || garageNumber);
    setData(newData);
  }, [plateNumber, garageNumber]);

  console.log(data);
  return (
    <article className={classes.Results}>
      <ResultField title="Поиск по ТС" body={plateNumber || garageNumber} />
      <section className={classes.Results__inner}>
        <ResultField
          title="Бортовой номер"
          body={garageNumber ? garageNumber : "Не указан"}
        />
        <ResultField
          title="Госномер"
          body={plateNumber ? plateNumber : "Не указан"}
        />
        <ResultField title="Маршрут" body="25" />
        <ResultField
          title="Конечная"
          body={data[0] !== undefined ? data[0] : null}
        />
        <ResultField
          title="Остановка"
          body={data[1] !== undefined ? data[1] : null}
        />
      </section>
      <section className={classes.Results__bottomInner}>
        <ButtonFullContainer title="Добавить в трекер" />
        <ButtonFullContainer title="СТТС" />
        <ButtonFullContainer title="Поделиться" />
        <h3 className={classes.Results__bottomTitle}>МГТПарсер 2022</h3>
      </section>
    </article>
  );
}
