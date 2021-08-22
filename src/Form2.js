import React, { useState } from 'react'

export const Form2 = () => {

    const [inputValue, setInputValue] = useState({
        isGoing: false,
        numberOfGuests: ''
    })

    const {isGoing, numberOfGuests} = inputValue;

    const handleInputChange = (e) => {
        e.preventDefault();
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form>
                <h1>Multiples inputs</h1>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={isGoing}
                        onChange={handleInputChange} 
                    />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={numberOfGuests}
                        onChange={handleInputChange} 
                    />
                </label>
            </form>
        </div>
    )
}
