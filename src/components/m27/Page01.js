import React, { useState } from 'react'

const countries = [
    { id: 0, name: 'Select Country', state: [ 'AP', 'TS', 'TM', 'KA']},
    { id: 1, name: 'India', state: [ 'AP', 'TS', 'TM', 'KA']},
    { id: 2, name: 'USA', state: [ 'NJ', 'NY']},
    { id: 3, name: 'UK', state: [ 'London' ]}
]
const Page01 = () => {
    const [country, setCountry] = useState('')
    const selectCountry = (e) => {
        const selCountry = countries.find( o => o.name === e.target.value) 
        setCountry(selCountry)
    }
  return (
    <div>
        <h1>Dropdown </h1>
        <h1>Selected country: {country?.name} </h1>
        <select onChange={selectCountry}>
            {countries.map( (o, i) => <option key={i}>{o.name}</option>)}
        </select>
        
    </div>
  )
}

export default Page01