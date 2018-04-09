import React from 'react';

export default function Guesses(props){
    return(
        <ul className="guessed-list">{`${props.guesses}`}</ul>

    )
}