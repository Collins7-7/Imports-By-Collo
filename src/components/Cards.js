import React,{useState, useEffect} from 'react'
import CardItem from './CardItem'
import "./Cards.css";
import AddCar from './pages/AddCar';


function Cards() {
const [superCar, setSuperCar]= useState([]);

function handleAddCar(newItem){
    setSuperCar([...superCar, newItem]);
  }
useEffect(()=>{
    fetch ("https://exotic-cars.herokuapp.com/cars")
    .then ((resp)=> resp.json())
    .then((carData)=> setSuperCar(carData))
},[])


function handleDeletedItem(deletedCar){
    const carsAfterDeletion = superCar.filter((eachCar) => eachCar.id !== deletedCar.id);
    setSuperCar(carsAfterDeletion);
  }



const carList = superCar.map((oneCar)=>{
    return (
        <div>
        <CardItem key={oneCar.id}
        image={oneCar.image} 
        overview={oneCar.overview}
        price={oneCar.Price}
        name ={oneCar.name}
        path ="/products"
        onDeleteItems={handleDeletedItem}
        car={oneCar}/>
        </div>
    )
})
 
  return (
    <div className="cards">
        <h1>Claim it today!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                
                    <div>{carList}</div>
            </div>
        </div>
    </div>
  )
}

export default Cards