import React from 'react';
import './Weather.css';

export default function Weather() {
return(
    <div classNamne="Weather">
        <form>
            <div classname="row">
            <div className="col-sm">
            <input 
            type="search" 
            placeholder="enter a city" 
            className="form-control" />
            </div>
            <div className="col-sm">
            <input
            type="submit"
            value="search"
            className="btn btn-primary" />
            </div>
            </div>
        </form>
        <h2>Bolzano</h2>
        <h3>Wednesday, 10:05</h3>
        <h1>13°C</h1>
        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
        alt="cloudy"
         />
        <div className="row">
            <div className="col-6">
                <ul>
                    <li>
                        Humidity: 94 %
                    </li>
                </ul>
            </div>
            <div className="col-6">
                <ul>
                    <li>
                        Wind: 2 km/h
                    </li>
                </ul>
                <hr />
            </div>
        </div>
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
    );
}

