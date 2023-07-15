import { UseQueryResult } from "@tanstack/react-query";
import { useState } from "react";
import { getCities } from "../api/CityApi";
import { getForcast5Days } from "../api/Forcast5Days";

type LocationData = {
  lat: string;
  lon: string;
  name: string;
};

interface Weather {
  cod: string;
  message: number;
}
const SearchPlace = () => {
  const [userInput, setUserInput] = useState("");
  const [location, setLocation] = useState<LocationData>({
    lat: "a",
    lon: "a",
    name: "a",
  });

  const [weather, setWeather] = useState<UseQueryResult>();

  const { data, isLoading, isError } = getCities(userInput);
  const test = getForcast5Days(location);
  if (test.data) {
    console.log(test.data);
  }

  const handleUserInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserInput(event.target.value);
  };

  const handleOnclick = (locationdate: LocationData) => {
    setWeather(undefined);
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
          <p>{data.lon}</p>
          <p>{data.lat}</p>
        </div>
      ))}
      <p> {test.data?.cod}</p>
      <p> {test.data?.message}</p>
    </div>
  );
};

export default SearchPlace;
