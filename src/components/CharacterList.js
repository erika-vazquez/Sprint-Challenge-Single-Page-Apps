import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CharacterCard from "./CharacterCard";

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
      <CharacterCard
            name={character.name}
            imageSrc={character.image}
            species={character.species}
            location={character.location.name}
            origin={character.origin.name}
            key={index}
      />
    )
  })
  }
    </section>
  )
}
