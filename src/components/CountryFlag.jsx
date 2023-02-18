import '../css/countryFlag.css'

const CountryFlag = ({ src, alt,}) => {

  return (
    <>
       <img src={src} alt={alt} className='country'/>
    </>
  )
}

export default CountryFlag