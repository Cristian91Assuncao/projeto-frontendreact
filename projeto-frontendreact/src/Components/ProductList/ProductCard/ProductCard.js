import React from 'react'
import { ProductCardStyles } from './ProductCardStyle'

// const Produtos = ({productList}) => {
//   return (
//     <div >
    
//       <img src={productList.imageUrl}/>
//       <p>{productList.name}</p>
//       <p>{productList.value}</p>    
//       <button>Adicionar ao Carrinho</button>
//   </div>
//   )


// }


export default function ProductCard({produto, addCart}) {
  console.log(produto);
  return (
    <>
      <ProductCardStyles>
      <img src={produto.imageUrl}/>
      <p>{produto.name}</p>
      <p>R$ {produto.value}</p>    
      <button onClick={()=>addCart(produto)}>Adicionar ao Carrinho</button>
      </ProductCardStyles>

    </>

  )
}
