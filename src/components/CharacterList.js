import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [chars, setChars] = useState([]);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    console.log("hello")
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response =>{
      console.log(response.data.results)
      setChars(response.data.results);
    })
  
  }, []);

  return( <section className='character-list grid-view'>
  {/*TODO: `array.map()` over your state here!{*/}
  {chars.map((character, index)=>{
    return (
      <div className="char-card">
      <img className="card-img" src={character.image}></img>
      <h2>{character.name}</h2>
      <p>{character.species}</p>
      <h3>Location: {character.location.name}</h3>
      <h3>Origin: {character.origin.name}</h3>
     </div>
    )})
  }
    </section>
  )
}
