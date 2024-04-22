
import React from 'react';

//import routes et route
import { Routes, Route } from 'react-router-dom';

//import components
import Header from './components/Header'
import Footer from './components/Footer';
import Seconnecter from './components/Seconnecter';
import Sinscrire from './components/Sinscrire';

//import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';

const App = () => {
  return (
    <div className="max-w-[1400] mx-auto bg-white ">
       <Header/>
       <Routes>
         <Route path='/' element= {<Home/>} />
         <Route path='/property/:id' element= {<PropertyDetails/>} />
         <Route path='/seconnecter' element= {<Seconnecter/>} />
         <Route path='/sinscrire' element= {<Sinscrire/>} />
      
       </Routes>
       <Footer/>
     
     </div>

  );
}; 

export default App;