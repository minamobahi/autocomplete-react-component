import { FunctionComponent, useState, useEffect } from "react";
import DropDownIcon from "../../assets/icon-dropdown.svg";
import SelectBoxOptions from "../SelectBoxOptions/index";
import type { SelectBoxOptionType } from "../../interfaces/interfaces";

import "./index.scss";

interface AutoCompleteSelectBoxPropsType {
  options: SelectBoxOptionType[];
}
const AutoCompleteSelectBox: FunctionComponent<
  AutoCompleteSelectBoxPropsType
> = ({ options }) => {
  const [activeOptionId, setActiveOptionId] = useState<number>(0),
    [showOptionsList, setShowOptionsList] = useState<boolean>(false),
    [filteredOptionsList, setFilteredOptionsList] =
      useState<SelectBoxOptionType[]>(options),
    [query, setQuery] = useState("");

  const handleToggleButtonClick: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    setQuery("");
    setShowOptionsList(!showOptionsList);
  };
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setQuery(event.target.value);
  };
  const handleOptionClick = (id: number): void => {
    setActiveOptionId(id);
  };

  useEffect(() => {
    if (query.length > 0) {
      const filteredOptions = options.filter(
        (option) => option.value.toLowerCase().indexOf(query.toLowerCase()) > -1
      );
      setShowOptionsList(true);
      setFilteredOptionsList(filteredOptions);
    } else setFilteredOptionsList(options);
  }, [query]);
  
  return (
    <div className="autocomplete">
      <div className="select-box">
        <input
          className="search"
          type={"text"}
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
        ></input>
        <button className="toggle-button" onClick={handleToggleButtonClick}>
          <img src={DropDownIcon} />
        </button>
      </div>
      {showOptionsList ? (
        <SelectBoxOptions
          options={filteredOptionsList}
          activeOptionId={activeOptionId}
          onSelect={handleOptionClick}
        />
      ) : null}
    </div>
  );
};

export default AutoCompleteSelectBox;
