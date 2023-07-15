import { useState } from "react";
import { getCities } from "../api/CityApi";
const SearchPlace = () => {
  const [userInput, setUserInput] = useState("");

  const { data, isLoading, isError } = getCities(userInput);

  const handleUserInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserInput(event.target.value);
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
          <p>{data.name}</p>
          <p>{data.lon}</p>
          <p>{data.lat}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchPlace;
