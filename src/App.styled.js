import { styled } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background-color: rgba(165, 201, 202, 0.2);
  border-radius: 25px;
  padding: 30px 5px 30px 5px;
  box-shadow: 2px 2px 10px 2px rgba(57, 91, 100, 0.6);
`;

export const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
