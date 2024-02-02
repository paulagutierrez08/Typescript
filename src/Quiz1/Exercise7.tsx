// Componente de lista genérica: Implemente un componente de lista genérico que pueda mostrar elementos 
// de cualquier tipo (cadenas, números o un objeto personalizado). 
// Utiliza genéricos de TypeScript para permitir tipos de elementos flexibles.

import React from 'react'

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default List;