import React from 'react';
import Header from './header';
import Count from './count';
import Guesses from './guesses';
import Form from './form';
import Feedback from './feedback';




export default function Master (){
    return (
        <body>
            <Header />

           <section className="game">

                <Feedback />
                <Form />            
                <Count />
                <Guesses />

            </section>

        </body>
    )
}