import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, area, region, population, flags } = props.country;
    // console.log(props.country);
    return (
        <div className='country'>
            <h2>Country: {name.common}</h2>
            <h3>Region: {region}</h3>
            <p><small>Area: {area}</small></p>
            <p><small>population: {population}</small></p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;