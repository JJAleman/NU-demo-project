import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.lenght < 1) {
    return (
      <h2 className="seaction-title">
        No cocktails match the search criteria.
      </h2>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">Cocktail List</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
