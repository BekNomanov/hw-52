
import React, { useState } from 'react';
import Card from './Card';
import CardDeck from './Lib/CardDeck';
import Cards from './Lib/Card';

const App: React.FC = () => {
  const deck = new CardDeck();
  const initialHand = deck.getCards(5);
  const [hand, setHand] = useState<Cards[]>(initialHand);

  const dealCards = () => {
    const newHand = deck.getCards(5);
    setHand(newHand);
  };

  return (
    <div>
      <div className="playingCards faceImages">
        {hand.map((card, index) => (
          <Card key={index} rank={card.rank} suit={card.suit}/>
        ))}
      </div>
      <button className='btn' onClick={dealCards}>Раздать карты</button>
    </div>
  );
};

export default App;