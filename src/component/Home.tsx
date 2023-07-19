import React, { FunctionComponent } from 'react';
import "./home.css";
import { Link } from 'react-router-dom';



const Home: FunctionComponent = () => {
    return ( 
        <div className='heroImageDiv'>
            <img className='heroImage' src={process.env.PUBLIC_URL + "/images/coffeShopHero.jpg"}  alt="" />
            <h1 className='heroImageHeaderText'>Welcome to Brew Beans</h1>
            <h3 className='heroImageSubText'>- Experience the finest coffe</h3>
            <Link className="buttonLink" to={`/shop`}>
                <span className="buttonText">Order Now</span>
            </Link>
        </div>
        
    )
}

export default Home;