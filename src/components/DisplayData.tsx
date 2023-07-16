import React from "react";

const DisplayData: React.FC<any> = ({ weather }) => {
  return (
    <>
      <div className="city-info-wrapper">
        <div className="city-info">Country: {weather?.city.country}</div>
        <div className="city-info">City: {weather?.city.name}</div>
        <div className="city-info">Population: {weather?.city.population}</div>
      </div>

      {weather?.list.map((element: any) => (
        <div>
          <div>
            <span>{element.dt_txt} /</span>
            <span>{element.main.feelslike} / </span>
            <span>{element.main.humidity} / </span>
            <span>{element.main.pressure} / </span>
            <span>{element.main.temp} /</span>
            <span>{element.main.temp_max} / </span>
            <span>{element.main.temp_min}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default DisplayData;
