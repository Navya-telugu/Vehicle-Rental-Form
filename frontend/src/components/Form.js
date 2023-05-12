import React, { useState} from "react";
import "./Form.css";
//import { DateRangePicker } from 'react-date-range'

function Form() {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [numOfWheels, setNumOfWheels] = useState(0);
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [loading, setLoading] = useState(false);
  const [vehicleModels, setVehicleModels] = useState([]);

  const handleNext = () => {
    switch (step ===6) {
      case 1:
        if (!firstName || !lastName) {
          alert("Please enter your first and last name.");
          return;
        }
        break;
      case 2:
        if (!numOfWheels) {
          alert("Please select the number of wheels.");
          return;
        }
        break;
      case 3:
        if (!vehicleType) {
          alert("Please select a vehicle type.");
          return;
        }
        break;
      case 4:
        if (vehicleModel) {
          alert("Please select a vehicle model.");
          return;
        }
        break;
      case 5:
        if (dateRange) {
          alert("Please select a date range.");
          return;
        }
        handleSubmit();
        
        
        
    }
    setStep(step+1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const data = {
      firstName,
      lastName,
      numOfWheels,
      vehicleType,
      vehicleModel,
      dateRange,
    };
    const response = await fetch("http://localhost:8001/api/formData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      alert("Form submitted successfully!");
      <h1></h1>
    } else {
      alert("Form submission failed.");
    }
    setLoading(true);
  };

  
  const carData = [
    {
      type: 'car',
      model: 'Honda Civic',
      availableDates: [
        new Date('2023-06-01'),
        new Date('2023-06-02'),
        new Date('2023-06-03')
      ]
    },
    {
      type: 'car',
      model: 'Toyota Camry',
      availableDates: [
        new Date('2023-06-05'),
        new Date('2023-06-06'),
        new Date('2023-06-07')
      ]
    },
    {
      type: 'car',
      model: 'Ford Mustang',
      availableDates: [
        new Date('2023-06-10'),
        new Date('2023-06-11'),
        new Date('2023-06-12')
      ]
    }
  ];
  
  const bikeData = [
    {
      type: 'bike',
      model: 'Harley Davidson Sportster',
      availableDates: [
        new Date('2023-06-02'),
        new Date('2023-06-03'),
        new Date('2023-06-04')
      ]
    }
  ];
  

  return (
    <center>
      <div id="main">
        {step === 1 && (
          <div>
            <h2>What is your name?</h2>
            <label>First Name</label><br></br>
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <br />
            <label>Last Name</label><br></br>
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <br />
          </div>
        )}
        {step === 2 && (
          <div>
            <h2>Number of wheels?</h2>
            <input
              type="radio"
              name="numOfWheels"
              value="2"
              checked={numOfWheels === 2}
              onChange={() => setNumOfWheels(2)}
            />
            <br />
            <label htmlFor="2-wheels">2</label>
            <br />
            <input
              type="radio"
              name="numOfWheels"
              value="4"
              checked={numOfWheels === 4}
              onChange={() => setNumOfWheels(4)}
            />
            <br />
            <label htmlFor="4-wheels">4</label>
          </div>
        )}
      {step === 3 && (
  <div>
    <h2>Type of vehicle?</h2>
    <label>
      <input
        type="radio"
        name="vehicleType"
        value="car"
        checked={vehicleType === "car"}
        onChange={(e) => setVehicleType(e.target.value)}
      />
      Car
    </label>
    <label>
      <input
        type="radio"
        name="vehicleType"
        value="bike"
        checked={vehicleType === "bike"}
        onChange={(e) => setVehicleType(e.target.value)}
      />
      Bike
    </label>
  </div>
)}
{step ===4 && (<div>
  <label>Select a car model:</label>
  <select onChange={(e) => setVehicleModel(e.target.value)}>
  {carData.filter((item) => item.type === 'car')
    .map((car) => (
      <option key={car.model} value={car.model}>{car.model}</option>
    ))
  }
</select>

<label>Select a bike model:</label>
<select onChange={(e) => setVehicleModel(e.target.value)}>
  {bikeData.filter((item) => item.type === 'bike')
    .map((bike) => (
      <option key={bike.model} value={bike.model}>{bike.model}</option>
    ))
  }
</select>

</div>
)}


{step === 5 && (
  <div>
    <h2>Select a date range:</h2>
    <label>Select a car data range:</label>
    <select>
      {carData.filter((item) => item.type === 'car')
        .map((car) => (
          car.availableDates.map((date) => (
            <option key={date} value={date}>{date.toString()}</option>
          ))
        ))
      }
    </select>

    <label>Select a bike data range:</label>
    <select>
      {bikeData.filter((item) => item.type === 'bike')
        .map((bike) => (
          bike.availableDates.map((date) => (
            <option key={date} value={date}>{date.toString()}</option>
          ))
        ))
      }
    </select>
  </div>
)}

      <button onClick={handleNext}>{step === 5 ? "Submit" : "Next" }</button>
      
    </div>
    </center>
  );
}

export default Form