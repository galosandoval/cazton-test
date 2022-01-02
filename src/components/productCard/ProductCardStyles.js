import styled from "styled-components/macro";
import { colorPrimary } from "../../styles/globalVariables";
import { Card } from "../config/ConfigStyles";

export const ProductCardStyles = styled(Card)`
  width: 45%;
  align-self: flex-start;
  padding: 2rem;
  overflow: hidden;
  margin-inline: auto;
  gap: 1.5rem;
  & > p {
    background-color: ${colorPrimary};
    width: 100%;
    padding: 1rem;
    text-align: right;
    font-size: 2rem;
    border-radius: 5px;
  }
`;

export const Carrot = styled.button`
  svg {
    transition: 0.3s all ease;
    transform: ${(p) => (p.isOpen ? "rotate(180deg)" : "rotate(0)")};
    height: 2rem;
    width: 2rem;
  }
`;

export const TextContainer = styled.div`
  overflow: hidden;
  padding-inline: 1rem;
  transition: 0.3s all ease;
  height: ${(p) => (p.isOpen ? "100%" : "0")};

  p {
    line-height: 1.5;
    font-size: 1.8rem;
  }
`;
