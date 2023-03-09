import React, { useState } from 'react'

const PersonCard = props => {
    const {firstName, lastName, age, hairColor} = props;
    const [currentAge, setAge] = useState(age)
    const happyBirthday = () => {
        setAge(currentAge + 1)
    }
    return (
        <div>
            <h2>{firstName}, {lastName}</h2>
            <p>Age: {currentAge }</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={ happyBirthday }>Birthday button for {firstName} {lastName}</button>
        </div>
    )
}

export default PersonCard