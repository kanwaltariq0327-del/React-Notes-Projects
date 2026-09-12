import { useState } from 'react';
import Ticket from './Ticket';
import { genRandomNumber, sum } from './helper';


function Lottery({n, winningSum}) {
    let [ticket, setTicket] = useState(genRandomNumber(n));
    let isWinning = sum(ticket) === winningSum;

    let geTicketBtn = () => {
        setTicket(genRandomNumber(n));
    }

    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket = {ticket}/>
            <br />
            <button onClick={geTicketBtn}>Buy Ticket</button>
            <h3>{isWinning && "Congratulations, you've won!🎉🥳🎊" }</h3>
            <h2>Winning conidtion:</h2>
            <p>if your ticket's number sums to 15!</p>
        </div>
    )
}

export default Lottery;