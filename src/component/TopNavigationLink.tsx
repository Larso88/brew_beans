import React, { FunctionComponent } from 'react';
import "./topNavigationLink.css"
import { Link } from 'react-router-dom';

type TopNavigationLinkProps = {
    link: string;
    text: string;
}

const TopNavigationLink: FunctionComponent<TopNavigationLinkProps> = (props) => {
    return ( 
        <div className="linkDiv">
            <div className="coffee-cup">
                <div className="cup-body">
                    <div className="coffee"></div>
                    <Link className="navigationCoffe" to={`/${props.link}`}>
                        <span className="text" data-content={props.text}>{props.text}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default TopNavigationLink;