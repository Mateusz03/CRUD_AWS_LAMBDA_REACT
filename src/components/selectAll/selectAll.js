import { useContext } from "react";
import {
  StyledCheckBox,
  StyledContainer,
  StyledText,
} from "./selectAll.styled";
import { CrudContext } from "../../App";
import { changeFunction } from "../../functions/provider.function";

const SelectAll = () => {
  const { setIsCheck, item, checkAll } = useContext(CrudContext);

  const handleChange = (e) => {
    let res = changeFunction(e, item);
    if (res === true) {
      checkAll.current = true;
      setIsCheck([...item]);
    } else {
      checkAll.current = false;
      setIsCheck([]);
    }
  };

  return (
    <StyledContainer>
      <StyledText>SelectAll</StyledText>
      <StyledCheckBox
        type="checkbox"
        onChange={handleChange}
        checked={checkAll.current}
      />
    </StyledContainer>
  );
};

export default SelectAll;
