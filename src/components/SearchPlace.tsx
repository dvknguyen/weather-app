import { useState } from "react";
import React from "react";
import { getCities } from "../api/CityApi";
import { getForcast5Days } from "../api/Forcast5Days";
import { LocationData, Weather } from "../interface/Interfaces";
import DisplayData from "./DisplayData";

let weather: Weather;
let i: number = 0;
const SearchPlace = () => {
  const [userInput, setUserInput] = useState("");
  const [location, setLocation] = useState<LocationData>({
    lat: "",
    lon: "",
    name: "",
  });

  const { data, isLoading, isError } = getCities(userInput);
  const test = getForcast5Days(location);

  const handleUserInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserInput(event.target.value);
  };

  const handleOnclick = (locationdate: LocationData) => {
    setLocation(locationdate);
  };
  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={handleUserInputChange}
        placeholder="Enter a location"
      />
      {data?.map((data) => (
        <div>
          <button onClick={() => handleOnclick(data)}>{data.name}</button>
        </div>
      ))}
      <DisplayData greeting={test.data} />
    </div>
  );
};

export default SearchPlace;
