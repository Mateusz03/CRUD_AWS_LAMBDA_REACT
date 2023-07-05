import { StyledButton } from "../styles/button.styled";
import { deleteFunction } from "../../functions/provider.function";
import { useContext, useCallback, useRef, useEffect } from "react";
import { CrudContext } from "../../App";

const DeleteButton = () => {
  const { item, setItem, IsCheck, setIsCheck } = useContext(CrudContext);
  const deleteClick = useRef(false);

  const handleDelete = useCallback(async () => {
    const data = await deleteFunction(IsCheck);

    if (data?.status === "Success" && !data?.error) {
      for (let i = 0; i < item.length; i++) {
        for (let j = 0; j < IsCheck.length; j++) {
          if (item[i] === IsCheck[j]) {
            let arr = item;
            arr.splice(i, 1);
            setItem(arr);
            document.getElementById(`${IsCheck[j].ID}Box`).checked = false;
            setIsCheck([]);
            deleteClick.current = true;
          }
        }
      }
    }
  }, [IsCheck, item, setItem, setIsCheck]);

  const handleDeleteRef = useRef(handleDelete);

  useEffect(() => {
    if (deleteClick.current === true) {
      handleDeleteRef.current();
      deleteClick.current = false;
    }
  }, []);

  return <StyledButton onClick={handleDelete}>Delete</StyledButton>;
};

export default DeleteButton;
