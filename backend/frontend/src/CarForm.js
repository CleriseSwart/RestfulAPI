import React, { useState } from 'react';

function CarForm({ onAddCar }) {
  const [newCar, setNewCar] = useState({ make: '', model: '', seats: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCar(newCar); // Call the onAddCar function with the new car object
    setNewCar({ make: '', model: '', seats: 0 }); // Reset the form fields
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Make"
        value={newCar.make}
        onChange={(e) => setNewCar({ ...newCar, make: e.target.value })}
      />
      <input
        type="text"
        placeholder="Model"
        value={newCar.model}
        onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
      />
      <input
        type="number"
        placeholder="Seats"
        value={newCar.seats}
        onChange={(e) => setNewCar({ ...newCar, seats: parseInt(e.target.value) })}
      />
      <button type="submit">Add Car</button>
    </form>
  );
}

export default CarForm;
