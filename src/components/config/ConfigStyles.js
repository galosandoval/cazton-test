import styled from "styled-components";
import { colorBackground, colorPrimary, colorWhite } from "../../styles/globalVariables";

export const ConfigStyles = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Top = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  border-radius: 10px;
  margin-top: 5rem;
  padding: 1rem;
  background-color: ${colorWhite};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.8rem;
  }

  img {
    object-fit: contain;
    height: 20rem;
    width: 20rem;
    flex: 0 0 50%;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  button {
    background-color: ${colorBackground};
    color: white;
    padding: 1rem 3rem;
    display: grid;
    place-items: center;
    border-radius: 5px;
  }
`;

export const Content = styled.div`
  display: flex;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const CheckBoxLabel = styled.label`
  cursor: pointer;
`;

export const TextInput = styled.input`
  background-color: ${colorPrimary};
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
`;
