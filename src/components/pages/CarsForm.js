import React, {useState, useEffect}from 'react';


function CarsForm() {

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
    
    fetch (" http://localhost:8000/cars",{
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
            <input type="text" name="Name" value={newCar.name} onChange={handleChange}/>
        </label>
        <label>
            Image:
            <input type="text" name="Image" value={newCar.image} onChange={handleChange}/>
        </label>
        <label>
            Overview:
            <input type="text" name="Overview" value={newCar.overview} onChange={handleChange}/>
        </label>
        <label>
            Price:
            <input type="text" name="Price" value={newCar.Price} onChange={handleChange}/>
        </label>
    </form>
    <button type="submit">Add Question</button>
   </section>
  )
}

export default CarsForm;