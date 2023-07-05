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

export const CrudContext = createContext();

function App() {
  const [item, setItem] = useState();
  const [IsCheck, setIsCheck] = useState([]);
  const checkAll = useRef(false);

  useEffect(() => {
    if (typeof item === "undefined") {
      (async () => {
        const data = await readApi({ type: "Scan" });
        if (data.status === 200) setItem(data.data.Items);
        else {
          Swal.fire({ icon: "error", title: "Oops...", text: "Bad request!" });
        }
      })();
    }
  }, [item]);

  return (
    <div className="App">
      <CrudContext.Provider
        value={{ item, setItem, IsCheck, setIsCheck, checkAll }}
      >
        <AddButton />
        <DeleteButton />
        <UpdateButton />
        <SelectAll />
        <Table />
      </CrudContext.Provider>
    </div>
  );
}

export default App;
