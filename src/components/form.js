import React from 'react';


export default function Form () {
    return (
    <form>
        <input type="text" name="userGuesses" id="user-guess" placeholder="Enter Your Guess" required/>
        <input type="submit" id="submit-guess" value="Guess"/>
    </form>
    )
}