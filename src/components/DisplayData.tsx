import { Weather } from "../interface/Interfaces";
import React from "react";

const DisplayData: React.FC<any> = ({ greeting }) => {
  return (
    <>
      <div>
        <p>Country: {greeting?.city.country}</p>
        <p>City: {}</p>
        <p>Population: {}</p>
      </div>
      <div></div>
    </>
  );
};

export default DisplayData;
