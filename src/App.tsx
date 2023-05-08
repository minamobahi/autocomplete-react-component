import { useEffect, useState } from "react";
import AutoCompleteSelectBox from "./components/AutoCompleteSelectBox/index";
import type { SelectBoxOptionType } from "./interfaces/interfaces";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const mappedUsersList = data.map((user) => ({
          id: user.id,
          value: user.name,
        }));
        setUsers(mappedUsersList);
      })
      .catch((error) => console.log("error: ", error));
  }, []);

  return (
    <>
      <h1>Autocomplete Select Box React Component</h1>
      <div className="box-container">
        {users.length > 0 ? (
          <AutoCompleteSelectBox options={users} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}

export default App;
