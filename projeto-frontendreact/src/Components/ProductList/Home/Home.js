import React, { useState } from 'react'
import { HomeStyles } from './HomeStyle'
import ProductCard from '../ProductCard/ProductCard'

export default function Home({
  renderListaProdutos,
  ordination,
  setOrdination,
  productList,
  minFilter,
  maxFilter,
  searchFilter,
  cart,
  setCart,
  amount,
  setAmount
}) {
  // console.log(renderListaProdutos);
  // const [ordination, setOrdination] = useState('default');

  const handleOrdinationChange = (event) => {
    setOrdination(event.target.value);
  };

  // const novaLista = productList.map((cadaProduto)=>cadaProduto)

  return (
    <HomeStyles>
      
      <div className = "cabecaHome">
      <p>Quantidade de produtos: {renderListaProdutos.length}</p>
      <div className='ordem'>
      <p>Ordenação:</p>
      <select value={ordination} onChange={handleOrdinationChange}>
        <option value="por preço">Por Preço</option>
        <option value="crescente">Crescente</option>
        <option value="decrescente">Decrescente</option>
      </select>
      </div>
      </div>

      <div className='produtosHome'>
      {renderListaProdutos}
      </div>



   
    </HomeStyles>

  )
}
