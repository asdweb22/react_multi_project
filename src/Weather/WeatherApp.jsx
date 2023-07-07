import React, { useEffect, useState } from 'react'

export default function WeatherApp() {

    const [searchvVal, setSearchVal] = useState();
    const [tempinfo, setempinfo] = useState({});

    const getWeatherInfo = async () => {
        try {

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchvVal}&appid=337fee79b75825e541654e5875c9bede`

            // it returns promise in future data is fullfill or rejected
            let res = await fetch(url);
            const data = await res.json();
            console.log(data);

            const { temp, humidity, pressure } = data.main;
            const { name } = data;
            const { main: weatherhood } = data.weather[0];
            const { speed } = data.wind;
            const { country, sunset } = data.sys;


            //converted sunset value from seconds to hours and seconds 
            let sec = sunset;

            //converted seconds into miliseconds
            let date = new Date(sec * 1000);

            //miliseconds into hours and minutes
            const timestr = `${date.getHours()}:${date.getMinutes()} `;


            const mynewwheatherinfo = {
                temp,
                humidity,
                pressure,
                weatherhood,
                name,
                speed,
                country,
                timestr
            }

            setempinfo(mynewwheatherinfo);

            console.log("Final Object :", tempinfo);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getWeatherInfo()
    }, []);

    return (
        <div>
            <div className="container">
                <h2 className="text-center ">Weather Api Project</h2>

                <div className="main  py-3 px-3 bg-dark text-white my-3 rounded shadow mx-auto" >
                    <center>
                        <input type="text" value={searchvVal} onChange={(e) => setSearchVal(e.target.value)} />
                        <button className="btn btn-info btn-sm" onClick={getWeatherInfo}>Search</button>
                    </center>
                    <br /> <br />

                    <div className="container-fluid text-dark py-3 bg-light">

                        <center>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
                                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                            </svg>
                        </center>
                        <div className="row px-2 py-2 text-center">
                            <div className="col-8 bg-dark text-white py-3">
                                {/* temprature and place*/}
                                <h2>{tempinfo.temp}&deg;</h2>Sunny, <span>{tempinfo.name}, {tempinfo.country}</span>
                                {/* wethercondition */}
                            </div>
                            <div className="col-4 bg-info py-3">
                                {/* date */}
                                <h6>{new Date().toLocaleString()}</h6>
                            </div>
                        </div>

                        <div className="row px-2 text-center">
                            <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12 bg-dark text-white py-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-sunset" viewBox="0 0 16 16">
                                    <path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7zm3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                </svg><h6>{tempinfo.timestr} PM</h6>
                                <p>Sunset</p>
                            </div>

                            <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12 bg-dark text-white py-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-moisture" viewBox="0 0 16 16">
                                    <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z" />
                                </svg><h6>{tempinfo.humidity}</h6>
                                <p>Humadity</p>
                            </div>

                            <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12 bg-dark text-white py-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cloud-hail" viewBox="0 0 16 16">
                                    <path d="M13.405 4.527a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10.5H13a3 3 0 0 0 .405-5.973zM8.5 1.5a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1-.001 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1.5zM3.75 15.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm.408-3.724a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zM7.75 15.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm.408-3.724a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm3.592 3.724a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm.408-3.724a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316z" />
                                </svg><h6>Pressure</h6>
                                <p>{tempinfo.pressure}</p>
                            </div>
                            <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12 bg-dark text-white py-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
                                    <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                <h6>Wind</h6>
                                <p>{tempinfo.speed}</p>
                            </div>

                        </div>


                    </div>

                </div>

            </div>
        </div >
    )
}
