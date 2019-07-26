import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/episode/')
    .then(response =>{
      console.log(response.data.results)
      setEpisodes(response.data.results);
    })
  
  }, []);

  return( <section className='character-list grid-view'>
  {/*TODO: `array.map()` over your state here!{*/}
  {episodes.map((episode, index)=>{
    return (
      <div className="episode-card">
      <h2> {episode.name}</h2>
      <h3> {episode.air_date}</h3>
      <h3>Episode: {episode.episode}</h3>

     </div>
    )})
  }
    </section>
  )
}
