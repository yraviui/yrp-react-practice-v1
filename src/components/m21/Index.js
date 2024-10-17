import React, { useState } from 'react'
import BaseForm from './BaseForm'

const M20 = () => {
  const [characters] = useState([
    {
      id: 1,
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      id: 2,
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      id: 3,
      name: 'Dee',
      job: 'Aspring actress',
    },
    {
      id: 4,
      name: 'Dennis',
      job: 'Bartender',
    },
  ]);

  const handleSubmit = (replacingObj) => {
    console.log('newChar--------: ', replacingObj)
    const i = characters.findIndex(x => x.id === replacingObj.id) //searchedObj.id
    characters[i] = replacingObj
    console.log(characters)
  }
  console.log('characters: ', characters)
  return (
    <div>
      <h1>M20</h1>
      <BaseForm handleSubmit = {handleSubmit} />
    </div>
  )
}

export default M20