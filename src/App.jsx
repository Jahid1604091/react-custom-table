import data from "./data";
import { useState } from "react";
import Row from "./components/Row";
import Hamburger from "./components/Hamburger";

function App() {
  const headers = [
    { id: 1, text: "title" },
    { id: 2, text: "categories" },
    { id: 3, text: "date" },
    { id: 4, text: "status" },
    { id: 5, text: "action" },
  ];

  const [isChecked, setChecked] = useState(Array(headers.length).fill(true));

  return (
    <section className="main">
      {/* Hamburger */}
      <Hamburger
        headers={headers}
        isChecked={isChecked}
        setChecked={setChecked}
      />

      <br />

      <div className="table-section">
        {/* table heading */}
        <ul className="header">
          {headers.map((header, idx) => (
            <li key={header.id} className="header-cell">
              {isChecked[idx] && header.text}
            </li>
          ))}
        </ul>

        {/* table body */}
        <ul className="body">
          {data?.map((tdata) => {
            return (
              <Row key={tdata.id} tdata={tdata} headers={headers} isChecked={isChecked} />
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default App;
