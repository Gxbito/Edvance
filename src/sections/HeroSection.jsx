import React from "react";
import Button from "../components/Button";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { MdOutlineMailOutline } from "react-icons/md";

const HeroSectionStyled = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 80px 0px;

  @media (max-width: 968px) {
    padding: 60px 0px;
  }
`;

const HeroContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 260px auto 260px;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  position: relative;

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;

    @media (max-width: 968px) {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 48px;
    }
  }

  @media (max-width: 968px) {
    display: flex;
    justify-content: center;
  }
`;

const PatternContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 70vh;
  background: url("/src/assets/pattern/Line.svg");
`;

const HeroTextContainer = styled.div`
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  text-align: center;

  .swiper-slide {
    display: flex;
    gap: 32px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1 {
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: var(--font-large);
      background: var(--gradient-color);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @media (max-width: 968px) {
        text-align: start;
      }
    }

    p {
      max-width: 51ch;
      font-family: var(--font-secondary);
      font-weight: 400;
      font-size: var(--font-small);
      color: var(--primary-color);
      text-align: center;
      white-space: pre-line;

      @media (max-width: 968px) {
        text-align: start;
      }
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: black;
    border-radius: 50%;
    font-weight: bold;
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-6px);
    }

    @media (max-width: 968px) {
      display: none;
    }
  }

  @media (max-width: 968px) {
    max-width: 90vw;
  }
`;

const ImageSliderContainer = styled.div`
  height: 727px;
  width: 260px;

  .swiper {
    height: 727px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 280px;

    img {
      height: 260px;
      width: 260px;
      object-fit: cover;
      border-radius: 18px;
    }
  }

  @media (max-width: 968px) {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  position: relative;
  z-index: 10;
`;

const WhiteShadow = styled.div`
  width: 100%;
  height: 300px;
  z-index: 2;
  position: absolute;
  left: 0;
  top: ${({ side }) => (side === "bottom" ? "auto" : "0")};
  bottom: ${({ side }) => (side === "bottom" ? "0" : "auto")};
  background: ${({ side }) =>
    side === "bottom"
      ? "linear-gradient(180deg, rgba(242, 253, 255, 0) 0%, #f2fdff 55.5%)"
      : "linear-gradient(180deg, #f2fdff 44.5%, rgba(242, 253, 255, 0) 100%);"};

  @media (max-width: 968px) {
    display: none;
  }
`;

const slides = [
  {
    title: "Innovación Educativa",
    text: `Nuestros cursos de capacitación están diseñados para potenciar las habilidades y conocimientos de los equipos empresariales.

Ofrecemos soluciones e-learning personalizadas que se adaptan a las necesidades específicas de cada organización, promoviendo un aprendizaje flexible, accesible y efectivo. Con contenido actualizado y herramientas interactivas, aseguramos que tu equipo esté siempre a la vanguardia`,
  },
  {
    title: "Transformación Digital",
    text: `En Edvance, ayudamos a las empresas a fortalecer su estructura interna y cultura organizacional.

A través de programas de desarrollo organizacional, identificamos áreas de mejora, optimizamos procesos y potenciamos el talento humano, logrando una mayor cohesión, eficiencia y alineación con los objetivos estratégicos de la empresa.`,
  },
  {
    title: "Creando el Futuro",
    text: `Prepara tu empresa para el futuro con nuestra consultoría en transformación digital.

Guiamos a las organizaciones en la adopción de tecnologías innovadoras, optimización de procesos y mejora de la experiencia del cliente. Desde la planificación estratégica hasta la implementación, te ayudamos a navegar el cambio digital y a posicionarte como líder en tu industria.`,
  },
];

const sideSlides = [
  "/src/assets/images/image-1.jpg",
  "/src/assets/images/image-2.jpg",
  "/src/assets/images/image-3.jpg",
  "/src/assets/images/image-4.jpg",
  "/src/assets/images/image-5.jpg",
];

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Intercambiar elementos
  }
  return shuffledArray;
};

function ImageSlider({ direction }) {
  const shuffledSlides = shuffleArray(sideSlides);

  return (
    <ImageSliderContainer>
      <Swiper
        direction="vertical"
        loop={true}
        slidesPerView="auto"
        spaceBetween={1}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: direction === "up",
        }}
        speed={2000}
        modules={[Autoplay]}
      >
        {shuffledSlides.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="edvance" />
          </SwiperSlide>
        ))}
      </Swiper>
    </ImageSliderContainer>
  );
}

function HeroSection() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <HeroSectionStyled>
        <WhiteShadow side="top" />
        <HeroContainer>
          <ImageSlider direction="up" />
          <div>
            <HeroTextContainer>
              <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                loop={true}
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <h1>{slide.title}</h1>
                    <p>{slide.text}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </HeroTextContainer>
            <ButtonContainer>
              <Button variant="primary" size="normal" onClick={() => scrollToSection("CardsSection")}>
                Saber más
              </Button>
              <Button variant="secondary" size="normal" onClick={() => scrollToSection("ContactSection")}>
                Contactar
                <MdOutlineMailOutline />
              </Button>
            </ButtonContainer>
          </div>
          <ImageSlider direction="down" />
        </HeroContainer>
        <WhiteShadow side="bottom" />
      </HeroSectionStyled>
      <PatternContainer />
    </>
  );
}

export default HeroSection;
