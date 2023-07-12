import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ChangeEvent, useState } from "react";

function SearchPlace() {
  const [city, setCity] = useState<string>("");
  const requestWeather = useQuery({
    queryKey: ["get"],
    queryFn: () =>
      axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?lat=50.0782184&lon=8.2397608&appid=dbd3b02d8958d62185d02e944cd5f522"
        )
        .then((res) => res.data),
  });

  const requestLatLon = useQuery({
    queryKey: ["getLatLon"],
    queryFn: () =>
      axios
        .get(
          "http://api.openweathermap.org/geo/1.0/direct?q=dresden&appid=dbd3b02d8958d62185d02e944cd5f522"
        )
        .then((res) => res.data),
  });

  const handleOnClick = () => {
    requestLatLon;
    if (requestLatLon.data) {
      console.log(requestLatLon.data);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  return (
    <div>
      <input
        value={city}
        placeholder="enter your city"
        onChange={handleChange}
        id="city"
      />
      <p>{city}</p>
      <button onClick={handleOnClick}>Search</button>
    </div>
  );
}

export default SearchPlace;
