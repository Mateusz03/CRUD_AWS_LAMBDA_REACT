import { styled } from "styled-components";

export const StyledContainer = styled.div``;

export const StyledButton = styled.button``;

export const StyledColumn = styled.div`
  display: flex;
  width: 500px;
  align-items: center;
  justify-content: space-between;
`;

export const StyledColumnID = styled.h1`
  font-size: 21px;
  padding: 0;
  margin: 0;
  font-weight: 600;
  text-align: center;
  width: 20%;
`;

export const StyledColumnValue = styled.p`
  font-size: 21px;
  padding: 0;
  margin: 0;
  font-weight: 600;
  text-align: center;
  width: ${(p) => (p.item === "true" ? "60%" : "20%")};
`;

export const StyledCheckBox = styled.input`
  width: 20%;
`;
