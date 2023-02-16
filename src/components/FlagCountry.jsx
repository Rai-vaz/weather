import '../css/FlagCountry.css'

const FlagCountry = ({ src, alt,}) => {

  return (
    <>
       <img src={src} alt={alt} className='country'/>
    </>
  )
}

export default FlagCountry