import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/logo1.png'
import './HeroHeader.scss'

const HeroHeader = () => {
    return(
        <nav className="header">
            <img src={Logo} alt="instock logo two arrows"/>
            <div className="header-container">
                <Link className="header-container__link">Warehouses</Link>
                <Link className="header-container__link">Inventory</Link>
            </div>
        </nav >
    )
}

export default HeroHeader;