import React, { useState } from 'react'

const BaseForm = ({handleSubmit}) => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
  
    const submitForm = (e) => {
        e.preventDefault();
        const newChar = { id: e.target.id.value, name: e.target.name.value, job: e.target.job.value }
        console.log('newChar: ', newChar)
        handleSubmit(newChar, newChar.id);
        setName('');
        setJob('');
    }
    /* console.log('id: ', obj.id)
    console.log('obj: ', obj) */
    return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">id</label>
      <input type="number" name="id" value={id} onChange={(e) => setId(e.target.value)} />
      <label htmlFor="name">Name</label>
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <label htmlFor="job">Job</label>
      <input type="text" name="job" value={job} onChange={(e) => setJob(e.target.value)} />
      <input type="submit"/>  
    </form>
  );
}

export default BaseForm