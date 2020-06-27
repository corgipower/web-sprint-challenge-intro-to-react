import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from "styled-components";

const Heading1 = styled.h1`
  background: cyan;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.py4e.com/api/people/')
      .then(res => {
        console.log('res', res.data.results);
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log('err', err);
      });
  },[]);

  return (
    <div className="App">
      <Heading1>Characters</Heading1>
      {
        characters.map((person, i) => (
          <Character key={i} pos={i} name={person.name} birthYear={person.birth_year} />
        ))
      }
    </div>
  );
}

export default App;
