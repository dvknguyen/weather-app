export type LocationData = {
  lat: string;
  lon: string;
  name: string;
};

export interface Weather {
  city: {
    country: string;
    name: string;
    population: number;
  };
  list: [
    {
      dt_txt: string;
      main: {
        feelslike: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
      };
    }
  ];
  weather: [
    {
      desciption: string;
    }
  ];
  wind: [
    {
      deg: number;
      gust: number;
      speed: number;
    }
  ];
}