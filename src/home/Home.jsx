import React from 'react';
import './Home.css'; 
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div id="img">

<Link to='/telugu'><div id="tel" className="lang-on-img"></div></Link>
            
           <Link to='/lang'><div className="lang-on-img" id="lang"></div></Link> 
           <Link to='/tamil'> <div className="lang-on-img" id="tam"></div></Link>
           <Link to='/Malyalam'><div className="lang-on-img" id="mal"></div></Link> 
           <Link to='/kannada'> <div className="lang-on-img" id="kan"></div></Link>
            <Link to='/hindi'>  <div className="lang-on-img" id="hin"></div></Link> 
        </div>
    );
}

export default Home;