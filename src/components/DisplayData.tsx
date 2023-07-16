import React from "react";

const DisplayData: React.FC<any> = ({ forcastData }) => {
  return (
    <>
      <div className="city-info-wrapper">
        <div className="city-info">Country: {forcastData?.city.country}</div>
        <div className="city-info">City: {forcastData?.city.name}</div>
        <div className="city-info">
          Population: {forcastData?.city.population}
        </div>
      </div>

      {forcastData?.list.map((element: any, index: any) => (
        <div>
          <span>{element.dt_txt} /</span>
          <span>{element.main.feelslike} / </span>
          <span>{element.main.humidity} / </span>
          <span>{element.main.pressure} / </span>
          <span>{element.main.temp} /</span>
          <span>{element.main.temp_max} / </span>
          <span>{element.main.temp_min}</span>
          <span>{element.main.temp_min} </span>
          <span>{element.weather[0].description}</span>
          <img
            src={`https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`}
          ></img>
        </div>
      ))}
    </>
  );
};

export default DisplayData;
