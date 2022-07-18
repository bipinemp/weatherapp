import React from "react";
import moment from "moment";
import "./form.css";
import Humidity from "../Images/humidity.png";
import Thermometer from "../Images/thermometer.png";
import Wind from "../Images/wind.png";

function Temp({ dataa }) {
  const { description, temp, feels_like, humidity, country, icon, wind, name } =
    dataa;
  return (
    <div className="Info">
      <h1>
        {name} , {country}
      </h1>
      <h3>{moment().format("dddd , MMM Do")}</h3>

      <p className="temp"> {(temp - 273.15).toFixed(1)}&deg;C</p>
      <p className="desc"> {description}</p>
      <img
        src={`http://openweathermap.org/img/w/${icon}.png`}
        alt="weather_icon"
      />
      <p className="tempprop">
        <p>
          <img src={Humidity} alt="weather_icon" />
          <span className="prop">{humidity}%</span>
          <span className="sprop">Humidity </span>
        </p>

        <p>
          <img src={Wind} alt="weather_icon" />
          <span className="prop">{wind}MPH</span>
          <span className="sprop">Wind</span>
        </p>
        <p>
          <img src={Thermometer} alt="weather_icon" />
          <span className="prop">{(feels_like - 273.15).toFixed(1)}&deg;C</span>
          <span className="sprop"> Feels Like</span>
        </p>
      </p>
    </div>
  );
}

export default Temp;
