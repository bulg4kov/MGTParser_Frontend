import React from "react";
import classes from "../Parser.module.scss";
import ButtonText from "../../../components/UI/buttons/ButtonText/ButtonText";
import ParserField from "../ParserField/ParserField";
import InputDefault from "../../../components/UI/inputs/InputDefault/InputDefault";
import CustomSelect from "../../../components/UI/CustomSelect/CustomSelect";
import { useState } from "react";
import Result from "./Result/Result";

export default function ParserRoutes({ goBack, openCar }) {
  const [searchQuery, setSearchQuery] = useState({
    type: "tram",
    routeNumber: "",
  });

  const handleSearchType = (newType) => {
    setSearchQuery({ type: newType, routeNumber: "" });
  };

  const handleRouteNumber = (e) => {
    setSearchQuery({ ...searchQuery, routeNumber: e.target.value });
  };

  return (
    <div className={classes.Parser__searchContainer}>
      <nav className={classes.Parser__nav}>
        <ButtonText title="Назад" callback={goBack} />
        <h3 className={classes.Parser__title}>Поиск по маршруту</h3>
      </nav>
      <div className={classes.Parser__selectSearch}>
        <ParserField title="Тип маршрута">
          <CustomSelect
            options={{
              tram: "Трамвай",
              bus: "Автобус",
              electobus: "Электробус",
            }}
            selected={searchQuery.type}
            callback={handleSearchType}
          />
        </ParserField>
        <ParserField title="Номер маршрута">
          <InputDefault
            placeholder="25"
            callback={handleRouteNumber}
            size="1"
            value={searchQuery.garagenumber}
            mask={{ type: "number", max: 6 }}
          />
        </ParserField>
      </div>
      {searchQuery.routeNumber !== "" ? (
        <Result
          routeNumber={searchQuery.routeNumber}
          routeType={searchQuery.type}
          openCar={openCar}
        />
      ) : null}
    </div>
  );
}
