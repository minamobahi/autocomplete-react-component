import { FunctionComponent } from "react";
import "./index.scss";

interface SelectBoxOptionType {
  id: number;
  value: string;
}

interface SelectBoxPropsType{
  options: SelectBoxOptionType[]
}
const AutoCompleteSelectBox: FunctionComponent<SelectBoxPropsType> = (
  {options}
) => {
  return (
    <div>
      <input name="searchBox" type={"text"} list="selectBox"></input>
      <datalist id="selectBox">
        {/* <option value="someOption">Some option</option>
        <option value="otherOption">Other option</option> */}
        {options.map((item) => (
          <option key={item.id} value={item.value} />
        ))}
      </datalist>
    </div>
  );
};

export default AutoCompleteSelectBox;
