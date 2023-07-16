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
      <div className="weather-card-wrapper">
        {forcastData?.list.map((element: any) => (
          <div className="weather-card">
            <div>Time: {new Date(element.dt_txt.toString()).getHours()}:00</div>
            <img
              src={`https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`}
            ></img>
            <div>{element.main.temp}</div>
            <div>{element.weather[0].description}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayData;
