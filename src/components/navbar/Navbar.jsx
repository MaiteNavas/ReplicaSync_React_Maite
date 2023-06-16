//import React from 'react'; 
import './Navbar.css'
import ButtonAttom from "../button/ButtonAttom"
import logo from '../../assets/img/logo.png'
import {Link} from 'react-router-dom'


function Navbar () {
    return (

        <nav className="header">
            <Link to='/'>
                <img className="logo" src={logo} alt="Logo Sync"/>
            </Link>
            <ul>
                <li className="nav-li">
                    <Link to='/description'>
                        <h3>DESCRIPTION</h3>
                    </Link>
                </li>
                <li className="nav-li">
                    <Link to='/screen'>
                        <h3>SCREENS</h3>
                    </Link>
                </li>
                <li className="nav-li" id="dropdown">
                    <h3 id="dropdown">EXTRA</h3>
                        <ul id="dropdown-ul">
                            <li>ARTICLE DETAILS</li>
                            <li>TERM CONDITIONS</li>
                            <li>PRIVACY POLICY</li>
                        </ul>
                </li>
                <li>
                    <Link to='https://factoriaf5.org/'>
                        <ButtonAttom button_content={'DOWNLOAD'} id="button-nav"></ButtonAttom>   
                    </Link> 
                </li>   
            </ul>
        </nav>    

    )
}
export default Navbar