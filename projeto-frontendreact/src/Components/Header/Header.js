import React from 'react'
import HeaderStyle from './headerStyle'
import Logo from "../../img/logo.png"

const Header = () => {
  return (
    <HeaderStyle>
        <img src={Logo}></img>
        <h1>Space Shirt</h1>
        <img src={Logo}></img>
    </HeaderStyle>
  )
}

export default Header