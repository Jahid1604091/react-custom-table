import React from "react";

const Row = ({tdata,headers,isChecked}) => {
  return (
    <>
      <li key={tdata.id}>
        {headers?.slice(0, headers.length - 1).map((header, index) => (
          <p key={header.id} className="body-cell">
            {index == 3 ? 
            <select name="" id="">
                <option value="" defaultChecked>Draft</option>
                <option value="">Pending</option>
                <option value="">Published</option>
            </select>: 
            isChecked[index] && tdata[header.text]}
          </p>
        ))}
        <p className="body-cell">
          {isChecked[headers.length - 1] && <button> Edit</button>}
        </p>
      </li>
    </>
  );
};

export default Row;
