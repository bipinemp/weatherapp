import "./form.css";
import { Context } from "../context/WeatherContext";
import { useContext } from "react";
import axios from "axios";
import Temp from "./Temp";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Form() {
  const { city, setCity, data, setData } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1eb6abb990b580241ddd0ba07b0f410e`
        )
        .then((response) => {
          setData({
            description: response.data.weather[0].main,
            temp: response.data.main.temp,
            humidity: response.data.main.humidity,
            feels_like: response.data.main.feels_like,
            country: response.data.sys.country,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            name: response.data.name,
          });
          if (response.data.description !== null) {
            setIsClicked(true);
          }

          // console.log(response.data);
          // console.log(response.data.length);
        });
    }, 1000);
  };

  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <h1
        style={{
          color: "white",
          marginTop: "10px",
          letterSpacing: "2px",
          textShadow: "3px 0px rgba(255,255,255,0.3)",
        }}
      >
        Weather App
      </h1>
      <form
        onSubmit={handleSubmit}
        className={
          (data.temp - 273.15).toFixed(1) >= 17
            ? "form-content"
            : "form-content main-content"
        }
      >
        <input
          type="text"
          placeholder="City Name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {loading ? (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <ClipLoader color={"white"} loading={loading} size={40} />
          </div>
        ) : (
          <>
            {isClicked ? (
              <Temp dataa={data} />
            ) : (
              <p
                style={{
                  color: "rgb(255, 59, 59)",
                  textAlign: "center",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                }}
              >
                Enter valid City !!
              </p>
            )}
          </>
        )}
      </form>
    </>
  );
}

export default Form;
