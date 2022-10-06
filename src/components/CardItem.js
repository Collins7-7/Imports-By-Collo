import React from 'react';
import{Link} from "react-router-dom";

function CardItem({image, overview, price}) {
  return (
   <>
   <li className="card__item">
    <Link className="cards__item__link">
        <figure className="cards__item__pic-wrap">
            <img src={image} alt="'Exotic'" className="cards__item__img" />
        </figure>
        <div className="cards__item__info">
            <h5 className="cards__item__text"></h5>
        </div>
    </Link>
   </li>
   
   </>
  )
}

export default CardItem