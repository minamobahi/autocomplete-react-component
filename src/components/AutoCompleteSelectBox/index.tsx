import { FunctionComponent, useState, useEffect } from "react";
import DropDownIcon from "../../assets/icon-dropdown.svg";
import "./index.scss";

interface SelectBoxOptionType {
  id: number;
  value: string;
}

interface SelectBoxPropsType {
  options: SelectBoxOptionType[];
}
const AutoCompleteSelectBox: FunctionComponent<SelectBoxPropsType> = ({
  options,
}) => {
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
        <ul className="options">
          {filteredOptionsList.map((option) => (
            <li
              className={option.id === activeOptionId ? "active" : ""}
              key={option.id}
            >
              {option.value}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default AutoCompleteSelectBox;
