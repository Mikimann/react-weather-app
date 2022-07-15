import "../../components/Weather/Weather.css";
import Button from "../../constants/styled-components/Button";
import { useAuth } from "../../providers/useAuth";

const Weather = ({ weatherData }) => {
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
  };
  return (
    <div className="primary">
      <div className="top">
        <p className="header">{weatherData.name}</p>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex">
        <p className="description">{weatherData.weather[0].main}</p>
      </div>

      <div className="flex">
        <p className="temp">
          Temperature: {Math.round(weatherData.main.temp)} &deg;C
        </p>
        <p className="temp">Humidity: {weatherData.main.humidity} %</p>
      </div>

      <div className="flex">
        <p className="sunrise-sunset">
          Sunrise:{" "}
          {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-EN")}
        </p>
        <p className="sunrise-sunset">
          Sunset:{" "}
          {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-EN")}
        </p>
      </div>
    </div>
  );
};

export default Weather;
