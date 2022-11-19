import React, {useState}from 'react';
import "../../App.css";
import "/home/lenovo/Development/imports-by-collo/src/components/pages/AddCars.css"


function AddCar({onAddCar}) {

const [name, setName] = useState("");
const [image, setImage]= useState("");
const [overview, setOverview]= useState('');
const [price, setPrice] = useState("");


  function handleSubmit(event){
    event.preventDefault();
    const carInfo = {
        name: name,
        image: image,
        overview: overview,
        Price: price,
    };

    fetch ("https://exotic-cars.herokuapp.com/cars",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(carInfo),
      })
      .then ((resp) => resp.json())
      .then ((newCar) => onAddCar(newCar))
      }

  return (
   <div className='add-car-div'>
    <h1>Add Cars</h1>
    <form onSubmit={handleSubmit} className='form'>
        <label>
            Name:
            <input className="name" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <label>
            Image:
            <input className="image" type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)}/>
        </label>
        <label>
            Overview:
            <input className="overview" type="text" name="overview" value={overview} onChange={(e) => setOverview(e.target.value)}/>
        </label>
        <label>
            Price:
            <input className="price" type="text" name="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
        </label>
        <button type="submit" className='add_car'>Add Car</button>
    </form>
   </div>
  )}


export default AddCar