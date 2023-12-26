import Card from './Card';

class CardDeck {
  private cards: Card[] = [];

  constructor() {
    // Создание колоды без тасования
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
    const suits = ['diams', 'hearts', 'clubs', 'spades'];

    for (const suit of suits) {
      for (const rank of ranks) {
        const card = new Card(rank, suit);
        this.cards.push(card);
      }
    }
  }

  getCard(): Card | undefined {
    // Проверяем, есть ли карты в колоде
    if (this.cards.length > 0) {
      // Выбираем случайную карту
      const randomIndex = Math.floor(Math.random() * this.cards.length);
      const [removedCard] = this.cards.splice(randomIndex, 1);
      return removedCard;
    } else {
      // Если карт нет, возвращаем undefined
      return undefined;
    }
  }

  getCards(howMany: number): Card[] {
    const cards: Card[] = [];
    for (let i = 0; i < howMany; i++) {
      const card = this.getCard();
      if (card) {
        cards.push(card);
      }
    }
    return cards;
  }
}

export default CardDeck;