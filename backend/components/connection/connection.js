const mongoose = require("mongoose")
require("dotenv").config();
const mongo = process.env.MongoDB_URI

mongoose.connect(mongo).then(()=>{
    console.log("Database connected successfully")
}).catch((error)=>{
    console.log(error)
})


const Vehicle = require("../models/vehicleSchema");



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

async function seedData() {
  await Vehicle.deleteMany({});
  await Vehicle.create(carData);
  await Vehicle.create(bikeData);
  console.log('Initial Data seeded successfully into Database!');
  mongoose.disconnect();
}

seedData();