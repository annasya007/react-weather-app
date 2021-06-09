import React, { useState } from "react";
import axios from 'axios';
import './Weather.css';

export default function Weather(props) {
    const[weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        console.log(response.data); 
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            city: response.data.name,
            date: "Wednesday 07:00",
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        })
    }

    if(weatherData.ready) {
        return(
    <div className="Weather">
        <form>
            <div className="row">
            <div className="col-6">
            <input 
            type="search" 
            placeholder="Enter a city..." 
            className="form-control" />
            </div>
            <div className="col-3">
            <input
            type="submit"
            value="search"
            className="btn btn-outline-light" />
            </div>
            </div>
        </form>
        <h2>{weatherData.city}</h2>
        <h3>{weatherData.date}</h3>
        <h1>{Math.round(weatherData.temperature)}</h1>
        <img 
        src={weatherData.iconUrl} 
        alt={weatherData.description}
         />
        <div className="row">
            <div className="col-6">
                <ul>
                    <li>
                        Humidity: {weatherData.humidity} %
                    </li>
                </ul>
            </div>
            <div className="col-6">
                <ul>
                    <li>
                        Wind: {Math.round(weatherData.wind)} km/h
                    </li>
                </ul>
            </div>
        </div>
        <div className="Forecast">
        <div className="row">
        <div className="col-4">
        <ul>
            <li>
                14:00
            </li>
            <li>
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
                alt="cloudy"
                />
            </li>
            <li>
                15° / 13°
            </li>
        </ul>
        </div>
        <div className="col-4">
           <ul>
            <li>
                17:00
            </li>
            <li>
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
                alt="cloudy"
                />
            </li>
            <li>
                15° / 13°
            </li>
        </ul> 
        </div>
        <div className="col-4">
           <ul>
            <li>
                20:00
            </li>
            <li>
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
                alt="cloudy"
                />
            </li>
            <li>
                15° / 13°
            </li>
        </ul> 
        </div>
        </div>
        </div>
    </div>
    );
} else {
    const apiKey = "ce3605cd0ccb1bd651f8e3fb805629f6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading....."
    }
}
