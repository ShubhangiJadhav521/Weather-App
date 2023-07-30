import axios from "axios";
import apikeys from "./apikeys";
import React, { useState, useEffect, Component } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "../App.css";

function Forcast(props) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState({});
  const search = (city) => {
    // props.setCity(query);
    axios
      .get(
        `${apikeys.base}weather?q=${
          city != "[object Object]" ? city : query
        }&units=metric&APPID=${apikeys.key}`
      )
      .then((response) => {
        setWeather(response.data); 
        setQuery(""); 
      })
      .catch(function (error) {
        console.log(error);
        setWeather("");
        setQuery("");
        setError({ message: "Not Found", query: query });
      });
  };
  const defaults = {
    color: "white",
    size: 112,
    animation: true,
  };
  useEffect(() => {
    search(props.city);
    
  }, []);
  // useEffect(()=>{
  //   props.setTemperatureC(Math.round(weather.main));
  // },[weather])
  return (
    <div className="forecast">
      <div className="forecast-icon">
        <ReactAnimatedWeather
          icon={props.icon}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        />
      </div>
      <div className="today-weather">
        <h3>{props.weather}</h3>
        <div className="search-box">
          <input
            type="text"
            className="serch-bar"
            placeholder="Search City"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <div className="img-box">
            <img
              src="https://images.avishkaar.cc/workflow/newhp/search-white.png"
              onClick={search}
            />
          </div>
        </div>
        <ul>
          {typeof weather.main != "undefined" ? (
            <div>
              <li className="cityHead">
                <p>
                  {weather.name},{weather.sys.country}
                </p>
                <img
                  className="temp"
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                />
              </li>
              <li>
                Temperature{" "}
                <span className="temp">
                  {Math.round(weather.main.temp)}°c ({weather.weather[0].main})
              
                </span>
              </li>
              <li>
                Humidity{" "}
                <span className="temp">
                  {Math.round(weather.main.humidity)}%
                </span>
              </li>
              <li>
                Visibility{" "}
                <span className="temp">
                  {Math.round(weather.visibility)} mi
                </span>
              </li>
              <li>
                Wind Speed{" "}
                <span className="temp">
                  {Math.round(weather.wind.speed)} Km/h
                </span>
              </li>
            </div>
          ) : (
            <>
              <li>
                {error.query} {error.message}
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Forcast;
