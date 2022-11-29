import { useState } from 'react';
import { Offers } from '../../types/offer';
import Card from '../card/card';

type CardListProps = {
  offers: Offers;
}

function CardList(props: CardListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState({});

  return (
    <div className="cities__places-list places__list tabs__content">
      { props.offers.map((offer) => (
        <Card
          offer={ offer }
          key={ offer.id }
          onMouseOver={() => {
            if (activeCard !== offer.id) {
              setActiveCard(offer.id);
            }
          }}
          onMouseLeave={() => setActiveCard(0)}
        />
      ))}
    </div>
  );
}

export default CardList;
