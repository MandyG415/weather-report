'use strict';

const tempColor = (temp) => {
  const colorCode = document.getElementById('tempCount');
  if (temp >= 80) {
    colorCode.className = 'hotTemp';
  } else if (70 <= temp && temp <= 79) {
    colorCode.className = 'warmTemp';
  } else if (60 <= temp && temp <= 69) {
    colorCode.className = 'mildTemp';
  } else if (50 <= temp && temp <= 59) {
    colorCode.className = 'chillTemp';
  } else if (-100 <= temp && temp <= 49) {
    colorCode.className = 'coldTemp';
  }
};

const gardenLayout = (temp) => {
  const floorEmojisContainer = document.querySelector('#floorEmojis');
  if (temp >= 80) {
    floorEmojisContainer.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (70 <= temp && temp <= 79) {
    floorEmojisContainer.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (60 <= temp && temp <= 69) {
    floorEmojisContainer.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (50 <= temp && temp <= 59) {
    floorEmojisContainer.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  }
};

const state = {
  tempCount: 65,
};

const tempIncrease = () => {
  state.tempCount += 1;
  const tempCountContainer = document.querySelector('#tempCount');
  tempCountContainer.textContent = `${state.tempCount}`;
  tempColor(state.tempCount);
  gardenLayout(state.tempCount);
};

const tempDecrease = () => {
  state.tempCount -= 1;
  const tempCountContainer = document.querySelector('#tempCount');
  tempCountContainer.textContent = `${state.tempCount}`;
  tempColor(state.tempCount);
  gardenLayout(state.tempCount);
};

const registerEventHandlers = (event) => {
  const raiseTemp = document.querySelector('#raiseTemp');
  raiseTemp.addEventListener('click', tempIncrease);
  raiseTemp.addEventListener('click', tempColor);

  const decreaseTemp = document.querySelector('#decreaseTemp');
  decreaseTemp.addEventListener('click', tempDecrease);
  decreaseTemp.addEventListener('click', tempColor);

  const cityNameid = document.querySelector('#cityNameid');
  cityNameid.addEventListener('input', updateCityname);

  // const realCityWeather = document.querySelector('#realCityWeather');
  // realCityWeather.addEventListener('click', getLocation);

  const getRealWeather = document.querySelector('#realCityWeather');
  getRealWeather.addEventListener('click', getWeather);

};

document.addEventListener('DOMContentLoaded', registerEventHandlers);

const defaultCity = {
  cityName: 'The amazing city of ...',
};
const updateCityname = () => {
  const nameOfCity = document.getElementById('cityNameid').value;
  //console.log(nameOfCity);
  const cityContainer = document.querySelector('#amazingCity');

  cityContainer.textContent = `The amazing city of ${nameOfCity}`;

  //console.log(nameOfCity);
};


const getLocation =() => {
  const nameOfCity = document.getElementById('cityNameid').value;
  axios.get('http://127.0.0.1:5000/location', {
      params: {
        q: nameOfCity,
        format: 'json',
      },
  })
  .then((response) => {
    const cityLocationLat = response.data[0].lat;
    const cityLocationLon = response.data[0].lon;
  })
    // const realWeatherTemp =  
    // .then
  };
  // console.log("hi");
  // console.log(nameOfCity);
  // console.log(cityLocation);
  // console.log(cityLocation.value);
  // console.log(cityLocation.data);
  //return cityLocation;
  //getWeather();
  // console.log("hi");
  // console.log(nameOfCity);
  // console.log(cityLocation);

const getWeather =() => {
  const cityLocation = getLocation(); //response
  // const cityWeather = axios
  //   .get('http://127.0.0.1:5000/weather', {
  //     params: {
  //       "lat": cityLocation.data[0].lat, 
  //       "lon": cityLocation.data[0].lon,
  //     },
  // })
  console.log(cityLocation);
  console.log(cityLocation.data);
  // console.log("hello");
  //return cityWeather;

}