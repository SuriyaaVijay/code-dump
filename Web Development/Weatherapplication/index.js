// updated code 
function addFavoriteCity(cityName, temperature) {
    const favoriteCitiesList = document.getElementById("favoriteCitiesList");
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <span class="city-name">${cityName}</span>
        <span class="temperature">${temperature}</span>
        <button class="remove-favorite">Remove</button>
    `;
    favoriteCitiesList.appendChild(listItem);

    // Attach a click event listener to the "Remove" button
    listItem.querySelector(".remove-favorite").addEventListener("click", function () {
        favoriteCitiesList.removeChild(listItem); // Remove from the list
    });
}

const apikey = "976e8c30fda08ecc3c44b2015f17bda1";
const locationInput = document.querySelector(".search-bar");
const getWeatherButton = document.getElementById('getWeatherButton');
const getLocationButton = document.getElementById('getLocationButton');
const unitSelect = document.getElementById('unitSelect');

getWeatherButton.addEventListener("click", async () => {
    const locweather = locationInput.value;
    const units = unitSelect.value;

    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locweather}&units=${units}&appid=${apikey}`);
        const result = await res.json();

        document.querySelector(".welcome").style.display = "none";
        if (result.cod !== 200) {
            const erromessage = result.message;
            document.querySelector(".weather").innerHTML = `<h2 class="error">${erromessage}</h2>`;
        } else {
            const name = result.name;
            const temp = result.main.temp;
            if (units === "metric") {
                document.querySelector(".temp").innerHTML = `${temp} C`;
            } else {
                document.querySelector(".temp").innerHTML = `${temp} F`;
            }
            document.querySelector(".city").innerHTML = `Weather in ${name}`;

            // ... (Your existing code for displaying weather data)

            // Add the city to favorites
            addFavoriteCity(name, temp);
        }
    } catch (error) {
        console.log(error);
        alert("Something Went Wrong, Please Try again Later");
    }
});

getLocationButton.addEventListener("click", async () => {
    const units = unitSelect.value;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            try {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apikey}`);
                const result = await res.json();

                document.querySelector(".welcome").style.display = "none";
                if (result.cod !== 200) {
                    const erromessage = result.message;
                    document.querySelector(".weather").innerHTML = `<h2 class="error">${erromessage}</h2>`;
                } else {
                    const name = result.name;
                    const temp = result.main.temp;
                    if (units === "metric") {
                        document.querySelector(".temp").innerHTML = `${temp} C`;
                    } else {
                        document.querySelector(".temp").innerHTML = `${temp} F`;
                    }
                    document.querySelector(".city").innerHTML = `Weather in ${name}`;

                    // ... (Your existing code for displaying weather data)

                    // Add the city to favorites
                    addFavoriteCity(name, temp);
                }
            } catch (error) {
                console.log(error);
                alert("Something Went Wrong, Please Try again Later");
            }
        });
    }
});
