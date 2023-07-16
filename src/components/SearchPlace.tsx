import { useState } from "react";
import React from "react";
import { getCities } from "../api/CityApi";
import { getForcast5Days } from "../api/Forcast5Days";
import { LocationData, Weather } from "../interface/Interfaces";
import DisplayData from "./DisplayData";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SearchPlace = () => {
  const [userInput, setUserInput] = useState("");
  const [location, setLocation] = useState<LocationData>({
    lat: "",
    lon: "",
    name: "",
  });

  const { data, isLoading, isError } = getCities(userInput);
  const forcastData = getForcast5Days(location);

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
      <div className="search-wrapper">
        <div className="search">
          <TextField
            id="search-city"
            type="text"
            label="Location"
            variant="outlined"
            value={userInput}
            onChange={handleUserInputChange}
            placeholder="Enter a location"
          />
        </div>
        {data?.map((data) => (
          <div className="city-result">
            <Button onClick={() => handleOnclick(data)}>{data.name}</Button>
          </div>
        ))}
      </div>
      {forcastData.isSuccess && <DisplayData forcastData={forcastData.data} />}
    </div>
  );
};

export default SearchPlace;
