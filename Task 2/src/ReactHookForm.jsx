import React from 'react';
import { useForm } from 'react-hook-form';

const ReactHookForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset(); 
  };

  return (
    <form className='bg-blue-300 w-80 p-4 flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input className='border' {...register("name", { required: true })} />
      {errors.name && <p>Name is required</p>}

      <label>Email</label>
      <input className='border' {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
      {errors.email && <p>Valid email is required</p>}

      <label>Age</label>
      <input className='border' type="number" {...register("age", { min: 18 })} />
      {errors.age && <p>Minimum age is 18</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ReactHookForm;