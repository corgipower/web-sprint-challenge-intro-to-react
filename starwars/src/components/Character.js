// Write your Character component here
import React from 'react'

function Character(character) {

    return (
        <div>
            <p>{character.name}<br />
            Year of birth: {character.birthYear}</p>
        </div>

    )
}

export default Character;