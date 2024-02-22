import React, { useState } from "react";
import { BsList } from "react-icons/bs";
const Hamburger = ({headers,isChecked,setChecked}) => {
    const [isOpen, setOpen] = useState(false);
    
  const handleChange = (index) => {
    const updatedChecked = [...isChecked];
    updatedChecked[index] = !updatedChecked[index];
    setChecked(updatedChecked);
  };

  return (
    <div className="dropdown">
      <button onClick={() => setOpen(!isOpen)} className="dropbtn">
        <BsList size={30} className="text-dark" />
      </button>
      <div id="myDropdown" className={`dropdown-content ${isOpen && "show"}`}>
        <ul>
          <p>Add or remove columns</p>
          {headers.map((header, idx) => (
            <li key={header.id}>
              <input
                type="checkbox"
                id={`checkbox-${header.id}`}
                name={header.text}
                value={header.id}
                checked={isChecked[idx]}
                onChange={() => handleChange(idx)}
                className=""
              />
              <label htmlFor={`checkbox-${header.id}`}> {header.text}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
