import { useState } from 'react';

const DiceRoller = () => {
    const [dice, setDice] = useState(1);
    const [diceResult, setDiceResult] = useState('');

    const handleRollDice = () => {
        const diceValues = [];

        for (let i = 0; i < dice; i++) {
            const randomDice = Math.floor(Math.random() * 6) + 1;
            diceValues.push(randomDice);
        }
        setDiceResult(diceValues);
    }
    return (
        <div className="DiceRoller">
            <h3>Dice Roller</h3>
            <label htmlFor="numDice" className="numDice">Number of dice:</label>
            <input
                type="number"
                name="numDice"
                id="numDice"
                min="1"
                max="9"
                value={dice}
                onChange={(e) => setDice(parseInt(e.target.value))} />
            <button onClick={handleRollDice}>Roll Dice</button>


            <div className="diceResult"> {diceResult ? 'Dice:' : ''}
                {diceResult && diceResult.map((value, i) => (
                    <span key={i}>{` ${value} `}</span>
                ))}
            </div>

            <div className='diceImages'>
                {diceResult && diceResult.map((value, i) => (
                    <img key={i} src={`/images/dice${value}.png`} alt={`dice ${value}`} />
                ))}
            </div>
        </div>
    );
}

export default DiceRoller;


