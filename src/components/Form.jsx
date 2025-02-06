import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  padding: 48px;
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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://edvance.cl:8060/api/contact/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      setFormData({ name: "", phone: "", email: "", comment: "" });
    } catch (error) {
    } 
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <h3>Contáctanos</h3>
        <p>
          ¡Hablemos! Completa el formulario y te responderemos a la brevedad
          para atender tus consultas.
        </p>
      </div>
      <div>
        <Input
          placeholder="Nombre"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          placeholder="Teléfono"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <Input
          placeholder="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextArea
          placeholder="Comentario"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        />
      </div>
      <Button variant="primary" size="normal" type="submit">
        Enviar
      </Button>
    </FormContainer>
  );
}

export default Form;
