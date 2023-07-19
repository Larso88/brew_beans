import React, { FunctionComponent } from 'react';
import "./shop.css"
import { shopItems, ShopItem } from '../data/shopItems';



const Shop: FunctionComponent = () => {
    return ( 
        <div className='shopComponentWrapper'>
            <div className='heroImageWrapper'>
                <img  className='heroImageShop' src={process.env.PUBLIC_URL + "/images/heroImageShop.jpg"} alt="" />
                <h2 className='heroImageHeaderText'>Shop Brew Beans</h2>
                <h3 className='HeroImageSubText'></h3>
            </div>
            <section className='shopSectionWrapper'>
                {shopItems.map((item: ShopItem) => (
                    <div className='shopCardWrapper'>
                        <img className='shopCardImg' src={item.productImageUrl} alt={item.name} />
                        <h3 className='shopCardHeader'>{item.name}</h3>
                        <p className='shopCardSubText'>{item.subText}</p>
                        <p>$ {item.price.toFixed(2)}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Shop;