import React, { useState, useEffect } from 'react'
import GlobalStyles from './GlobalStyle'
import Filters from "./Components/Filters/Filters"
import Home from "./Components/ProductList/Home/Home"
import Cart from "./Components/ShoppingCart/Cart/Cart"
import { listaDeProdutos } from './assets/listaDeProdutos'
import Header from './Components/Header/Header'
import ProductCard from './Components/ProductList/ProductCard/ProductCard'
import Items from './Components/ShoppingCart/Items/Items'


const App = () => {
  
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [ordination, setOrdination] = useState('');

  useEffect(() => {
    const getShoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));

    getShoppingCart && setCart(getShoppingCart);
  }, []);

  useEffect(() => {
    if (cart.length) {
      console.log(cart);
      localStorage.setItem("shoppingCart", JSON.stringify(cart));
      sumAmount();
    }
  }, [cart]);
  

  const addCart = (produto) => {
    const novoProduto = cart.filter((item) => {
      return item.id === produto.id;
    });
    console.log(cart);
    if (novoProduto.length) {
      const novoCart = cart.map((item) => {
        if (item.id === novoProduto[0].id) {
          // console.log(novoProduto);
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });

      setCart(novoCart);
    } else {
      console.log("ok");
      produto.quantity = 1;
      setCart([...cart, produto]);
    }
  };



  const sumAmount = () => {
    setAmount(
      cart.reduce((totalValue, produto) => {
        return totalValue + produto.value * produto.quantity;
      }, 0)
    );
  };

 const excluiProdutoCart = (produto) => {
  if (produto.quantity > 1) {
    const quantityToRemove = cart.map((item) => {
      if (item.id === produto.id) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
    setCart(quantityToRemove); 
  } else {
    const produtoRemove = cart.filter((item) => {
      return item.id !== produto.id;
    });
    setCart(produtoRemove);
    if (!produtoRemove.length) {
      localStorage.removeItem("shoppingCart");
      setAmount(0);
    }
  }
};


const limparFiltros = () => {
  setMinFilter("");
  setMaxFilter("");
  setSearchFilter("");
  setOrdination("");
};

 const limpaCart = () => {
  setCart([]);
  localStorage.removeItem("shoppingCart");
  setAmount(0);
};
 

  const renderListaProdutos = listaDeProdutos

  .sort((a, b) => {
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

  .filter((produto) => {
    return produto.value >= minFilter || !minFilter;
  })

  .filter((produto) => {
    return produto.value <= maxFilter || !maxFilter;
  })

  .map((produto, indice)=>{
    return <ProductCard key={indice} produto={produto}
    addCart={addCart}/>
  });

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
        limparFiltros={limparFiltros}
     />
      
      <Home
      renderListaProdutos={renderListaProdutos}
      cart={cart}
      setCart={setCart}
      amount={amount}
      setAmount={setAmount}
      ordination={ordination}
      setOrdination={setOrdination}
      addCart={addCart}
    />
      
      <Cart
        cart={cart}
        setCart={setCart}
        amount={amount}
        setAmount={setAmount}
        // produtosCart={produtosCart}
        addCart={addCart}
        excluiProdutoCart={excluiProdutoCart}
        limpaCart={limpaCart}
        // produto={produto}
       />
      
    </div>
    </>
  )
}
export default App