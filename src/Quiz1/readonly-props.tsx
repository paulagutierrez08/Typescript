// Readonly Array Display Component: Create a component that accepts and displays a readonly array of items,
// showcasing how to define and use readonly types in TypeScript.


import React from 'react';

type ReadOnlyProps = {
    name: readonly string[],
}

function ReadOnlyCompt({name}: ReadOnlyProps) {
    return (
        <div>
            <h2>8. Read Only</h2>
            {name}
        </div>
    )
}

export default ReadOnlyCompt;













