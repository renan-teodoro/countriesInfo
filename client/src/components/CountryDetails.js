import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import './CountryDetails.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CountryDetails = () => {
  const { countryCode } = useParams();
  const [countryDetails, setCountryDetails] = useState(null);

  useEffect(() => {
    if (countryCode) {
      axios.get(`http://localhost:3000/countries/${countryCode}`)
        .then(response => setCountryDetails(response.data))
        .catch(error => console.error('Error fetching country details:', error));
    }
  }, [countryCode]);

  if (!countryDetails) {
    return <div>Loading...</div>;
  }

  const chartData = {
    labels: countryDetails.populationData.map((data, index) => 1960 + index), 
    datasets: [
      {
        label: 'Population',
        data: countryDetails.populationData.map(data => data.value),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  return (
    <div className='country-details'>
      <h1>{countryDetails.countryName}</h1>
      <img src={countryDetails.flagUrl} alt={`${countryDetails.countryName} flag`} />
      <h2>Border Countries</h2>
      <ul>
        {countryDetails.borderCountries.map(borderCountry => (
          <li key={borderCountry.countryCode}>
            <Link to={`/country/${borderCountry.countryCode}`}>
              {borderCountry.commonName}
            </Link>
          </li>
        ))}
      </ul>
      <h2>Population Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default CountryDetails;
