import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "../../components/Card";
import Weather from "../../components/Weather/Weather";
import Input from "../../constants/styled-components/Input";
import "../../pages/Home/Home.css";
import cities from "../../constants/cities";

const Home = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=22c7c8204c65a307471e10c7bf60a349&units=metric`;
  const urlul = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=22c7c8204c65a307471e10c7bf60a349`;

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(url)
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long, url]);

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(urlul).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  const createCity = (citi) => {
    return (
      <Card
        key={citi.id}
        city={citi.city}
        country={citi.country}
        temperature={citi.temperature}
        sky={citi.sky}
      />
    );
  };
  return (
    <div className="App">
      {typeof data.main !== "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div></div>
      )}
      <div className="search">
        <Input
          className="home-input"
          value={location || ""}
          onChange={(event) => setLocation(event.target.value)}
          type="text"
          placeholder="Enter your location"
          onKeyPress={searchLocation}
        />
      </div>
      <div className="card-container">{cities.map(createCity)}</div>
    </div>
  );
};

export default Home;
