import React from 'react'
import { CartStyles } from './CartStyle'
import Items from '../Items/Items'

export default function Cart({addCart, cart, setCart, amount, setAmount}) {
  return (
    <CartStyles>
      <h2>Cart</h2> <br/>
      <div>
        <p>x0</p>
        <p>Nome do Produto</p>
        <button>Remover</button>
      </div> <br/>
      <p>Valor Total: 0</p>
      <Items />
    </CartStyles>

  )
}
