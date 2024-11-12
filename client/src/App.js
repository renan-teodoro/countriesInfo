import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<CountryList />} />
      <Route path="/country/:countryCode" element={<CountryDetails />} />
    </Routes>
  </Router>
);

export default App;
