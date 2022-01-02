import React from "react";
import ProductCard from "../productCard/ProductCard";
import { CardContainerStyle } from "./ConfigStyles";

const CardContainer = ({ products }) => {
  return (
    <CardContainerStyle>
      {products.map((p, i) => (
        //  title, picture, category, price and description.
        <ProductCard key={p + i} p={p} i={i} />
      ))}
    </CardContainerStyle>
  );
};

export default CardContainer;
