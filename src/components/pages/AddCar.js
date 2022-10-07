import React, {useState}from 'react';
import "../../App.css";


function AddCar({onAddItem}) {

const [name, setName] = useState("");
const [image, setImage]= useState("");
const [overview, setOverview]= useState('');
const [price, setPrice] = useState("");


  function handleSubmit(event){
    event.preventDefault();

    const carInfo= {
        name: name,
        image: image,
        overview: overview,
        Price: price,
    };
    console.log(carInfo);
    fetch ("http://localhost:8000/cars",{
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(carInfo)
        })
        .then ((resp)=> resp.json())
        .then ((theCar) => onAddItem(theCar))
}

return (
   <section>
    <h1>Add Cars</h1>
    <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <label>
            Image:
            <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)}/>
        </label>
        <label>
            Overview:
            <input type="text" name="overview" value={overview} onChange={(e) => setOverview(e.target.value)}/>
        </label>
        <label>
            Price:
            <input type="text" name="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
        </label>
        <button type="submit" >Add Car</button>
    </form>
   </section>
  )
}

export default AddCar;