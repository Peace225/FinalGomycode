import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { AiOutlineUnlock } from "react-icons/ai";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiFillProfile } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Image from "../assets/Login.jpg"



const Ajouter = () => {

  const [value, setvalue] = useState('')
  const options = [
    {label: "Appartement", value:1},
    {label: "Maison bas", value:2},

  ]
 function handleSelect(event){
    setvalue(event.target.value)
 }

  // const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className='text-white h-[170vh] flex justify-center items-center bg-cover' style={{'backgroundImage':"url('../src/assets/Login.jpg')"}}>
      <div className='bg-violet-800 border border-violet-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative '>
        <h1 className='text-4xl text-violet-700 font-bold text-center mb-6'>Ajouter Votre Annonce</h1>
       <form action=''>
              <div className='d-flex justify-content-center mt-5 w-full'>
                <div className='w-50 p-3 border rounded'>
                  <h3 className=' text-violet-700  text-lg font-sans subpixel-antialiased font-bold'>Type de Maison</h3>
                  <select className='form-select bg-white text-violet-700 font-bold w-full rounded' onChange={handleSelect}>
                    {options.map(option =>(
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              </div>

            <div className='relative my-4'> 
            <h4 className='text-violet-700 text-base font-bold'>Lieu</h4>
            <input
                 type='Lieu'
                placeholder='Lieu'
                className='w-full text-black  py-2  my-2 bg-transparent bg-none border-b border-white outline-none focus:outline-none  peer-focus:text-blue-600 peer-focus:violet:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
               />
              <AiFillProfile className='absolute top-4 right-4 accent-violet-700'/>
            </div>
            <div className='relative my-4'> 
            <h4 className='text-violet-700 text-base font-bold'>Prix</h4>
            <input
                 type='prix'
                placeholder='le prix'
                className='w-full text-black  py-2  my-2 bg-transparent bg-none border-b border-white outline-none focus:outline-none  peer-focus:text-blue-600 peer-focus:violet:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
               />
              <BiUser className='absolute top-4 right-4'/>
            </div>
            <div className='relative my-4'> 
            <h4 className='text-violet-700 text-base font-bold'>Numéro Téléphone</h4>
            <input
                 type='Numéro'
                placeholder='+225 0701010101'
                className='w-full text-black  py-2  my-2 bg-transparent bg-none border-b border-white outline-none focus:outline-none  peer-focus:text-blue-600 peer-focus:violet:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
               />
              <FaPhone className='absolute top-4 right-4'/>
            </div>
            <div className='relative my-4'> 
            <h4 className='text-violet-700 text-base font-bold'>Email</h4>
            <input
                 type='Email'
                placeholder='Email'
                className='w-full text-black  py-2  my-2 bg-transparent bg-none border-b border-white outline-none focus:outline-none  peer-focus:text-blue-600 peer-focus:violet:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
               />
              <MdMail className='absolute top-4 right-4'/>
            </div>
            <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-violet-700 hover:bg-violet-800 hover:text-white py-2 transition-colors duration-300' type='submit'>Envoyer</button>
       </form>
        
      </div>

    </div>
  );
};

export default Ajouter