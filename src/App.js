import { useState, createContext, useEffect, useRef } from "react";
import {
  AddButton,
  DeleteButton,
  Table,
  UpdateButton,
  SelectAll,
} from "./components/provider";
import readApi from "./api/read.api";
import Swal from "sweetalert2";
import { StyledButtonContainer, StyledContainer } from "./App.styled";
import GlobalStyle from "./globalStyle";

export const CrudContext = createContext();

function App() {
  const [item, setItem] = useState();
  const [IsCheck, setIsCheck] = useState([]);
  const checkAll = useRef(false);

  useEffect(() => {
    if (typeof item === "undefined") {
      (async () => {
        const data = await readApi({ type: "Scan" });

        if (data.status === 200) {
          setItem(data.data.Items);
        } else {
          Swal.fire({ icon: "error", title: "Oops...", text: "Bad request!" });
        }
      })();
    }
  }, [item]);

  return (
    <StyledContainer>
      <GlobalStyle />
      <CrudContext.Provider
        value={{ item, setItem, IsCheck, setIsCheck, checkAll }}
      >
        <StyledButtonContainer>
          <AddButton />
          <DeleteButton />
          <UpdateButton />
          <SelectAll />
        </StyledButtonContainer>
        <Table />
      </CrudContext.Provider>
    </StyledContainer>
  );
}

export default App;
