import React, {useState, useEffect, createContext} from 'react';

//import data 
import {housesData} from '../data';

//create context
export const HouseContext = createContext();

const HouseContextProvider  = ({children}) => {
    const [houses, setHouses] = useState(housesData);
    const [country, setCountry] = useState('Lieu');
    const [countries, setCountries] = useState([]);
    const [property, setProperty] = useState('Type de Propriété');
    const [properties, setProperties] = useState([]);
    const [price, setPrice] = useState('Votre Prix');
    const [loading, setLoading] = useState(false);

//return tous les pays
useEffect(() =>{
    const allCountries = houses.map((house) =>{
        return house.country;
    });

    const uniqueCountries = ['Localisation  (région)' , ...
    new Set(allCountries)];

    setCountries(uniqueCountries);
});
useEffect(() =>{
    const allProperties = houses.map((house) =>{
        return house.type;
    });

    const uniqueProperties = ['Choisissez ce qui vous convient', ...
    new Set(allProperties)];

    setProperties(uniqueProperties);
});

const handleClick = () => {
    //set loading
    setLoading(true);



    //créer un function
    const isDefault = (str) =>{
        return  str.split(' ').includes('(any)');
    }; 

    //la première valeur de prix
    const minPrice = parseInt(price.split(' ')[0]);

    //second valeur de prix maximal
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = housesData.filter((house) =>{
        const housePrice= parseInt(house.price);

    // toutes les valeurs
    if (house.country===country && house.type
        === property && housePrice >= minPrice &&
        housePrice<= maxPrice){
            return house;
        }
    //valeur par default
    if (isDefault(country) && isDefault(property) && isDefault(price)){
        return  house
    };  
    //Pays non par default
    if (!isDefault(country) && isDefault(property)
    && isDefault(price)){
        return house.country ===country;
    }

    //property
    if (!isDefault(property) && isDefault(country)
    && isDefault(price)){
        return house.type ===property;
    }

    //prix non par default
    if (!isDefault(price) && isDefault(country &&
        isDefault(property))){
            if(housePrice>= minPrice && housePrice <=
                maxPrice){
                    return house;
                }
        }

 //Pays et property
     if(!isDefault(country) && !isDefault(property)
         && isDefault(price)){
            return house.country === country && house.type === property;
        }

       //Prix et Pays
       if (!isDefault(country) && isDefault(property)
       && !isDefault(price)) {
        if(housePrice >= minPrice && housePrice <=
            maxPrice){
                return house.country === country;
            }
    
        //property et prix  
        if(!isDefault(country) && !isDefault
        (property) && !isDefault(price)){
            if(housePrice >= minPrice && housePrice <= maxPrice) {
                 return house.type === property;
                }
            }
    }
    });

    setTimeout (()=>{
        return (
        newHouses.length <1 ? setHouses ([]) :
        setHouses(newHouses),
        setLoading(false)
    );
    }, 1000);

}

  return(
    <HouseContext.Provider value={{

        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
        loading,

    }}>
        {children}
     </HouseContext.Provider>
 )
};

export default HouseContextProvider;