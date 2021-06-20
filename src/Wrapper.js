import Card from "./Card";
import {useState} from "react";

function Wrapper(props) {
    let [count, setCount] = useState(0);

    let [arrOfCards, setArrOfCards] = useState([]);

    return (
        <div className='wrapper'>
            {props.cards.map((el, i) => <Card key={el.id} ind={i} cards={props.cards} setCards={props.setCards}
                                              card={el} initialCards={props.initialCards}
                                              count={count} setCount={setCount} arrOfCards={arrOfCards}
                                              setArrOfCards={setArrOfCards} countOfSteps={props.countOfSteps}
                                              setCountOfSteps={props.setCountOfSteps}/>)}

        </div>
    );
}

export default Wrapper