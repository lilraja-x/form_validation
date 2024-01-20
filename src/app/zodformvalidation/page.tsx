"use client";

import React, { use } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


const formSchema:any = z.object({
  email:z.coerce.string().email().min(10),
  password:z.coerce.string()
});



function Page() {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} type="text"/>
        <p>{formState?.errors?.email?.message?.toString()}</p>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Page;
