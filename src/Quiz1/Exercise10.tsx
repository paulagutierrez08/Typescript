// Componente de tupla y aserción de tipo: Desarrolle un componente que utilice una tupla para la 
// gestión de estados, por ejemplo, un estado que contenga tanto un booleano como una cadena.
// Además, incluya un ejemplo de uso de la aserción de tipo para gestionar un escenario en el que 
// el tipo de una variable deba aseverarse explícitamente.

import React from "react";
type StateTuple = [boolean, string];

function Tuple() {
    const [state, setState] = React.useState<StateTuple>([false, 'Initial Value']);

    const toggleBoolean = () => {
        setState([!state[0], state[1]]);
    };

    const updateString = () => {
        setState([state[0], 'Updated Value']);
    };

    return (
        <div>
            <h2>10. Tuple</h2>
            <p>Boolean Value: {state[0].toString()}</p>
            <p>String Value: {state[1]}</p>
            <button onClick={toggleBoolean}>Toggle Boolean</button>
            <button onClick={updateString}>Update String</button>
        </div>
    );
}

export default Tuple