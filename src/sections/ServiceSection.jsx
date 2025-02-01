import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import styled from "styled-components";

const ServicesSectionStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;

  h2 {
    font-family: var(--font-primary);
    font-weight: 700;
    font-size: var(--font-medium);
    background: var(--gradient-color);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 968px) {
      padding: 0px;
      display: none;
    }
  }

  @media (max-width: 968px) {
    gap: 24px;
  }
`;

const ServiceSliderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("src/assets/images/image-service-1.jpg");
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 1;
  padding: 100px 0px;
  overflow: hidden;

  &::before {
    z-index: 2;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      55% 80% at 100% 50%,
      rgba(0, 0, 0, 0) 0%,
      #0b0c0e 100%
    );

    @media (max-width: 968px) {
      background: #0b0c0e 100%;
    }
  }

  @media (max-width: 968px) {
    padding: 24px 12px;
  }
`;

const ServiceSlider = styled.div`
  z-index: 3;
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 48px;

  h3 {
    font-family: var(--font-primary);
    font-weight: 700;
    font-size: var(--font-medium);
    color: var(--white-color);
  }

  p {
    max-width: 70ch;
    font-family: var(--font-secondary);
    font-weight: 400;
    font-size: var(--font-small);
    color: var(--white-color);
    white-space: pre-line;
  }

  .swiper-button-next {
    right: 0px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #ffffff;
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

  .swiper {
    height: 100%;
    width: 100%;
    align-items: center;
    overflow: hidden;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 48px;
    padding-left: 204px;

    @media (max-width: 968px) {
      padding-left: 12px;
    }
  }
`;

const slides = [
  {
    title: "Cursos de Capacitación Personalizados",
    text: `En Edvance, creemos que la capacitación es clave para el éxito de cualquier organización. Por ello, ofrecemos cursos e-learning personalizados diseñados para abordar las necesidades específicas de cada empresa, con un enfoque en áreas fundamentales como la seguridad operacional, la reglamentación laboral y el desarrollo de habilidades prácticas.
    
    Nuestros programas no son genéricos; trabajamos contigo para identificar los desafíos únicos de tu equipo y construir módulos de aprendizaje adaptados a tus objetivos. Desde cumplir con las normativas vigentes hasta mejorar la productividad y el trabajo en equipo, nuestros cursos integran contenido actualizado, práctico y relevante para garantizar el crecimiento y cumplimiento dentro de tu organización.
    
    Con una modalidad asincrónica, tus trabajadores pueden capacitarse a su propio ritmo, sin descuidar sus labores. A través de herramientas interactivas, evaluaciones específicas y un enfoque práctico, nuestros cursos no solo educan, sino que también fomentan una cultura de prevención, cumplimiento y mejora continua. Prepara a tu equipo para liderar con conocimiento y confianza.`,
  },
  {
    title: "Desarrollo Organizacional Estratégico",
    text: `El éxito de una empresa no depende solo de su producto o servicio, sino también de su estructura interna y la forma en que sus equipos trabajan juntos. En Edvance, ayudamos a las organizaciones a identificar áreas de mejora, optimizar procesos y crear una cultura laboral sólida y positiva.
    
    Nuestro enfoque comienza con un diagnóstico detallado, donde analizamos tus dinámicas internas, procesos operativos y niveles de satisfacción de los empleados. A partir de ahí, diseñamos planes estratégicos que no solo abordan los problemas actuales, sino que también preparan a tu organización para enfrentar desafíos futuros.
    
    Además, nos enfocamos en fortalecer la comunicación, el liderazgo y la alineación de los equipos hacia objetivos comunes. Con nuestra experiencia en desarrollo organizacional, te ayudamos a construir una empresa más eficiente, ágil y preparada para superar cualquier reto. Porque el cambio interno es el primer paso hacia el éxito externo`,
  },
  {
    title: "Consultoría en Transformación Digital",
    text: `En un mundo cada vez más conectado, las empresas que no se adaptan al cambio digital quedan rezagadas. En Edvance, te guiamos en el proceso de integrar tecnología de manera efectiva y estratégica en todas las áreas de tu organización.
    
    Nuestro servicio de transformación digital no se trata sólo de implementar herramientas tecnológicas, sino de cambiar la forma en que tu empresa opera y compite. Realizamos un análisis detallado de tus procesos actuales, identificamos oportunidades de mejora y seleccionamos las soluciones tecnológicas más adecuadas para tu negocio.
    
    Desde la automatización de tareas administrativas hasta la implementación de sistemas de análisis de datos, te ayudamos a optimizar recursos, mejorar la experiencia del cliente y aumentar la competitividad. La transformación digital no es el futuro, es el presente, y en Edvance estamos listos para ayudarte a liderar este cambio.`,
  },
];

const slidesBackgrounds = [
  "/src/assets/images/image-service-1.jpg",
  "/src/assets/images/image-service-2.jpg",
  "/src/assets/images/image-service-3.jpg",
];

function ServiceSection() {
  return (
    <ServicesSectionStyled>
      <h2>Nuestros servicios</h2>
      <ServiceSliderContainer id="ServicesSection">
        <ServiceSlider>
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop={true}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </ServiceSlider>
      </ServiceSliderContainer>
    </ServicesSectionStyled>
  );
}

export default ServiceSection;
