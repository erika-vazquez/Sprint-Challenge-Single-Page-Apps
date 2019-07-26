import React, { useEffect, useState } from 'react';
import axios from 'axios'
import LocationCard from "./LocationCard";
import { Grid, Container } from "semantic-ui-react";

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

  return (
    <Container style={containerStyle}>
      {locations.map((location, index) => {
        return (
          <LocationCard
            name={location.name}
            type={location.type}
            dimension={location.dimension}
            residents={location.residents}
          />
        );
      })}
    </Container>
  );
}

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: 'center',
};
