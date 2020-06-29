import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const NewSmurf = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {axios.post('http://localhost:3333/smurfs', data)
  .then(response => console.log(response))
  .catch(err => console.log(err))
    console.log(data)
  }
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="name" name="name" ref={register({required: true, maxLength: 80})} />
      <input type="number" placeholder="Age" name="age" ref={register({required: true, maxLength: 12})} />
      <input type="text" placeholder="Height" name="height" ref={register({required: true})} />
      <input type="number" placeholder="id" name="id" ref={register({required: true})} />

      <input type="submit" />
    </form>
  );
}

export default NewSmurf