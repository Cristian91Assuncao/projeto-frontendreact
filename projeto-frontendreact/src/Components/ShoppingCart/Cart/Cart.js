import React from 'react'
import { CartStyles } from './CartStyle'
import Items from '../Items/Items'

export default function Cart({produtosCart, cart, amount, limpaCart, excluiProdutoCart, addCart}) {
  
  return (
    <CartStyles>
      <h2>Carrinho</h2> <br/>
      {/* {produtosCart} */}
      {cart.map((produto) => {
  return (
    <Items
      key={produto.id}
      produto={produto}
      excluiProdutoCart={excluiProdutoCart}
      addCart={addCart}
    />
  )
})}
      
{/* const produtosCart = cart.map((produto) => {
  return (
    <Items
      key={produto.id}
      produto={produto}
      excluiProdutoCart={excluiProdutoCart}
      addCart={addCart}
    />
  )
}) */}
      
      <div className='soma'>
      <p>Valor Total: {" "}
          <span>
            {amount.toLocaleString("de-DE", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          </p>
          <button onClick={limpaCart} >Excluir tudo</button>
      </div>
    </CartStyles>
  
  )
}








// import React from 'react'
// import { CartStyles } from './CartStyle'
// import Items from '../Items/Items'

// export default function Cart({cart, amount, limpaCart, excluiProdutoCart}) {

//   const produtosCart = cart.map((produto) => {
//     return (
//       <Items
//         key={produto.id}
//         produto={produto}
//         excluiProdutoCart={excluiProdutoCart}
//         cart={cart}
//       />
//     )
//   })

//   // const soma = 0

//   return (
//     <CartStyles>
//       <h2>Carrinho</h2> <br/>

      
//       <Items>{produtosCart}</Items> 
      
//       <div className='soma'>
//       <p>Valor Total: {" "}<span>
//             {amount.toLocaleString("de-DE", {
//               style: "currency",
//               currency: "BRL",
//             })}
//           </span>
//           </p>
//           <button onClick={limpaCart} >Excluir tudo</button>
//       </div>
//     </CartStyles>
  
//   )
// }

// import React from 'react';
// import { ItemsStyle } from "./ItemsStyle"

// export default function Items(produto, excluiProdutoCart, addCart) {
//   return (
//     <ItemsStyle>
    
//     <div className='item'>
//         <p>x {produto.quantity}</p>
//         <p>{produto.name}</p>
//         <p>
//             {(produto.quantity * produto.value).toLocaleString("de-DE", {
//               style: "currency",
//               currency: "BRL",
//             })}
//           </p>
//         <button onClick={()=>excluiProdutoCart(produto)}>Excluir</button>
//     </div>
    
//     </ItemsStyle>

//   )
// }
