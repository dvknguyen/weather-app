import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { LocationData, Weather } from "../interface/Interfaces";

export const getForcast5Days = (location: LocationData) =>
  useQuery<Weather>(["test1", location.lat, location.lon], async () => {
    const response = await axios.get<Weather>(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=dbd3b02d8958d62185d02e944cd5f522`
    );
    return response.data;
  });
