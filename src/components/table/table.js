import { useContext } from "react";

import {
  StyledCheckBox,
  StyledColumn,
  StyledColumnID,
  StyledColumnValue,
  StyledContainer,
  StyledCheckBoxContainer,
} from "./table.styled";
import { checkFunction } from "../../functions/provider.function";
import { CrudContext } from "../../App";

const Table = () => {
  const { item, IsCheck, setIsCheck, checkAll } = useContext(CrudContext);

  const handleCheck = (e, handleItem) => {
    setIsCheck(checkFunction(e, IsCheck, handleItem));
    if (!e.target.checked) {
      checkAll.current = false;
    }
  };

  const catalog =
    typeof item !== "undefined"
      ? item.map((e, i) => {
          return (
            <StyledColumn key={i}>
              <StyledColumnID>{e.ID}</StyledColumnID>
              <StyledColumnValue item={"true"}>{e.value}</StyledColumnValue>
              <StyledCheckBoxContainer>
                <StyledCheckBox
                  id={e.ID + "Box"}
                  type="checkbox"
                  onChange={(element) => {
                    handleCheck(element, e);
                  }}
                ></StyledCheckBox>
              </StyledCheckBoxContainer>
            </StyledColumn>
          );
        })
      : "";

  return (
    <StyledContainer>
      <StyledColumn style={{ borderTop: "1px solid #2c3333" }}>
        <StyledColumnID>ID</StyledColumnID>
        <StyledColumnValue>Value</StyledColumnValue>
        <StyledColumnValue item={"false"} type="Select">
          Select
        </StyledColumnValue>
      </StyledColumn>
      {catalog}
    </StyledContainer>
  );
};
export default Table;
