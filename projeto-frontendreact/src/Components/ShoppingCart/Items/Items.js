import React from 'react';
import { ItemsStyle } from "./ItemsStyle"

export default function Items({produto, excluiProdutoCart}) {
  return (
    <ItemsStyle>
    
    <div className='item'>

        <p>x{produto.quantity}</p>
        <p>{produto.name}</p>
        <p>{produto.value}</p>
        

        <button onClick={()=>excluiProdutoCart(produto)}>Excluir</button>
    </div>
    
    </ItemsStyle>

  );
};
