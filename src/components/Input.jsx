import React from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  width: 100%;
  padding: 14px;
  background-color: #ffffff;
  outline: none;
  border: 1px solid var(--border-color);
  border-radius: 6px;

  font-family: var(--font-secondary);
  font-weight: 400;
  font-size: var(--font-small);
  color: var(--paragraph-color);

  &::placeholder {
    color: var(--border-color);
  }
`;

function Input({ placeholder, type }) {
  return <InputStyled placeholder={placeholder} type={type}/>;
}

export default Input;
