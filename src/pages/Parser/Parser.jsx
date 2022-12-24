import React, { useState } from "react";
import Header from "../../components/Header/Header";
import ParserSelect from "./Select/ParserSelect";
import ParserCars from "./Cars/ParserCars";
import ParserRoutes from "./Routes/ParserRoutes";
import classes from "./Parser.module.scss";

export default function Parser() {
  const [parserType, setParserType] = useState("select");

  const handleParserType = (e) => {
    setParserType(e.target.value);
  };

  const handleGoBack = () => {
    setParserType("select");
  };

  return (
    <>
      <Header />
      <article className={classes.Parser}>
        <section className={classes.Parser__main}>
          {parserType === "select" ? (
            <ParserSelect handleAction={handleParserType} />
          ) : parserType === "cars" ? (
            <ParserCars goBack={handleGoBack} />
          ) : parserType === "routes" ? (
            <ParserRoutes goBack={handleGoBack} />
          ) : null}
        </section>
      </article>
    </>
  );
}
