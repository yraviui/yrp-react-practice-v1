import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const countriesList = [
    { name: 'Select', value:'', cities:[''] },
    { name: 'India', value:'IN', cities:['Delhi', 'Mumbai'] },
    { name: 'Pak', value:'PK', cities:['Lahore', 'Karachi'] },
    { name: 'Bangladesh', value:'BG', cities:['Dhaka', 'Chittagong'] }
]
const countriesList2 = [
    { name: 'Select', value:'', cities:[''] },
    { name: 'India', value:'IN', cities:['Delhi', 'Mumbai'] },
    { name: 'Pak', value:'PK', cities:['Lahore', 'Karachi'] },
    { name: 'Bangladesh', value:'BG', cities:['Dhaka', 'Chittagong'] }
]

const M01 = () => {
    const [fCities, setFCities] = useState([])
    const [fCities2, setFCities2] = useState([])
    const [sCity, setSCity] = useState('')
    
    const handleSelectCountry = (e) =>{
        const country = countriesList.find( country => country.name === e.target.value )
        console.log(country)
        setFCities(country.cities)
    }
    const hCountry2 = (e) =>{
        const country = countriesList2.find( o => o.name === e.target.value )
        console.log(country)
        setFCities2(country.cities)
        setSCity('')
    }
    const hCity2 = (e) =>{
        const sval = fCities2.find( o => o === e.target.value )
        setSCity(sval)
    }
  return (
    <div>
        <h1>Select Country - <Link to='/m01p01'>M01 Page1</Link></h1>
        <select onChange={handleSelectCountry}>
            {countriesList.map((country,i) => <option key={i}>{country.name}</option>)}
        </select>
        <select>
            {fCities.map((city,i) => <option key={i}>{city}</option>)}
        </select>
        <h1>Select Country 2</h1>
        <select onChange={hCountry2}>
            {countriesList2.map((o, i) => <option key={i}>{o.name}</option>)}
        </select>
        <select onChange={hCity2}>
            {fCities2.map((city,i) => <option key={i}>{city}</option>)}
        </select>
        {sCity !== '' ?  <p>Selected City: {sCity}</p> : ''}
    </div>
  )
}

export default M01
