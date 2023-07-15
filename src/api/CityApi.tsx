import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { LocationData } from "../interface/Interfaces";

export const getCities = (userInput: string) =>
  useQuery<LocationData[]>(
    ["location", userInput],
    async () => {
      const response = await axios.get<LocationData[]>(
        `http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&limit=6&appid=dbd3b02d8958d62185d02e944cd5f522`
      );
      return response.data;
    },
    {
      enabled: !!userInput,
    }
  );
