import { styled } from "styled-components";

export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  min-width: 32px;
  padding: 0px 16px;
  height: 36px;
  font-size: 1rem;
  font-weight: 700;
  background-color: transparent;
  color: #2c3333;
  border-radius: 3px;
  border: 1px solid #2c3333;
  transition: 100ms;
  &:hover {
    text-shadow: 0px 0px 1px #2c3333;
    box-shadow: 0.5px 0.5px 5px 0px #2c3333;
  }
`;
