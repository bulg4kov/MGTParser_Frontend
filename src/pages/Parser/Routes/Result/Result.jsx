import React from "react";
import classes from "./Result.module.scss";
import { useEffect } from "react";
import { useState } from "react";
import fetchRoutes from "../../../../utils/Parser/Routes/fetchRoutes";
import ButtonText from "../../../../components/UI/buttons/ButtonText/ButtonText";
import { default as CarResult } from "../../Cars/Result/Result";

export default function Result({ routeType, routeNumber }) {
  const [data, setData] = useState([]);
  const [currCar, setCurrCar] = useState(null);

  useEffect(() => {
    setData(fetchRoutes(routeType, routeNumber));
    setCurrCar(null);
  }, [routeNumber, routeType]);

  const openCar = (e) => {
    setCurrCar(e.target.value);
  };

  return (
    <article className={classes.Results}>
      <section className={classes.Results__inner}>
        {data.map((item) => (
          <ButtonText key={item} title={item} callback={openCar} />
        ))}
      </section>
      {currCar !== null ? <CarResult garageNumber={currCar} /> : null}
    </article>
  );
}
