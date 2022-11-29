import { Link } from 'react-router-dom';
import { AppRoutes } from '../../router';
import { Offer } from '../../types/offer';

type CardProps = {
  offer: Offer;
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
}

function Card(props: CardProps): JSX.Element {
  // const path = `${AppRoutes.ROOM}/${props.offer.id}`;

  return (
    <article className="cities__card place-card" onMouseOver={ props.onMouseOver } onMouseLeave={ props.onMouseLeave }>
      {
        props.offer.isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div> :
          ''
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoutes.OFFER}>
          <img className="place-card__image" src={props.offer.image} width="260" height="200" alt="Place_image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro; {props.offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoutes.OFFER}>{props.offer.title}</Link>
        </h2>
        <p className="place-card__type">{props.offer.type}</p>
      </div>
    </article>
  );
}

export default Card;
