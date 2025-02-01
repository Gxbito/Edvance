import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  cursor: pointer;
  display: ${({ size }) => (size === "normal" ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: ${({ size }) => (size === "normal" ? "16px 24px" : "12px 12px")};
  background-color: ${({ variant }) =>
    variant === "primary" ? "var(--primary-color)" : "var(--background-color)"};
  border-radius: 6px;
  border: ${({ variant }) =>
    variant === "primary" ? "none" : "1px solid var(--primary-color)"};
  transition: all 0.2s ease;

  font-family: var(--font-secondary);
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;
  text-align: center;
  color: ${({ variant }) =>
    variant === "primary" ? "var(--white-color)" : "var(--primary-color)"};

  &:hover {
    filter: brightness(0.9);
  }

  img {
    height: 1em;
    width: auto;
  }

  @media (max-width: 968px) {
    display: ${({ size }) => (size === "normal" ? "flex" : "flex")};
  }
`;

function Button({ children, onClick, variant, size }) {
  return (
    <ButtonStyled variant={variant} onClick={onClick} size={size}>
      {children}
    </ButtonStyled>
  );
}

export default Button;
