import {FaSearch, FaMapMarkerAlt} from 'react-icons/fa'
import {WiRaindrop, WiStrongWind} from 'react-icons/wi'
import {useState, useEffect} from 'react'
import '../css/ScreenWeather.css'
import FlagCountry from './FlagCountry'


const ScreenWeather = () => {
    const urlWeatherCall = 'https://api.openweathermap.org/data/2.5/weather?'
    const apiKey = '2c23509ba3aa57c4c8a36d1aa4a6b1b4';

    const [city, setCity] = useState('')
    const [dataWeather, setDataWeather] = useState({})


    async function searchWeather() {
       const res = await fetch(`${urlWeatherCall}q=${city}&lang=pt_br&appid=${apiKey}`)
       const data = await res.json()
       setDataWeather(data) 
    }

  return (
    <div className="container">
        <div className='form'>
            <h3>Confira o clima de uma cidade</h3>
            <div className="form-input-container">
                <input
                    type='text'
                    placeholder='Digite o nome de uma cidade'
                    id='city-input'
                    onChange={(e) => setCity(e.target.value)}
                />
                <button id="search" onClick={searchWeather}> <FaSearch/> </button>
            </div>
        </div>
        <div id='weather-data'>
            <h2>
                <FaMapMarkerAlt id='icon-map'/>
                <span id='city'>{dataWeather && dataWeather.name}</span>
               {
                    Object.keys(dataWeather).length > 0 && <FlagCountry src={`https://flagsapi.com/${dataWeather.sys.country}/shiny/64.png`} alt='Bandeira do país'/>
               }
            </h2>
            <p id='temperature'><span>{dataWeather && parseInt(dataWeather.main?.temp) } °C</span></p>
            <div id='description-container'>
                <p id='description'>{Object.keys(dataWeather).length > 0 && dataWeather.weather[0].description}</p>
                { Object.keys(dataWeather).length > 0 && <FlagCountry src={`http://openweathermap.org/img/wn/${dataWeather.weather[0].icon}.png`} alt='Condições do tempo' id='weather-icon'/> }
                
            </div>
        </div>
        <div id='details-container'>
            <p id='umidity'>
                <WiRaindrop className='icon'/>
                <span>49%</span>
            </p>
            <p id='wind'>
                <WiStrongWind className='icon'/>
                <span>23km/h</span>
            </p>
        </div>
    </div>
  )
}

export default ScreenWeather