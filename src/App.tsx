import "./App.css";
import { getForcast5Days } from "./api/Forcast5Days";
import SearchPlace from "./components/SearchPlace";

function App() {
  return (
    <>
      <div className="app-wrapper">
        <div className="title"> WEATHER APP</div>
        <SearchPlace />
      </div>
    </>
  );
}

export default App;
