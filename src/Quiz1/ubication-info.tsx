// Componente de alias de tipo y tipos de unión: Construya un componente que demuestre el uso de alias 
// de tipo y tipos de unión, por ejemplo, aceptando múltiples tipos de entrada (cadena, número o un objeto 
// predefinido) y mostrándolo apropiadamente.

interface info{
    ubication: string | number;
}

function UbicationInfo({ubication}: info){
    const value = () => {
        if (typeof ubication === 'string') {
            return(`Tu ubicación es ${ubication}`);
        }

        if (typeof ubication === 'number') {
            return(`Tu codigo postal es ${ubication}`);
        }
    }

    return (
    <div>
        <h2>9. TypeOf</h2>
        {value()}
    </div>
    )
};



export default UbicationInfo