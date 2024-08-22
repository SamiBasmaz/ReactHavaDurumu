import React from 'react'

function City(props) {

    let { sehir, filtre } = props.city;
 console.log(sehir)

    return (
        <div>
            <div className="container">
                <div className="row">
                    {filtre.map((gun, index) => {
                        const date = new Date(gun.dt_txt)
                        const formattedDate = date.toLocaleDateString("tr-TR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                            weekday: "long",
                        })
                        // console.log(date)
                        
                        // ! Hava durumu tanımının ilk harfinin büyük hali

                        const weatherDescription = gun.weather[0].description[0].toUpperCase() + gun.weather[0].description.slice(1)

                        // ! Hava sıcaklığı için;
                        const weatherTemp = Math.round(gun.main.temp);

                        // ! Havanın durumuna göre arkaplan rengi;
                        const weatherColors = {
                            Clear : "#f1c40f",
                            Clouds : "#3498db",
                            Rain : "#2ecc71",
                            Snow : "#ecf0f1",
                            Mist : "#95a5a6",
                            Thunderstorm : "#8e44ad",
                            Drizzle : "#d35400",
                        }

                        const weatherBackgroundColor = weatherColors[gun.weather[0].main]
                        // console.log(weatherBackgroundColor);

                        // ! İconlar İçin;
                        // console.log(gun.weather[0].icon)

                        const weatherIconUrl = `https://openweathermap.org/img/wn/${gun.weather[0].icon}@2x.png`
                        
                        // ! Ekstra bilgiler;
                        const humidity = gun.main.humidity;
                        const windSpeed = gun.wind.speed;
                        const feelsLike = Math.round(gun.main.feels_like);



                        return (
                         <div key={index} className="col-4">
                            <div className="card bg-transparent border-0 my-3">
                                <div style={{backgroundColor: weatherBackgroundColor}} className="card-inner">
                                <div className="card-front">
                                    <img className='card-img-top weather-icon' src={weatherIconUrl} alt="" />
                                    <div className="card-body">
                                        <h2 className='card-text'>{sehir.name} , {sehir.country}</h2>
                                        <h5 className='card-text'>{formattedDate}</h5>
                                        <h5 className='card-text'>{weatherDescription}</h5>
                                        <h5 className='card-text'>{weatherTemp}°C</h5>

                                    </div>
                                </div>
                                <div className="card-back">
                                    <p className='card-text'>Nem: {humidity}%</p>
                                    <p className='card-text'>Rüzgar: {windSpeed}m/s</p>
                                    <p className='card-text'>Hissedilen: {feelsLike}°C</p>
                                </div>
                                </div>
                            </div>
                         </div>   
                        )

                    })}
                </div>
            </div>



        </div>
    )
}

export default City
