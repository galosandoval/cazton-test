import React, { useState } from "react";
import { carrotSVG } from "../../styles/svg";
import { dollarUS } from "../../utils/currency";
import { Carrot, ProductCardStyles, TextContainer } from "./ProductCardStyles";

const ProductCard = ({ p, i }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((state) => !state);
  };
  return (
    <ProductCardStyles key={p?.title + i}>
      <img src={p.image} alt="product" />
      <h1>{p.title}</h1>
      <p>{dollarUS.format(p.price)}</p>
      <Carrot onClick={handleOpen} isOpen={isOpen}>
        {carrotSVG}
      </Carrot>
      <TextContainer isOpen={isOpen}>
        <p>{p.description}</p>
      </TextContainer>
    </ProductCardStyles>
  );
};

export default ProductCard;
