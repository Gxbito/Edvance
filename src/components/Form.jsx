import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";

const FormContainer = styled.form`
  width: 100%;
  max-height: 545px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  padding: 72px 48px;
  background-color: #ffffff;
  border-radius: 18px;
  box-shadow: var(--shadow);

  & > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;

    h3 {
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: var(--font-medium);
      background: var(--gradient-color);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      max-width: 49ch;
      font-family: var(--font-secondary);
      font-weight: 300;
      font-size: var(--font-small);
      color: var(--paragraph-color);
    }
  }

  & > div:nth-child(2) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;
  }

  button {
    width: 100%;
  }

  @media (max-width: 968px) {
    padding: 24px;
  }
`;

function Form() {
  return (
    <FormContainer>
      <div>
        <h3>Contáctanos</h3>
        <p>
          ¡Hablemos! Completa el formulario y te responderemos a la brevedad
          para atender tus consultas.
        </p>
      </div>
      <div>
        <Input placeholder="Nombre" type="text"/>
        <Input placeholder="Email" type="email"/>
        <Input placeholder="Contraseña" type="password"/>
      </div>
      <Button variant="primary" size="normal">Contact</Button>
    </FormContainer>
  );
}

export default Form;
