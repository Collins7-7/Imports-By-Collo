import React,{useState, useEffect} from 'react'
import CardItem from './CardItem'
import "./Cards.css";


function Cards() {
const [superCar, setSuperCar]= useState([]);

useEffect(()=>{
    fetch ("http://localhost:8000/cars")
    .then ((resp)=> resp.json())
    .then((carData)=> setSuperCar(carData))
},[])

const carList = superCar.map((oneCar)=>{
    return (
        <CardItem key={oneCar.id}
        image={oneCar.image} 
        overview={oneCar.overview}
        price={oneCar.price}
        name ={oneCar.name}/>
        
    )
})
 
  return (
    <div className="cards">
        <h1>It's Yours If You Want It</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    {carList}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards