import React from 'react'
// import { useState } from 'react';
import { ProductCardStyles } from './ProductCardStyle'
// import { listaDeProdutos } from '../../../assets/listaDeProdutos';



export default function ProductCard({addCart, produto}) {
  
  
  return (
    <>
      <ProductCardStyles>
      <img src={produto.imageUrl} alt={produto.name}/>
      <p>{produto.name}</p>
      <p>R$ {produto.value},00</p>    
      <button onClick={()=>addCart(produto)}>Adicionar ao Carrinho</button>
      </ProductCardStyles>

    </>

  )
}
