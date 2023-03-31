import React, {useEffect, useState} from 'react';
import './style.css';
import {FcSearch} from 'react-icons/fc';
import {CiTempHigh} from 'react-icons/ci';

const iconList = [
  {
    type: 'Clear',
    img: 'https://cdn-icons-png.flaticon.com/512/6974/6974833.png',
  },
  {
    type: 'Rain',
    img: 'https://cdn-icons-png.flaticon.com/512/3351/3351979.png',
  },
  {
    type: 'Snow',
    img: 'https://cdn-icons-png.flaticon.com/512/642/642102.png',
  },
  {
    type: 'Clouds',
    img: 'https://cdn-icons-png.flaticon.com/512/414/414825.png',
  },
  {
    type: 'Haze',
    img: 'https://cdn-icons-png.flaticon.com/512/1197/1197102.png',
  },
  {
    type: 'Smoke',
    img: 'https://cdn-icons-png.flaticon.com/512/4380/4380458.png',
  },
  {
    type: 'Mist',
    img: 'https://cdn-icons-png.flaticon.com/512/4005/4005901.png',
  },
  {
    type: 'Drizzle',
    img: 'https://cdn-icons-png.flaticon.com/512/3076/3076129.png',
  },
];

const Weather = () => {
  const [location, setLocation] = useState();
  const [data, setData] = useState();
  const handleInput = (e) => {
    setLocation(e.target.value);
  };
  const handleFetch = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=fe02728a1c8415de9d7a06cd5e042dcf`,
    );
    const result = await response.json();
    setData(result);
  };
  console.log(data);
  return (
    <div className='container'>
      {location && data ? (
        <div className='weather'>
          <form
            onSubmit={handleFetch}
            className='search-bar'>
            <input
              onChange={handleInput}
              type='text'
              placeholder='ENTER YOUR LOCATION'
            />
            <FcSearch
              onClick={handleFetch}
              className='search-icon'
            />
          </form>

          <div className='weather-section'>
            <p className='city'>
              {data.name}, <span>{data.sys.country}</span>
            </p>
            <img
              src={
                iconList.find(
                  (ele) => ele.type == data.weather[0].main,
                ).img
              }
              alt=''
              className='icon'
            />
            <div className='bottom'>
              <div className='status'>
                {data.weather[0].main}
              </div>
              <div className='temp'>
                <CiTempHigh className='temp-icon' />
                <p>{data.main.temp} °C</p>
              </div>
              <div className='humidity'>
                Humidity: {data.main.humidity}%
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleFetch} className='search-bar'>
          <input
            onChange={handleInput}
            type='text'
            placeholder='ENTER YOUR LOCATION'
          />
          <FcSearch
            onClick={handleFetch}
            className='search-icon'
          />
        </form>
      )}
    </div>
  );
};

export default Weather;

// Đinh Thế Cường - CIJS81
