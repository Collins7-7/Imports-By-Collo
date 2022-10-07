import React from 'react';
import{Link} from "react-router-dom";

function CardItem({image, overview, price, name, path, onDeleteItems, car}) {

    function handleDeleteClick(){
        fetch (`http://localhost:8000/cars/${car.id}`,{
          method: "DELETE",
        })
        .then ((resp) => resp.json())
        .then(()=> onDeleteItems(car))
    
      };
  return (
   <>
   <li className="card__item">
    <Link className="cards__item__link" to={path}>
        <figure className="cards__item__pic-wrap" data-category={name +"," +" "+ " " + "Price" +" "+ price}>
            <img src={image} alt="'Exotic'" className="cards__item__img" />
        </figure>
        <div className="cards__item__info">
            <h5 className="cards__item__text">{overview}</h5>
        </div>
        <button onClick={handleDeleteClick}>Delete</button>
    </Link>
   </li>
   
   </>
  )
}

export default CardItem