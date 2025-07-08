
const apikey = "c4a8cf83d39f4a3aadbf9d10acfcd602";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "cloud.svg"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "clear.svg"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "rain.svg"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "drizzle.svg"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "mist.svg"
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }



}

searchbtn.addEventListener("click", () => {
    checkweather(searchBox.value);
})
