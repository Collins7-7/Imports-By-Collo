import React, {useState}from 'react';
import "../../App.css";


function AddCar() {

const [newCar, setNewCar] = useState({
    name: "",
    image:"",
    overview:"",
    Price:""
});


function handleChange(event) {
    setNewCar({
      ...newCar,
      [event.target.name]: event.target.value,
    });
  };

  function handleSubmit(event){
    event.preventDefault();

    const carInfo= {
        name: newCar.name,
        image: newCar.image,
        overview: newCar.overview,
        Price: newCar.Price
    };
    
    fetch ("http://localhost:8000/cars",{
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(carInfo)
        })
        .then ((resp)=> resp.json())
        .then ((theCar) => setNewCar(theCar))


  }

return (
   <section>
    <h1>Add Cars</h1>
    <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" name="name" value={newCar.name} onChange={handleChange}/>
        </label>
        <label>
            Image:
            <input type="text" name="image" value={newCar.image} onChange={handleChange}/>
        </label>
        <label>
            Overview:
            <input type="text" name="overview" value={newCar.overview} onChange={handleChange}/>
        </label>
        <label>
            Price:
            <input type="text" name="Price" value={newCar.Price} onChange={handleChange}/>
        </label>
    </form>
    <button type="submit">Add Car</button>
   </section>
  )
}

export default AddCar;