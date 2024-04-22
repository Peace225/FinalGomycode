import React from 'react';
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { AiOutlineUnlock } from "react-icons/ai";


const Sinscrire = () => {
  return (
    <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{'backgroundImage':"url('../src/assets/Login.jpg')"}}>
      <div className='bg-violet-800 border border-violet-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative '>
        <h1 className='text-4xl text-violet-700 font-bold text-center mb-6'>S'inscrire</h1>
       <form action=''>
            <div className='relative my-4'>
            <input
                 type='Email'
                placeholder='Votre Email'
                className='w-full text-black  py-2  my-2 bg-transparent bg-none border-b border-white outline-none focus:outline-none  peer-focus:text-blue-600 peer-focus:violet:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
               />
              <BiUser className='absolute top-4 right-4'/>
            </div>
            <div className='relative my-4'>
            <input
                 type='password'
                 placeholder='Votre Mot de passe '
                 className='w-full text-black  py-2 my-2 bg-transparent bg-none border-b border-white outline-none peer-focus:text-blue-600 peer-focus:violet:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 focus:outline-none'
                 />
              <AiOutlineUnlock className='absolute top-4 right-4'/>
            </div>
            <div className='relative my-4'>
              
            <input
                 type='password'
                 placeholder='Mot de passe '
                 className='w-full text-black  py-2 my-2 bg-transparent bg-none border-b border-white outline-none peer-focus:text-blue-600 peer-focus:violet:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 focus:outline-none'
                 />
              <AiOutlineUnlock className='absolute top-4 right-4'/>
            </div>
            <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-violet-700 hover:bg-violet-800 hover:text-white py-2 transition-colors duration-300' type='submit'>S'inscrire</button>
            <span className='m-4'>Already Create an Account? <Link className='text-blue-500' to='/Seconnecter'>Se connecter</Link></span>
       </form>
        
      </div>

    </div>
  );
};

export default Sinscrire