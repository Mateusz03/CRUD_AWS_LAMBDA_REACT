import { useContext } from "react";

import {
  StyledCheckBox,
  StyledColumn,
  StyledColumnID,
  StyledColumnValue,
  StyledContainer,
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
              <StyledCheckBox
                id={e.ID + "Box"}
                type="checkbox"
                onChange={(element) => {
                  handleCheck(element, e);
                }}
              ></StyledCheckBox>
            </StyledColumn>
          );
        })
      : "";

  return (
    <StyledContainer>
      <StyledColumn>
        <StyledColumnID>ID</StyledColumnID>
        <StyledColumnValue>Value</StyledColumnValue>
        <StyledColumnValue item={"false"}>Select</StyledColumnValue>
      </StyledColumn>
      {catalog}
    </StyledContainer>
  );
};
export default Table;
