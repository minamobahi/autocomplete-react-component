import { FunctionComponent } from "react";
import type { SelectBoxOptionType } from "../../interfaces/interfaces";
import "./index.scss";

interface SelectBoxOptionsPropsType {
  options: SelectBoxOptionType[];
  activeOptionId: number;
  onSelect: (id: number) => void;
}
const SelectBoxOptions: FunctionComponent<SelectBoxOptionsPropsType> = ({
  options,
  activeOptionId,
  onSelect,
}) => {
  return (
    <ul className="options">
      {options.length>0 ?
      options.map((option) => (
        <li
          className={option.id === activeOptionId ? "active" : ""}
          key={option.id}
          onClick={() => onSelect(option.id)}
        >
          {option.value}
        </li>
      )) : 
      <li>Nothing found</li>}
    </ul>
  );
};

export default SelectBoxOptions;
