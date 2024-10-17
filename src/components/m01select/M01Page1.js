import React, { useState } from 'react'
const countriesList = [
    { name: 'Select', value:'', cities:[''] },
    { name: 'India', value:'IN', cities:['Delhi', 'Mumbai'] },
    { name: 'Pak', value:'PK', cities:['Lahore', 'Karachi'] },
    { name: 'Bangladesh', value:'BG', cities:['Dhaka', 'Chittagong'] }
]
const M01Page1 = () => {
    const [selCities, setSelCities] = useState([])
    const [selCity, setSelCity] = useState('')
    const countryChange = (e) => {
       const country = countriesList.find( o => o.name === e.target.value )
       console.log('country: ', country)
       setSelCities(country.cities)
    }
    const citiesChange = (e) => {
        const city = selCities.find( o =>  o === e.target.value)
        console.log('city: ', city)
        setSelCity(city)
    }
  return (
    <div>
      <h1>M01Page1 - Select</h1>
      <select onChange={countryChange}>
        {countriesList.map((o, i) => <option key={i} value={o.name}>{o.name}</option>)}
      </select>
      <select onChange={citiesChange}>
        {selCities.map((o, i) => <option key={i} value={o}>{o}</option>)}
      </select>
      <p>selCity: {selCity}</p>
    </div>
  )
}

export default M01Page1
