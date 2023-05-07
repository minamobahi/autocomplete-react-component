import { useState } from "react";
import AutoCompleteSelectBox from "./components/AutoCompleteSelectBox";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const mockOptionsList = [
    {
      id: 0,
      value: "item0",
    },
    {
      id: 1,
      value: "item1",
    },
    {
      id: 2,
      value: "item2",
    },
  ];

  return (
    <>
      <h1>Autocomplete Select Box React Component</h1>
      <div>
        <AutoCompleteSelectBox options={mockOptionsList} />
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
