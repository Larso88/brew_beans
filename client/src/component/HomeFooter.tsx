import React, { FunctionComponent } from 'react';
import "./homeFooter.css";




const Menu: FunctionComponent = () => {
    return ( 
        <section className='footerWrapper'>
            <div className='leftSection'>
                <img className='footerLogoImg' src={process.env.PUBLIC_URL + "/images/coffeLogo.png"} alt="Brew Beans logo" />
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
                    <img className='facebookLogoImg' src={process.env.PUBLIC_URL + "/images/facebookLogo.svg"} alt="Facebook logo" />
                </div>
                <div className='sosialMediaDiv'>
                    <a className='anchorLink' href="instagram.com">Instagram</a>
                    <img className='instagramLogoImg' src={process.env.PUBLIC_URL + "/images/instagramLogo.svg"} alt="Instagram logo" />
                </div>
                <div className='sosialMediaDiv'>
                    <a className='anchorLink' href="twitter.com">Twitter</a>
                    <img className='twitterLogoImg' src={process.env.PUBLIC_URL + "/images/twitterLogo.svg"} alt="Twitter logo" />
                </div>
            </div>
        </section>
    )
}

export default Menu;