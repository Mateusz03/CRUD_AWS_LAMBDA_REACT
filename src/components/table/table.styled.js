import { styled } from "styled-components";

export const StyledContainer = styled.div`
  width: 500px;
  height: 600px;
  overflow-y: scroll;
`;

export const StyledColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 1px solid #2c3333;
  border-left: 1px solid #2c3333;
  border-right: 1px solid #2c3333;
  margin: 0px 16px 0px 16px;
`;

export const StyledColumnID = styled.h1`
  font-size: 21px;
  padding: 0;
  margin: 0;
  font-weight: 600;
  text-align: center;
  width: 100px;
`;

export const StyledColumnValue = styled.p`
  font-size: 21px;
  padding: 0;
  margin: 0;
  font-weight: 600;
  text-align: center;
  width: ${(p) =>
    p.item === "true" || p.type !== "Select" ? "250px" : "100px"};
  overflow-wrap: break-word;
  box-sizing: border-box;
  border-right: ${(p) =>
    p.item === "true" || p.type !== "Select" ? " 1px solid #2c3333" : ""};
  border-left: ${(p) =>
    p.item === "true" || p.type !== "Select" ? " 1px solid #2c3333" : ""};
`;

export const StyledCheckBoxContainer = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCheckBox = styled.input``;
