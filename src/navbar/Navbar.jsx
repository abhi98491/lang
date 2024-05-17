import React from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <header id="nav">
            <ul>
                <li><Link to = '/Home'><a href="/to do web/index.html" className="a">Home</a></Link></li>
                <li><a href="/entir proj/game page/index.html" className="selected">Languages To Learn</a>
                    <ul className="submenu">
                    <Link to='/telugu' > <li>Telugu</li></Link>
                    <Link to='/hindi' >  <li>Hindi</li> </Link>
                    <Link to='/tamil' ><li>Tamil</li></Link>
                    <Link to='/kannada' >   <li>Kannada</li></Link>
                    <Link to='/Malyalam' > <li>Malayalam</li></Link>
                    </ul>
                </li>
                <li> <a href="login\login.html">Login</a></li>
                <li><a href="login\registration.html">Sign</a></li>
            </ul>
        </header>
    );
}

export default Navbar;  