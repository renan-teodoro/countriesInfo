import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './CountryList.css'

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/countries')
      .then(response => setCountries(response.data))
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  return (
    <div className='list'>
      <h1>Country List</h1>
      <ul>
        {countries.map(country => (
          <li key={country.countryCode}>
            <span><Link to={`/country/${country.countryCode}`}>{country.name}</Link></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
