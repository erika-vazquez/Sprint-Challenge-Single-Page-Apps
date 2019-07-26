import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
const [locations, setLocations] = useState([]);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/location/')
    .then(response =>{
      console.log(response.data.results)
      setLocations(response.data.results);
    })
  
  }, []);

  return( <section className='character-list grid-view'>
  {/*TODO: `array.map()` over your state here!{*/}
  {locations.map((location, index)=>{
    return (
      <div className="location-card">
      <h3> {location.name}</h3>
      <h3>Planet: {location.type}</h3>
     </div>
    )})
  }
    </section>
  )
}
