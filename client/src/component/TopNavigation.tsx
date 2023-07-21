import React, { FunctionComponent } from 'react';
import TopNavigationLink from './TopNavigationLink';
import "./topNavigation.css";



const TopNavigation: FunctionComponent = () => {
    return (
        <>
            <div className='headerWrapper'>
                <div className='logoDiv'>
                    <img className='logoImg' src={process.env.PUBLIC_URL + "/images/coffeLogo.png"} alt="Brown Beans logo" />
                    <h3 className='logoText'>Brew Beans</h3>
                </div>
                <div className='headerLinkWrapper'>
                    <TopNavigationLink text="Home" link="home"/>
                    <TopNavigationLink text="About" link="about"/>
                    <TopNavigationLink text="Menu" link="menu"/>
                    <TopNavigationLink text="Shop" link="shop"/>
                    <TopNavigationLink text="Reviews" link="reviews"/>
                </div>
            </div>
        </>);
}

export default TopNavigation;