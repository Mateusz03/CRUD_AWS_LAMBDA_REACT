import {
  StyledColumn,
  StyledColumnID,
  StyledColumnValue,
  StyledCheckBox,
} from "../components/table/table.styled";

const catalogFunction = (item) => {
  if (typeof item !== "undefined") {
    item.map((e, i) => {
      let data;
      let item = (
        <StyledColumn key={i}>
          <StyledColumnID>{e.ID}</StyledColumnID>
          <StyledColumnValue item={"true"}>{e.value}</StyledColumnValue>
          <StyledCheckBox
            id={e.ID + "Box"}
            type="checkbox"
            onChange={(element) => {
              data = { element: element, e: e };
            }}
          ></StyledCheckBox>
        </StyledColumn>
      );
      return { item: item, data: data };
    });
  } else return { item: "" };
};

export default catalogFunction;
