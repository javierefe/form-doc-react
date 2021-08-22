import React, { useState } from 'react'

export const Form = () => {

    const [name, setName] = useState('');
    

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        
        alert('El nombre es: ',name);
        e.preventDefault();
        setName('');
    }

    return (
        <>
            <h1>Formulario con react</h1>
            <form action="" onSubmit={handleSubmit}>
                Name:
                <input 
                    type="text" 
                    value= {name}
                    onChange= {handleChange}
                />
                <input 
                    type="submit"
                    value="Submit"
                />
            </form>
            <p>{name}</p>
        </>
    )
}
