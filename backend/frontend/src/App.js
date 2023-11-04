import React, { useState, useEffect } from 'react';
import './App.css';
import CarList from './CarList'; // Import CarList component
import CarForm from './CarForm'; // Import CarForm component

function App() {
  const [cars, setCars] = useState([]);

  // Fetch the list of cars from the API
  const getCarList = async () => {
    try {
      const response = await fetch('/api');
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error('Error fetching car list:', error);
    }
  };

  // Function to handle adding a new car
  const addCar = async (newCar) => {
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCar),
      });
      if (response.ok) {
        getCarList();
      } else {
        console.error('Failed to add car');
      }
    } catch (error) {
      console.error('Error adding car:', error);
    }
  };

  // Function to handle updating a car
  const updateCar = async (carId, updatedCar) => {
    try {
      const response = await fetch(`/api/${carId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCar),
      });
      if (response.ok) {
        getCarList();
      } else {
        console.error('Failed to update car');
      }
    } catch (error) {
      console.error('Error updating car:', error);
    }
  };

  // Function to handle deleting a car
  const deleteCar = async (carId) => {
    try {
      const response = await fetch(`/api/${carId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Car deleted successfully');
        getCarList();
      } else {
        console.error('Failed to delete car');
      }
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  // Fetch the list of cars when the component mounts
  useEffect(() => {
    getCarList();
  }, []);

  return (
    <div className="App">
      <h1>Car Inventory</h1>
      <CarList cars={cars} onDelete={deleteCar} onUpdate={updateCar} />
      <CarForm onAddCar={addCar} />
    </div>
  );
}

export default App;
