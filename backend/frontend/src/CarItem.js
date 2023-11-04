import React, { useState } from 'react';

function CarItem({ car, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedCar, setUpdatedCar] = useState({ ...car });

  // Handle the "Edit" button click
  const handleUpdateClick = () => {
    setIsEditing(true);
  };

  // Handle the "Save" button click during edit mode
  const handleSaveClick = () => {
    onUpdate(car.id, updatedCar); // Pass car id and updated car details
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedCar.make}
            onChange={(e) => setUpdatedCar({ ...updatedCar, make: e.target.value })}
          />
          <input
            type="text"
            value={updatedCar.model}
            onChange={(e) => setUpdatedCar({ ...updatedCar, model: e.target.value })}
          />
          <input
            type="number"
            value={updatedCar.seats}
            onChange={(e) => setUpdatedCar({ ...updatedCar, seats: parseInt(e.target.value) })}
          />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          {car.make} - {car.model} ({car.seats} seats)
          <button onClick={handleUpdateClick}>Edit</button>
          <button onClick={() => onDelete(car.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default CarItem;
