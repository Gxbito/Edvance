import React from "react";
import styled from "styled-components";

const CardStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  gap: 160px;

  & > img:first-child,
  & > img:last-child {
    height: 480px;
    width: 480px;
    border: 3px solid var(--white-color);
    border-radius: 18px;
    object-fit: cover;
    box-shadow: var(--shadow);

    @media (max-width: 968px) {
      width: 100%;
      height: 380px;
    }
  }

  & > img:last-child {
    @media (max-width: 968px) {
      order: 1;
    }
  }

  & > div:first-child,
  & > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 48px;

    @media (max-width: 968px) {
      gap: 24px;
    }
  }

  & > div:first-child {
    @media (max-width: 968px) {
      order: 2;
    }
  }

  @media (max-width: 968px) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    gap: 48px;
    padding: 0px 12px;
  }
`;

const TitleIconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;

  img {
    width: 60px;
    height: 60px;

    @media (max-width: 968px) {
      display: none;
    }
  }

  h2 {
    font-family: var(--font-primary);
    font-weight: 700;
    font-size: var(--font-medium);
    background: var(--gradient-color);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  & + p {
    font-family: var(--font-secondary);
    font-weight: 400;
    font-size: var(--font-small);
    color: var(--paragraph-color);
    white-space: pre-line;
  }
`;

function Card({ type, side }) {
  const cardConfig = {
    type1: {
      img: "/src/assets/images/image-1.jpg",
      icon: "/src/assets/icons/rocket.svg",
      title: "¿Qué es Edvance?",
      text: `Edvance es una empresa dedicada a la innovación educativa y al desarrollo empresarial, enfocada en brindar soluciones integrales de formación y consultoría a organizaciones de todos los tamaños.

Con una combinación de experiencia en e-learning, transformación digital y desarrollo organizacional, trabajamos mano a mano con nuestros clientes para diseñar estrategias que impulsen su crecimiento y competitividad.

Creemos en el poder del conocimiento y la innovación para transformar el futuro.`,
    },
    type2: {
      img: "/src/assets/images/image-2.jpg",
      icon: "/src/assets/icons/buildings.svg",
      title: "Nuestra misión",
      text: `Nuestra misión es impulsar la transformación y el crecimiento de las empresas mediante soluciones de formación innovadoras y personalizadas.

Nos dedicamos a proporcionar cursos y capacitaciones de alta calidad, consultorías en transformación digital y desarrollo organizacional, ayudando a nuestros clientes a alcanzar sus metas estratégicas y a liderar en sus industrias.`,
    },
    type3: {
      img: "/src/assets/images/image-3.jpg",
      icon: "/src/assets/icons/flag.svg",
      title: "Conocimiento e Innovación",
      text: `Ser el socio estratégico líder en innovación educativa y consultoría para empresas, reconocidos por nuestra capacidad para transformar organizaciones, potenciar el talento humano y fomentar una cultura de aprendizaje continuo y adaptabilidad en un entorno empresarial en constante cambio.`,
    },
  };

  const { img, icon, title, text } = cardConfig[type];

  return (
    <CardStyled>
      {side === "left" ? <img src={img} alt="edvance-office" /> : null}
      <div>
        <TitleIconContainer>
          <img src={icon} alt="icon" />
          <h2>{title}</h2>
        </TitleIconContainer>
        <p>{text}</p>
      </div>
      {side === "right" ? <img src={img} alt="edvance-office" /> : null}
    </CardStyled>
  );
}

export default Card;
