const express = require('express');
const app = express();
const PORT = 8080;

// Middleware to parse JSON requests
app.use(express.json());

// Sample array of cars
let cars = [
  {"id": 1, "make": "Mercedes-Benz", "model": "A-class", "seats": 5},
  {"id": 2, "make": "Land Rover", "model": "Defender 90", "seats": 6}
];

// Function to generate a new unique ID
const generateNewId = () => {
  // Create a Set of existing IDs
  const existingIds = new Set(cars.map(car => car.id));
  // Start with the maximum existing ID + 1
  let newId = Math.max(...existingIds) + 1;

  // Find an unused ID if there are duplicates
  while (existingIds.has(newId)) {
    newId++;
  }

  return newId;
};

// GET request to retrieve the list of cars
app.get('/api', (req, res) => {
  res.json(cars);
});

// POST request to add a new car
app.post('/api', (req, res) => {
  const newCar = req.body;
  
  // Assign a new unique ID to the new car
  newCar.id = generateNewId();

  // Push the new car to the array
  cars.push(newCar);
  res.status(201).json(newCar);
});

// DELETE request to delete a car by ID
app.delete('/api/:id', (req, res) => {
  const idToDelete = parseInt(req.params.id);
  cars = cars.filter(car => car.id !== idToDelete);
  res.sendStatus(204);
});

// PUT request to update a car's model or seats
app.put('/api/:id', (req, res) => {
  const idToUpdate = parseInt(req.params.id);
  const updatedCar = req.body;
  cars = cars.map(car => (car.id === idToUpdate ? {...car, ...updatedCar} : car));
  res.json(updatedCar);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//To retrieve the list of cars, open a browser and navigate to http://localhost:8080/api