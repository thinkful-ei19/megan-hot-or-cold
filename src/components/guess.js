import React from 'react';

export default function Guess (props){
    return (
        <body>
           <header role="banner"> 
               <nav>
                   <ul>
                       <li>What?</li>
                       <li>+New Game</li>
                   </ul>
               </nav>
             <h1 className="header">HOT or COLD</h1>


            {/* new component for what popup */}
             <div className="pop-up what">
                <h2 className="header-what">What Do I Do?</h2>
                <p>This is a hot or cold guessing game. The game goes like this:</p>
                <ul className="directions-what">
                    <li>1. I pick a random secret number between 1 to 100 and keep it hidden.</li>
                    <li>2. You need to guess until you can find the hidden secret number.</li>
                    <li>3. You will get feedback on how close ("hot") or far ("cold") your guess is.</li>
                </ul>
                <p>So, are you ready?</p>
                <button type="button" className="button-what">Got it!</button>
             </div>

          </header>

           <section className="game">
            <h2 className="sub-header">Make Your Guess!</h2>
            
            {/* new component for form */}
            <form>
                <input type="text" name="userGuesses" id="user-guess" placeholder="Enter Your Guess" required/>
                <input type="submit" id="submit-guess" value="Guess"/>
            </form>
            
            {/* new component for guess count */}
            <p>Guess #0!</p>
            
            {/* new component for guesses given */}
            <ul className="guessed-list">Guesses go here eventually</ul>
            
            </section>

        </body>

        

    )
}