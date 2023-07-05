import { useCallback, useRef, useContext, useEffect } from "react";
import { StyledButton } from "../styles/button.styled";
import addFunction from "../../functions/add.function";
import { CrudContext } from "../../App";

const AddButton = () => {
  const { item, setItem } = useContext(CrudContext);
  const addClick = useRef(false);

  const handleAdd = useCallback(async () => {
    const data = await addFunction();

    if (data?.status === "Success") {
      let array = [...item];
      array.push({ ID: data.ID, value: data.value });
      setItem(array);
      addClick.current = true;
    }
  }, [item, setItem]);

  const handleAddRef = useRef(handleAdd);

  useEffect(() => {
    if (addClick.current === true) {
      handleAddRef.current();
      addClick.current = false;
    }
  }, []);

  return <StyledButton onClick={handleAdd}>Add</StyledButton>;
};

export default AddButton;
