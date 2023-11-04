# Car Storage API with Express
This RESTful API developed with Express enables users to store a list of cars and perform various operations such as adding, deleting, and updating car records.

## Project Overview
The API exposes endpoints that handle different CRUD (Create, Read, Update, Delete) operations on a list of cars. It utilizes HTTP methods like GET, POST, DELETE, and PUT to manage the car records.

### Endpoints and Operations
- **GET - /api**: Returns an array of car items.

    ```
    GET http://localhost:8080/api
    ```

- **POST - /api**: Adds a new car item to the list.

    ```
    POST http://localhost:8080/api
    ```

    Sample Request Body:
    ```
    {
        "make": "Audi",
        "model": "Q5",
        "seats": 5
    }
    ```

- **DELETE - /api/:id**: Deletes a car item based on its ID.

    ```
    DELETE http://localhost:8080/api/:id
    ```

- **PUT - /api/:id**: Updates the model or number of seats for a specific car.

    ```
    PUT http://localhost:8080/api/:id
    ```

    Sample Request Body (for updating the model):
    ```
    {
        "model": "New Model"
    }
    ```

### Usage with Postman

1. **Testing GET Request**:
    - Launch Postman.
    - Use the URL: `http://localhost:8080/api`.
    - Choose the `GET` method.
    - Send the request and receive an array of car items.

2. **Testing POST Request**:
    - Launch Postman.
    - Use the URL: `http://localhost:8080/api`.
    - Choose the `POST` method.
    - In the request body, provide car details.
    - Send the request to add a new car item.

3. **Testing DELETE Request**:
    - Launch Postman.
    - Use the URL: `http://localhost:8080/api/:id`.
    - Replace `:id` with the specific car ID you want to delete.
    - Choose the `DELETE` method.
    - Send the request to delete the car item.

4. **Testing PUT Request**:
    - Launch Postman.
    - Use the URL: `http://localhost:8080/api/:id`.
    - Replace `:id` with the specific car ID you want to update.
    - Choose the `PUT` method.
    - In the request body, specify the field to update.
    - Send the request to update the car item.

### Project Structure

The project directory is organized as follows:
    - /routes: Contains the route handlers for the API endpoints.
    - /server.js: Main file initializing the Express server and setting up routes.

**Note:** The node_modules directory has been excluded from the submission.
Feel free to test the API using Postman to perform CRUD operations on car items.
