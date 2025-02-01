import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { IoMenuSharp } from "react-icons/io5";

const NavbarStyled = styled.nav`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0px;

  img {
    width: 230px;
    height: 100%;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;

    @media (max-width: 968px) {
      display: none;
    }

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 80px;
      list-style: none;

      li {
        font-family: var(--font-secondary);
        font-weight: 400;
        font-size: 1.12rem;
        text-transform: uppercase;
        color: var(--primary-color);

        a {
          text-decoration: none;
          color: var(--primary-color);

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  @media (max-width: 968px) {
    padding: 12px;

    img {
      width: 140px;
    }

    & > button:last-child {
      display: flex;
    }
  }
`;

function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <NavbarStyled>
      <img src="src/assets/images/Logo_color 1.svg" alt="edvance" />
      <div>
        <ul>
          <li>
            <a href="#" onClick={() => scrollToSection("CardsSection")}>
              ¿Quiénes somos?
            </a>
          </li>
          <li>
            <a href="#" onClick={() => scrollToSection("ServicesSection")}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#" onClick={() => scrollToSection("ContactSection")}>
              Contacto
            </a>
          </li>
        </ul>
        <Button variant="primary" size="normal">
          INGRESO A CURSOS
        </Button>
      </div>
      <Button variant="primary" size="small">
        <IoMenuSharp />
      </Button>
    </NavbarStyled>
  );
}

export default Navbar;
