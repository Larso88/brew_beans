import React, { FunctionComponent } from 'react';
import "./about.css"


const About: FunctionComponent = () => {
    return (
        <div className='aboutWrapper'> 
            <div className='aboutTextWrapper'>
                <h4>Introduction:</h4>
                <p>Welcome to Brew Beans, where coffee brewing is not just our profession –
                    it's our absolute passion. We're not just a coffee shop; 
                    we're a vibrant community of coffee lovers, brought together by our mutual 
                    appreciation for the perfect cup of coffee. We believe in the power of a well-brewed 
                    coffee to transform a moment, to turn strangers into friends, and to spark creativity 
                    and inspiration.</p>
                <h4>Story:</h4>
                <p>Brew Beans was dreamt up in 2023 by two lifelong friends, both relentless in their pursuit 
                    of the perfect cup of coffee. After years spent traveling the world, 
                    sampling brews from every corner of the globe, they decided to bring their love for 
                    unique, rich flavors back home. They set up shop in Coffee Town, CA, and 
                    Brew Beans was born. Our aim was, and always will be, to share our dedication to 
                    quality, ethically-sourced coffee with our community.</p>
                <h4>Mission and Values:</h4>
                <p>Our mission at Brew Beans is to consistently deliver an unrivalled coffee experience. 
                    We handpick our beans from sustainable farms worldwide, and our commitment to ethical 
                    sourcing means that every cup we serve supports the hardworking farmers who make our 
                    business possible. Our team of skilled baristas are artisans of their craft, each 
                    sharing a passion for coffee that translates into every meticulously brewed cup. 
                    Whether you prefer a full-bodied espresso, a creamy cappuccino, or a smooth latte, 
                    Brew Beans promises an exceptional coffee, every time.</p>
                <h4>Call of Action:</h4>
                <p className='bottomP'>We invite you to join us at Brew Beans and experience firsthand our passion for coffee. 
                    Explore our extensive menu, featuring classic coffee favourites and innovative new 
                    blends, or shop our exclusive range of ethically-sourced coffee beans and coffee-related 
                    merchandise. At Brew Beans, we're brewing with passion, and we can't wait to share it 
                    with you.</p>
            </div>
        </div>
    )
}

export default About;