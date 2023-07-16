import "./App.css";
import SearchPlace from "./components/SearchPlace";

function App() {
  return (
    <>
      <div className="app-wrapper">
        <div className="title">
          WEATHER <b>FORECAST</b>
        </div>
        <div className="function-description">
          Enter below a place you want to know the weather of the next 5 days
          and seelect the correct place in the dropdown
        </div>
        <SearchPlace />
      </div>
    </>
  );
}

export default App;
