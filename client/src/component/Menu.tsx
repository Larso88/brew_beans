import React, { FunctionComponent } from 'react';
import "./menu.css";
import { menuItems } from '../data/menuItems';

const categories = ['Coffee', 'Tea', 'Pastries', 'Sandwiches & Wraps'];


const Menu: FunctionComponent = () => {
    return ( 
        <div className='componentWrapper'>
            {categories.map(category => (
                <div className='menuWrapper' key={category}>
                    <h2 className='menuHeader'>{category}</h2>
                    {menuItems
                        .filter(item => item.category === category)
                        .map(item => (
                        <div className='textWrapper' key={item.name}>
                            <div>
                                <h3 className='nameText'>{item.name}: </h3>
                                <p>{item.description}</p>
                                <p><strong>Contains:</strong> {item.contains.join(', ')}</p>
                            </div>
                            <h3 className='costValue'>${item.price.toFixed(2)}</h3>
                        </div>
                        ))
                    }
                </div>
            ))}
        </div>
    )
}

export default Menu;