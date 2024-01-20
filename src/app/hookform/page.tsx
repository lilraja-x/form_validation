"use client";

import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
  phoneNumber: number;
}

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='bg-gray-800 p-8 rounded-md shadow-md w-96'>
        <h2 className='text-3xl font-extrabold mb-6 text-white'>Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label htmlFor='firstName' className='block text-white'>First Name</label>
            <input
              {...register("firstName", { required: true })}
              className='w-full px-3 py-2 border border-gray-600 rounded focus:outline-none focus:border-blue-500'
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName?.type === "required" && (
              <p className='text-red-600 text-lg mt-1 font-semibold' role="alert">First name is required</p>
            )}
          </div>
          <div className='mb-4'>
            <label htmlFor='lastName' className='block text-white'>Last Name</label>
            <input
              {...register("lastName", { required: true })}
              className='w-full px-3 py-2 border border-gray-600 rounded focus:outline-none focus:border-blue-500'
              aria-invalid={errors.lastName ? "true" : "false"}
            />
            {errors.lastName?.type === "required" && (
              <p className='text-red-600 text-lg mt-1 font-semibold' role="alert">Last name is required</p>
            )}
          </div>
          <div className='mb-4'>
            <label htmlFor='age' className='block text-white'>Age</label>
            <input
              {...register("age", { required: true, min: 18, max: 50, pattern: /^[0-9]+$/ })}
              className='w-full px-3 py-2 border border-gray-600 rounded focus:outline-none focus:border-blue-500'
            />
            {errors.age?.type === "required" && (
              <p className='text-red-600 text-lg mt-1 font-semibold' role="alert">Age is required</p>
            )}
            {errors.age?.type === "min" && (
              <p className=' text-red-600 text-lg mt-1 font-semibold' role="alert">Age cannot be less than 18</p>
            )}
            {errors.age?.type === "max" && (
              <p className=' text-red-600 text-lg mt-1 font-semibold' role="alert">Age cannot be more than 50</p>
            )}
            {errors.age?.type === "pattern" && (
              <p className=' text-red-600 text-lg mt-1 font-semibold' role="alert">Age can only be numeric</p>
            )}
          </div>
          <div className='mb-4'>
            <label htmlFor='phoneNumber' className='block text-white'>Phone Number</label>
            <input
              {...register("phoneNumber", { required: true, minLength: 11, maxLength: 12, pattern: /^[0-9]+$/ })}
              className='w-full px-3 py-2 border border-gray-600 rounded focus:outline-none focus:border-blue-500'
            />
            {errors.phoneNumber?.type === "required" && (
              <p className='text-red-600 text-lg mt-1 font-semibold' role="alert">Phone is required</p>
            )}
            {errors.phoneNumber?.type === "minLength" && (
              <p className='text-red-600 text-lg mt-1 font-semibold' role="alert">Phone Number length cannot be less than 11</p>
            )}
            {errors.phoneNumber?.type === "maxLength" && (
              <p className='text-red-600 text-lg mt-1 font-semibold' role="alert">Phone Number length cannot be more than 12</p>
            )}
            {errors.phoneNumber?.type === "pattern" && (
              <p className='text-red-600 text-lg mt-1 font-semibold' role="alert">Phone Number must contain only numeric values</p>
            )}
          </div>
          <button
            type="submit"
            className='w-full bg-blue-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-blue-600'
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
