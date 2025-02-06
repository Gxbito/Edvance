import React from "react";
import styled from "styled-components";

const TextAreaStyled = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 14px;
  background-color: #ffffff;
  outline: none;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  resize: none;

  font-family: var(--font-secondary);
  font-weight: 400;
  font-size: var(--font-small);
  color: var(--paragraph-color);

  &::placeholder {
    color: var(--border-color);
  }
`;

function TextArea({ placeholder }) {
  return <TextAreaStyled placeholder={placeholder}/>;
}

export default TextArea;
