import React, { useEffect, useState } from 'react';
import axios from 'axios'
import EpisodeCard from './EpisodeCard';
import { Container } from 'semantic-ui-react';  

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

  return (
    <Container style={containerStyle}>
        {episodes.map((episode, index)=>{
            return <EpisodeCard name={episode.name}
             episode={episode.episode}
              airdate={episode.air_date} 
              characters={episode.characters}/>
        }
    )}
    </Container>
)
}

const containerStyle = {
display: "flex",
flexWrap: "wrap",
justifyContent: "space-around",
alignItems: 'center',
};
