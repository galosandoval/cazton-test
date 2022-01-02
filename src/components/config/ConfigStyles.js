import styled from "styled-components/macro";
import { colorBackground, colorPrimary, colorWhite, ffSpline } from "../../styles/globalVariables";

export const ConfigStyles = styled.div`
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
  align-self: center;

  h1 {
    font-size: 1.8rem;
    text-align: center;
    font-family: ${ffSpline};
    font-weight: 500;
    color: ${colorBackground};
  }

  img {
    object-fit: contain;
    height: 20rem;
    width: 20rem;
    flex: 0 0 50%;
    align-self: center;
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
    transition: all 0.3s ease;
    border: 1px solid ${colorBackground};
    cursor: pointer;

    &:hover {
      background-color: white;
      color: ${colorBackground};
    }

    &:disabled {
      background-color: ${colorPrimary};
    }
  }

  ul > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const CardContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  display: flex;
`;

export const CheckBoxLabel = styled.label`
  cursor: pointer;
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

export const TextInput = styled.input`
  background-color: ${colorPrimary};
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  transition: all ease 0.3s;

  &:focus,
  &:focus-within {
    outline: none;
    box-shadow: 0 0.5rem 1rem rgba(0 0 0 / 0.15);
  }
`;
