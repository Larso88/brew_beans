import React, { FunctionComponent } from 'react';
import "./homeFooter.css";
import LogoImg from "../images/coffeLogo.png";
import FacebookLogo from "../images/facebookLogo.svg";
import InstagramLogo from "../images/instagramLogo.svg";
import TwitterLogo from "../images/twitterLogo.svg";



const Menu: FunctionComponent = () => {
    return ( 
        <section className='footerWrapper'>
            <div className='leftSection'>
                <img className='footerLogoImg' src={LogoImg} alt="Brew Beans logo" />
                <p>Brew Beans - Brewing with Passion Since 2023</p>
            </div>
            <div className='middleSection'>
                <p>Adress: 123 Java St., Coffe Town CA 98765, United States</p>
                <p>Contact number: (123) 456-7890</p>
                <p>Email Adress: contact@brewbeans.com</p>
            </div>
            <div className='rightSection'>
                <div className='sosialMediaDiv'>
                    <a className='anchorLink' href="facebook.com">Facebook</a>
                    <img className='facebookLogoImg' src={FacebookLogo} alt="Facebook icon" />
                </div>
                <div className='sosialMediaDiv'>
                    <a className='anchorLink' href="instagram.com">Instagram</a>
                    <img className='instagramLogoImg' src={InstagramLogo} alt="" />
                </div>
                <div className='sosialMediaDiv'>
                    <a className='anchorLink' href="twitter.com">Twitter</a>
                    <img className='twitterLogoImg' src={TwitterLogo} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Menu;