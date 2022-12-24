import React, { useState } from "react";
import classes from "../Parser.module.scss";
import CustomSelect from "../../../components/UI/CustomSelect/CustomSelect";
import ParserField from "../ParserField/ParserField";
import InputDefault from "../../../components/UI/inputs/InputDefault/InputDefault";
import ButtonText from "../../../components/UI/buttons/ButtonText/ButtonText";
import Result from "./Result/Result";

export default function ParserCars({ goBack }) {
  const [searchQuery, setSearchQuery] = useState({
    type: "tram",
    garagenumber: "",
    platenumber: "",
  });
  const [garageNumberDisabled, disableGarageNumber] = useState(false);
  const [plateNumberDisabled, disablePlateNumber] = useState(false);

  const handleGarageNumber = (e) => {
    if (/\D/.test(e.target.value)) {
      return;
    }
    setSearchQuery({ ...searchQuery, garagenumber: e.target.value });
    if (e.target.value !== "") {
      disablePlateNumber(true);
    } else {
      setSearchQuery({ ...searchQuery, garagenumber: "" });
      disablePlateNumber(false);
    }
  };
  const handlePlateNumber = (e) => {
    const isPlateNumber =
      /^\s?([аА-яЯ]{1})(\d{1,3}?([аА-яЯ]{1,2}(\d{1,2})?)?)?$/.test(
        e.target.value
      ) || e.target.value === "";
    if (!isPlateNumber) {
      return;
    }
    setSearchQuery({ ...searchQuery, platenumber: e.target.value });
    if (e.target.value !== "") {
      disableGarageNumber(true);
    } else {
      setSearchQuery({ ...searchQuery, platenumber: "" });
      disableGarageNumber(false);
    }
  };

  const handleSearchType = (newType) => {
    setSearchQuery({ type: newType, garagenumber: "", platenumber: "" });
    disableGarageNumber(false);
    disablePlateNumber(false);
  };

  return (
    <div className={classes.Parser__searchContainer}>
      <nav className={classes.Parser__nav}>
        <ButtonText title="Назад" callback={goBack} />
        <h3 className={classes.Parser__title}>Поиск по ТС</h3>
      </nav>
      <div className={classes.Parser__selectSearch}>
        <ParserField title="Тип ТС">
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
        <ParserField title="Бортовой номер">
          <InputDefault
            placeholder="31001"
            callback={handleGarageNumber}
            disabled={garageNumberDisabled}
            size="1"
            value={searchQuery.garagenumber}
            mask={{ type: "number", max: 6 }}
          />
        </ParserField>
        <ParserField title="Госномер">
          <InputDefault
            placeholder="В777ОР99"
            callback={handlePlateNumber}
            disabled={plateNumberDisabled}
            size="6"
            value={searchQuery.platenumber}
            mask={{ type: "text", max: 8 }}
          />
        </ParserField>
      </div>
      {/\d{4,6}/.test(searchQuery.garagenumber) ||
      /^[аА-яЯ]\d\d\d[аА-яЯ][аА-яЯ]\d\d$/.test(searchQuery.platenumber) ? (
        <Result
          plateNumber={searchQuery.platenumber}
          garageNumber={searchQuery.garagenumber}
        />
      ) : null}
    </div>
  );
}
