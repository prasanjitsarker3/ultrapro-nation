
import { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
     fetch('https://restcountries.eu/rest/v2/all')
     .then(res => res.json())
     .then(data => setCountries(data));
  },[])
  const handleCountry = ()=>{console.log('Add Country Count')}
  return (
   
    <div >
      <h1>Country Loaded:{countries.length}</h1>
      <ul>
        {
          countries.map(country => <Country country={country} handleCountry={handleCountry} key={country.alpha3Code} ></Country>)
        }
      </ul>
         
       
     
    </div>
    
  );
}

export default App;