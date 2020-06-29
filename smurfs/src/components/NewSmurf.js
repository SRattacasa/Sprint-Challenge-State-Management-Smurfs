import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {postAPI} from '../actions/actions'
import e from 'express';

const NewSmurf = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => postAPI(data)

  const onSubmit = e => {
    e.preventDefault(),
    postAPI(e)
  }
  
  console.log(errors);
  
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="name" name="name" ref={register({required: true, maxLength: 80})} />
      <input type="number" placeholder="Age" name="age" ref={register({required: true, maxLength: 12})} />
      <input type="text" placeholder="Height" name="height" ref={register({required: true})} />
      <input type="number" placeholder="id" name="id" ref={register({required: true})} />

      <input type="submit" />
    </form>
  );
}

export default NewSmurf