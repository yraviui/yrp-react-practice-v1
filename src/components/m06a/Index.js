import React, { useState } from 'react'

const initialList = [
  {
    id: 'a',
    firstname: 'Robin',
    lastname: 'Wieruch',
    year: 1988,
  },
  {
    id: 'b',
    firstname: 'Dave',
    lastname: 'Davidds',
    year: 1990,
  },
];
const M06A = () => {
  const [list, setList] = useState(initialList);
  function handleRemove(id) {
    console.log(id);
    const newList = list.filter((o) => o.id !== id);
    setList(newList);
  }
  return (
    <div>
      <ul>
        {list.map((o) => (
          <li key={o.id}>
            <span>{o.firstname}</span>
            <span>{o.lastname}</span>
            <span>{o.year}</span>
            <button type="button" onClick={() => handleRemove(o.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default M06A
