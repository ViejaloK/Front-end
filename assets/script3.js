
const API_key = "4e8896ae1c04601359c01dd3480dbe33";
const clima_recommendation = document.getElementById("clima-recomendacion");
console.log(navigator.geolocation.getCurrentPosition);

if (navigator.geolocation) {
    clima_recommendation.innerHTML = `<p>Cargando datos...</p>`;

    navigator.geolocation.getCurrentPosition(ubicacion => {
        let lat = ubicacion.coords.latitude;
        let lon = ubicacion.coords.longitude;
        console.log(lat, lon);

        //*La api a veces tiene problemas para descargar la informacion.. e tienido casos en los que a tardado alrededor de 400ms pero tambien algunos que tardo 2 min que verifique que es tiempo en cola.. supongo que es trafico  */
        const weather_api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=en&appid=${API_key}`;

        fetch(weather_api)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let temperature = (data.main.temp).toFixed(1);
            let description = (data.weather[0].main);
            console.log(description);
            recommendation(temperature, description);
        })
        
    })
}

/*Esta funcion despliega un comentario el cual se maneja en funcion del clima*/
function recommendation(temp, descrip) {
    console.log(descrip);
    let phrase;
    if (temp >= 20) {
        switch (descrip) {
            case "Clear":
            case "Clouds":
                phrase = "matenerte hidratado y usar ropa liviana";
                break;

            case "Rain":
            case "Snow":
            case "Drizzle":
            case "Thunderstorm":
                phrase = "llevarte un paraguas";
                break;
        }
    }
    else if (temp < 20) {
        switch (descrip) {
            case "Clear":
            case "Clouds":
                phrase = "salir abrigado";
                break;

            case "Rain":
            case "Snow":
            case "Drizzle":
            case "Thunderstorm":
                phrase = "salir abrigado y con paraguas";
                break;
        }
    }
    clima_recommendation.innerHTML = `<p>La temperatura afuera es de ${temp}°C te recomendamos ${phrase}</p>`
}
