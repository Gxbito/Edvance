import React from "react";
import Button from "./Button";
import styled from "styled-components";

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 32px;
  position: absolute;
  top: 0;
  z-index: 100;
  background-color: var(--background-color);
  box-shadow: var(--shadow);
  transition: all 0.2s ease;
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(83px)" : "translateY(-1000px)"};

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    list-style: none;

    li {
      font-family: var(--font-secondary);
      font-weight: 400;
      font-size: 1.12rem;
      text-transform: uppercase;
      color: var(--primary-color);
      text-align: center;

      a {
        text-decoration: none;
        color: var(--primary-color);

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  & > ul + button {
    width: 100%;
    margin-top: 40px;
  }
`;

const Separator = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: var(--border-color);
`;

function Menu({ isVisible }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <MenuContainer isVisible={isVisible}>
      <ul>
        <li>
          <a href="#" onClick={() => scrollToSection("CardsSection")}>
            ¿Quiénes somos?
          </a>
        </li>
        <Separator />
        <li>
          <a href="#" onClick={() => scrollToSection("ServicesSection")}>
            Servicios
          </a>
        </li>
        <Separator />
        <li>
          <a href="#" onClick={() => scrollToSection("ContactSection")}>
            Contacto
          </a>
        </li>
      </ul>
      <Button variant="primary" size="normal">
        INGRESO A CURSOS
      </Button>
    </MenuContainer>
  );
}

export default Menu;
