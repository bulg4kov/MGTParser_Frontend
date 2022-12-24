import { React, useState } from "react";
import classes from "./Field.module.scss";
import ButtonText from "../../UI/buttons/ButtonText/ButtonText";

export default function Field({ fieldName, fieldResult, fieldAction }) {
  const [actionResult, setActionResult] = useState(null);

  const InactiveButton = () => {
    const result = (
      <span className={classes.Field__error}>Функция недоступна</span>
    );
    setActionResult(result);
  };

  return (
    <div className={classes.Field}>
      <span className={classes.Field__name}>
        {fieldName}
        <span className={classes.Field__result}>{fieldResult}</span>
      </span>
      {fieldAction ? (
        <ButtonText title={fieldAction} callback={InactiveButton} />
      ) : null}
      {actionResult}
    </div>
  );
}
