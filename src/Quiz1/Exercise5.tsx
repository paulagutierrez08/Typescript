// Renderizado condicional y props opcionales: Cree un componente que acepte opcionalmente un mensaje prop 
// y lo muestre si está presente. Utilice TypeScript para hacer que el prop sea opcional 
// y demuestre el renderizado condicional basado en su presencia.

import React from 'react';

interface OptionalMessageProp {
  message?: string,
}

function OptionalMessage ({message}: OptionalMessageProp) {
  return (
    <div>
      <h2> 5. Optional Message</h2>
      {message}
    </div>
  )
}

export default OptionalMessage;