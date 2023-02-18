import {FaSearch} from 'react-icons/fa'
import '../css/screenWeather.css'

const ScreenWeather = ({children, searchCityInformation, setCity, city}) => {

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
                    value={city}
                />
                <button id="search" onClick={searchCityInformation}> <FaSearch id='lupa'/> </button>
            </div>
        </div>
       {children}
    </div>
  )
}

export default ScreenWeather