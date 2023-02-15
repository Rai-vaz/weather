import {FaSearch, FaMapMarkerAlt} from 'react-icons/fa'
import {WiRaindrop, WiStrongWind} from 'react-icons/wi'
import '../css/ScreenWeather.css'



const ScreenWeather = () => {
    const country = 'BR'
    const apiKey = '2c23509ba3aa57c4c8a36d1aa4a6b1b4';
    const urlFlag = `https://flagsapi.com/${country}/shiny/64.png`;



  return (
    <div className="container">
        <div className='form'>
            <h3>Confira o clima de uma cidade</h3>
            <div className="form-input-container">
                <input
                    type='text'
                    placeholder='Digite o nome de uma cidade'
                    id='city-input'
                />
                <button id="search"> <FaSearch/> </button>
            </div>
        </div>
        <div id='weather-data'>
            <h2>
                <FaMapMarkerAlt id='icon-map'/>
                <span id='city'>Maceió</span>
                <img src={urlFlag} id='country' alt='Bandeira do pais'/>
            </h2>
            <p id='temperature'><span>38 °C</span></p>
            <div id='description-container'>
                <p id='description'>Nublado</p>
                <img src='http://openweathermap.org/img/wn/01d.png' alt='Condições do tempo' id='weather-icon'/>
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