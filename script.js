document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    const apiKey = '2b73047eb82b5109f8778c73a2553764';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.getElementById('weather');
            weather.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <h3>${data.main.temp}°C</h3>
                <p>${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            alert('City not found!');
            console.error('Error fetching weather data:', error);
        });
});
