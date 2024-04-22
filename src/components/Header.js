import React from 'react';
import Seconnecter from './Seconnecter';


//import link

import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.jpg';


const Header = () => {
    return(
        <header className='py-3  mb-20 border-b'>
        <div className='container mx-auto flex justify-between items-center'>
        
             {/*logo*/}
            <Link to='/'>
                <img src= {Logo} width={150} height={150} alt=''/>
            </Link>

                {/* buttons*/}
            <div className='flex items-center gap-6'>
                    <Link className='hover:text-violet-900 
                    transition' to='/Seconnecter' >
                            Se connecter
                    </Link>
                    <Link className='bg-violet-700 
                    hover:bg-violet-800 text-white px-4 py3
                    rounded-lg transition'
                    to='/sinscrire' >
                        S'inscrire
                    </Link>
             </div>

        </div>

        </header>
    );
    
 
};


export default Header;