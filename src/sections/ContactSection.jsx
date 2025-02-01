import React from "react";
import Form from "../components/Form";
import styled from "styled-components";

const ContactSectionStyled = styled.section`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 70px;

  img {
    width: 100%;
    height: 711px;
    border: 4px solid #ffffff;
    border-radius: 12px;
    object-fit: cover;
    box-shadow: var(--shadow);

    @media (max-width: 968px) {
      display: none;
    }
  }

  @media (max-width: 968px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0px;
    padding: 0px 12px;
  }
`;

function ContactSection() {
  return (
    <ContactSectionStyled id="ContactSection">
      <img src="src/assets/images/image-7.jpg" alt="#" />
      <Form />
    </ContactSectionStyled>
  );
}

export default ContactSection;
