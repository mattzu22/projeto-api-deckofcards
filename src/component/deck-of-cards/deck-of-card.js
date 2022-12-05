import { useState, useEffect } from "react";
import ChangeDeck from "../change-deck/change-deck"

async function createDeck() {
  const response = await fetch(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  const deck = await response.json();
  return deck.deck_id;
}

async function getCards(deckId) {
  const response = await fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
  );
  return await response.json();
}

const DeckList = (props) => {
  return (
    <ul>
      {props.cards.map((card, index) => {
        return (
          <li key={index}>
            <img src={card.image} alt={card.value} />
          </li>
        );
      })}
    </ul>
  );
};

const DeckOfCards = () => {
  const [deck, setDeck] = useState({
    cards: [],
  });

  const fetchData = async () => {
    const deckId = await createDeck();
    const data = await getCards(deckId);

    setDeck({
      cards: data.cards,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section style={{textAlign: 'center'}}>
      <DeckList cards={deck.cards} /> 
      <ChangeDeck changeDeck={fetchData}/>
    </section>
  );
};

export default DeckOfCards;