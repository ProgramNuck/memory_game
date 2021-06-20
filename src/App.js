import './App.css';
import {v4 as uuidv4} from 'uuid';
import {useState} from "react";
import Wrapper from "./Wrapper";
import 'bootstrap/dist/css/bootstrap.css';

function App() {

    const images = ['🧩', '🎱', '🍦', '☃️', '🐙', '🧙'];

    let initialCards = [
        {id: uuidv4(), img: '', visible: false, default: ''},
        {id: uuidv4(), img: '', visible: false, default: ''},
        {id: uuidv4(), img: '', visible: false, default: ''},
        {id: uuidv4(), img: '', visible: false, default: ''},
        {id: uuidv4(), img: '', visible: false, default: ''},
        {id: uuidv4(), img: '', visible: false, default: ''},
        {id: uuidv4(), img: '', visible: false, default: ''},
        {id: uuidv4(), img: '', visible: false, default: ''},
        {id: uuidv4(), img: '', visible: false, default: ''},
        {id: uuidv4(), img: '', visible: false, default: ''},
        {id: uuidv4(), img: '', visible: false, default: ''},
        {id: uuidv4(), img: '', visible: false, default: ''}
    ];

    let [cards, setCards] = useState(initialCards);

    let [countOfSteps, setCountOfSteps] = useState(0);


    const shufflePictures = () => {
        let newCards = [...cards];
        let count = 0;
        for (let i = 0; i < images.length; i++) {

            let randomIndex = Math.trunc(Math.random() * 12);
            newCards[randomIndex].default = '?';
            if (newCards[randomIndex].img === '') {
                newCards[randomIndex].img = images[i];
                count++;
            }
            if (newCards.every(el => el.img !== '')) break;
            count === 2 ? count = 0 : i--;
        }
        setCards(newCards);
        console.log(cards);
    };
    const resetGame = () => {
        let newCards = [...cards];
        newCards.map(el => el.img = '');
        newCards.map(el => el.default = '');
        setCards(newCards);
    };


    return (
        <div className="App">
            <h1 className="display-3">Memory game</h1>

            {cards.every(el => el.default === '') &&
            <button disabled={cards.every(el => el.default !== '?' && el.default !== '')}
                    type="button" class="btn btn-outline-dark" onClick={shufflePictures}>Start</button>}

            <br/>

            {cards[0].img !== '' && <Wrapper cards={cards} setCards={setCards} initialCards={initialCards}
                                             countOfSteps={countOfSteps} setCountOfSteps={setCountOfSteps}/>}

            {cards.every(el => el.default !== '?' && el.default !== '') &&
            <span>
            <h2>YOU WON IN {countOfSteps / 2} STEPS</h2>
                <button type="button" class="btn btn-outline-dark" onClick={resetGame}>Reset</button>
                </span>
            }
        </div>
    );
}

export default App;
