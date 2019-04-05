import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

const numbers = [1,2,3,4]
const multipes = numbers.map(n=>n*2)

const Card = ({ card, feedback, onClick }) => (
    <div className={`card ${feedback}`} onClick={() => onClick(card)}>
        <span className="symbol">
            {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
        </span>
    </div>
)

export default Card
