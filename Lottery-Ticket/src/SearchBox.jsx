import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function searchBox() {
    let [city, setCity] = useState("");

    const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = "bdcf5e07ee1b7bf68d85acfe1c19295a";


    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let getWeatherInfo = async () => {
        let response = await fetch (`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            condition: jsonResponse.weather[0].main,
            feelsLike: jsonResponse.main.feels_like,
            humidity: jsonResponse.main.humidity,
            temp: jsonResponse.main.temp,
            tempMax: jsonResponse.main.temp_max,
            tempMin: jsonResponse.main.temp_min,
            windSpeed: jsonResponse.wind.speed
        }
        
        console.log(result);
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }

  return (
    <div className="search-box">
      <h2>Today's Weather Condition</h2>
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required onChange={handleChange} value={city} />
        <br />
        <br />
        <Button variant="contained" endIcon={<SearchIcon />} type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
