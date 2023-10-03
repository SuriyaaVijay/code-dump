const apikey = "976e8c30fda08ecc3c44b2015f17bda1";
const locationInput = document.querySelector(".search-bar")
const getWeatherButton = document.getElementById('getWeatherButton');
const getLocationButton = document.getElementById('getLocationButton');
const unitSelect = document.getElementById('unitSelect');

getWeatherButton.addEventListener("click", async () => {
    const locweather = locationInput.value;
    const units = unitSelect.value;
    // console.log("button working")
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locweather}&units=${units}&appid=${apikey}`)
        const result = await res.json();
        // console.log(result)
        document.querySelector(".welcome").style.display = "none";
        if (result.cod !== 200) {
            const erromessage = result.message;
            document.querySelector(".weather").innerHTML = `<h2 class="error">${erromessage}</h2>`
        }
        else {

            const name = result.name;
            const temp = result.main.temp;
            const humidity = result.main.humidity;
            const wind_speed = result.wind.speed;
            const des = result.weather[0].description;
            const icon = result.weather[0].icon;
            // console.log(temp, humidity, wind_speed, des)
            // console.log("response got okay")
            if (units === "metric") {
                document.querySelector(".temp").innerHTML = `${temp} C`
            }
            else {
                document.querySelector(".temp").innerHTML = `${temp} F`
            }
            document.querySelector(".city").innerHTML = `Weather in ${name}`
            // document.querySelector(".temp").innerHTML = `${temp}`
            document.querySelector(".description").innerHTML = `${des}`;
            document.querySelector(".humidity").innerHTML = `Humidity:${humidity}%`;
            document.querySelector(".wind").innerHTML = `Wind Speed : ${wind_speed}km/h`;
            document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`
        }



    } catch (error) {
        console.log(error)
        alert("Something Went Wrong, Please Try again Later")

    }
})

getLocationButton.addEventListener("click", async () => {
    // console.log("get loaction")
    const units = unitSelect.value;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            // console.log(latitude, longitude);
            try {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apikey}`)
                const result = await res.json();
                // console.log(result)

                document.querySelector(".welcome").style.display = "none";
                if (result.cod !== 200) {
                    const erromessage = result.message;
                    document.querySelector(".weather").innerHTML = `<h2 class="error">${erromessage}</h2>`
                }
                else {

                    const name = result.name;
                    const temp = result.main.temp;
                    const humidity = result.main.humidity;
                    const wind_speed = result.wind.speed;
                    const des = result.weather[0].description;
                    const icon = result.weather[0].icon;
                    // console.log(temp, humidity, wind_speed, des)
                    // console.log("response got okay")
                    if (units === "metric") {
                        document.querySelector(".temp").innerHTML = `${temp} C`
                    }
                    else {
                        document.querySelector(".temp").innerHTML = `${temp} F`
                    }
                    document.querySelector(".city").innerHTML = `Weather in ${name}`

                    document.querySelector(".description").innerHTML = `${des}`;
                    document.querySelector(".humidity").innerHTML = `Humidity:${humidity}%`;
                    document.querySelector(".wind").innerHTML = `Wind Speed : ${wind_speed}km/h`;
                    document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`
                }

            } catch (error) {
                console.log(error)
                alert("Something Went Wrong, Please Try again Later")
            }


        })
    }
})