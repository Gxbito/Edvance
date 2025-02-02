import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const CardsSectionStyled = styled.section`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding: 80px 0px;

  @media (max-width: 968px) {
    gap: 80px;
    padding: 60px 0px;
  }
`;

function CardsSection() {
  return (
    <CardsSectionStyled id="CardsSection">
      <Card type="type1" side="left" />
      <Card type="type2" side="right" />
      <Card type="type3" side="left" />
    </CardsSectionStyled>
  );
}

export default CardsSection;
