import { Button } from '@mui/material'
import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="navbar__main">
        <div className="navbar__left">
            <h2>Sentiment <span style={{color:"orange"}}>Analyzer</span></h2>
        </div>
        <div className="navbar__right">
            <Button href="#about" variant='contained' style={{backgroundColor:"orange", padding:"5px 30px"}}>Info</Button>
        </div>
    </div>
  )
}

export default Navbar