# Express API for Car Inventory

This repository contains a simple Express API that allows you to manage a list of cars. You can use Postman to interact with the API and perform various actions, such as adding new cars, updating existing cars, and deleting cars.

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the project folder in your terminal.

## Running the Server

1. Install the required dependencies by running: npm install
2. Start the server by running: npm start
The server will run on port 8080 by default.

## Using Postman
You can use Postman to interact with the API and test its functionalities.

## GET Request
To retrieve the list of cars, send a GET request to: GET http://localhost:8080/api

## POST Request
To add a new car, send a POST request to: POST http://localhost:8080/api

Provide the following JSON data in the request body:
{
  "make": "Toyota",
  "model": "Camry",
  "seats": 5
}

## DELETE Request
To delete a car by its ID, send a DELETE request to: DELETE http://localhost:8080/api/:id
Replace :id with the ID of the car you want to delete.

## PUT Request
To update a car's model or seats, send a PUT request to: PUT http://localhost:8080/api/:id
Replace :id with the ID of the car you want to update. Provide the updated JSON data in the request body, such as:
{
  "model": "New Model"
}

## Notes
- Remember to have the server running (npm start) while testing the API with Postman.
- Make sure to replace placeholders like :id with actual values.
- Handle possible error scenarios, such as providing incorrect IDs or data formats.
Enjoy your testing!
