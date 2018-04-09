import React from 'react';

export default function Popup() {
   return ( <div className="pop-up what">
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
)
}