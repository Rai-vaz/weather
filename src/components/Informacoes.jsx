import {FaMapMarkerAlt} from 'react-icons/fa'
import {WiRaindrop, WiStrongWind} from 'react-icons/wi'
import CountryFlag from './CountryFlag'
import '../css/informacoes.css'



const Informacoes = ({data}) => {
    
    function toInt(number) {
        if (Object.keys(data).length > 0) {
            return parseInt(number)
        }
    }


  return (
    <>
        <div id='weather-data'>
            <h2>
                <FaMapMarkerAlt id='icon-map'/>
                <span id='city'>{data.name}</span>
               {
                Object.keys(data).length > 0 &&  <CountryFlag src={`https://flagsapi.com/${data.sys?.country}/shiny/64.png`} alt='Bandeira do país'/>
               }
            </h2>
            <p id='temperature'><span>{toInt(data.main?.temp) } °C</span></p>
            <div id='description-container'>
                <p id='description'>{Object.keys(data).length > 0 && data.weather[0].description}</p>
                { Object.keys(data).length > 0 && <CountryFlag src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt='Condições do tempo' id='weather-icon'/> }
                
            </div>
        </div>
        <div id='details-container'>
            <p id='umidity'>
                <WiRaindrop className='icon'/>
                <span>{ data.main?.humidity}%</span>
            </p>
            <p id='wind'>
                <WiStrongWind className='icon'/>
                <span>{toInt(data.wind?.speed)} Km/h</span>
            </p>
        </div>
    </>
    
  )
}

export default Informacoes