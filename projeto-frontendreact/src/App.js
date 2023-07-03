import React, { useState } from 'react'
import GlobalStyles from './GlobalStyle'
import Filters from "./Components/Filters/Filters"
import Home from "./Components/ProductList/Home/Home"
import Cart from "./Components/ShoppingCart/Cart/Cart"
import { listaDeProdutos } from './assets/listaDeProdutos'
import Header from './Components/Header/Header'
import ProductCard from './Components/ProductList/ProductCard/ProductCard'



const App = () => {
  
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  // const [orderSelected, setOrderSelected] = useState("order")  
  const [ordination, setOrdination] = useState('');

  const handleOrdinationChange = (event) => {
    setOrdination(event.target.value);
  };

  const renderListaProdutos = listaDeProdutos

  .sort((a, b)=> {
    if (ordination === 'crescente') {
      if (a.value < b.value) {return -1}
    } if (ordination === 'decrescente') {
      if (a.value > b.value) {return -1}
    }
  })

  .filter((produto)=>{
    if(produto.name.toLowerCase().includes(searchFilter.toLowerCase())){
      return produto
    }else if(!searchFilter){
      return listaDeProdutos
    }
  })
  .map((produto, indice)=>{
    return <ProductCard key={indice} produto={produto}/>

    
  // .map((produto)=>{
  //   return (
  //     <ProductCard
  //     key={produto.id}
  //     produto={produto}
  //     addCart={addCart}
  //     />
  //   )
  // })

  });

  // let soma = 0

  // const addCart = (produto) => {

  //   const novoProduto = cart.find((item)=>{item.id === produto.id})
  //   if(novoProduto === undefined) {
  //     setCart([...cart, {produto, amount:1}])
  //   }

  // }

  return (
    <>
    <GlobalStyles />
    <Header />
    <div className="App">

      <Filters
        minFilter={minFilter}
        setMinFilter={setMinFilter}
        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
     />

      <div>
      <Home
      renderListaProdutos={renderListaProdutos}
      cart={cart}
      setCart={setCart}
      amount={amount}
      setAmount={setAmount}
      ordination={ordination}
      setOrdination={setOrdination}
      // addCart={addCart}
      
    />
      
      </div>

      <div>
      <Cart
        cart={cart}
        setCart={setCart}
        amount={amount}
        setAmount={setAmount}
        // addCart={addCart}
       />

      </div>

    </div>
    </>
  )
}

export default App