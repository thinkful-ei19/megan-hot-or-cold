import React from 'react';
import Nav from './nav';
import Popup from './popup';


export default function Header(){
    return(
        <header role="banner"> 
            {/* nav here */}
            <Nav />

            {/* Title: */}
             <h1 className="header">HOT or COLD</h1>


            {/* popup here */}
            <Popup />

        </header>
    )
}