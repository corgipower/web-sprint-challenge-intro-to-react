// Write your Character component here
import React from 'react';
import styled from "styled-components";

const CharacterDiv = styled.div`
    border: 1px black solid;
    width: 50%;
    margin: 0 auto;
    font-family: serif;
    font-size: 20px;
`;

function Character(character) {

    return (
        <CharacterDiv>
            <p>{character.name}<br />
            Year of birth: {character.birthYear}</p>
        </CharacterDiv>

    )
}

export default Character;