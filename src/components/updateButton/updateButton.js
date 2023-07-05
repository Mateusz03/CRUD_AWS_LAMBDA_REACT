import { CrudContext } from "../../App";
import { StyledButton } from "../styles/button.styled";
import { useCallback, useRef, useContext, useEffect } from "react";
import { updateFunction } from "../../functions/provider.function";

const UpdateButton = () => {
  const { item, setItem, IsCheck, setIsCheck } = useContext(CrudContext);
  const updateClick = useRef(false);

  const handleUpdate = useCallback(async () => {
    const data = await updateFunction(IsCheck);
    if (typeof data !== "undefined") {
      let array = [...IsCheck];

      array[0].value = data.value;
      for (let i = 0; i < item.length; i++) {
        if (item[i].ID === array[0].ID) {
          let itemArr = item;
          itemArr[i].value = data.value;
          setItem(itemArr);
          setIsCheck([]);
          updateClick.current = true;
        }
      }
    }
  }, [IsCheck, item, setIsCheck, setItem]);

  const handleUpdateRef = useRef(handleUpdate);

  useEffect(() => {
    if (updateClick.current === true) {
      handleUpdateRef.current();
      updateClick.current = false;
    }
  }, []);

  return <StyledButton onClick={handleUpdate}>Update</StyledButton>;
};

export default UpdateButton;
