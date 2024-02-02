//2. Componente de interfaz y accesorios: Diseñe un componente que acepte accesorios 
// para mostrar el perfil de un usuario, incluyendo nombre, edad y una lista de pasatiempos. 
// Utilice una interfaz para escribir los accesorios

import React from 'react';

interface PersonProps {
    name: string,
    lastname: string,
    age: number,
    hobbies: string[],
}

function Person ({name, lastname, age, hobbies}: PersonProps) {
    return (
        <div>
            <h2>2. Person Props</h2>
            {name}
            {lastname}
            {age}
            {hobbies}
        </div>
    )
}

export default Person;