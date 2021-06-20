import {useEffect} from "react";


function Card(props) {

    const showPictureButton = () => {
        props.setCountOfSteps(props.countOfSteps + 1);
        let newCards = [...props.cards];
        newCards[props.ind].visible = !newCards[props.ind].visible;
        props.setCards(newCards);
        props.setCount(props.count + 1);
        props.setArrOfCards([...props.arrOfCards, props.card]);

    };

    const checkingForSameCards = () => {
        let newCards = [...props.cards];
        for (let el of newCards) {
            if (el.id === props.arrOfCards[0].id || el.id === props.arrOfCards[1].id) {
                el.default = props.arrOfCards[0].img;
            }
        }
        props.setCards(newCards);
    }

    const closingCards = () => {
        let newCards = [...props.cards];
        newCards[props.ind].visible = false;
        props.setCards(newCards);
        props.setCount(0)
        props.setArrOfCards([]);
    };


    useEffect(() => {
        if (props.count === 2 && props.card.visible === true) {
            setTimeout(() => {
                closingCards();
            }, 1000)
        }
        if (props.count === 2 && props.arrOfCards[0].img === props.arrOfCards[1].img) {
            checkingForSameCards();
        }
    }, [props.count])


    return (
        <button
            disabled={props.card.default !== '?' || props.arrOfCards.includes(props.card) || props.arrOfCards.length === 2}
            onClick={showPictureButton} className='card'>
            {!props.card.visible && props.card.default}
            {props.card.visible && props.card.img}

        </button>
    );
}

export default Card;