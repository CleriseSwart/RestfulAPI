# Car Storage API with Express and React Front-end

This project combines an Express-based RESTful API for storing car information along with an attractive React front-end, enabling users to interact with the car storage system by performing CRUD operations.

## Project Overview

The RESTful API built using Express allows users to manage car records via HTTP methods. The accompanying React front-end interacts with the API endpoints to provide a user-friendly interface for car management.

### Features

- **Express API:**
    - Handles CRUD operations for managing car records.
    - Provides GET, POST, PUT, and DELETE endpoints for car items.

- **React Front-end:**
    - Utilizes the Express API to interact with car records.
    - Offers an intuitive UI for adding, modifying, and deleting car items.
    - Displays car properties and images, if available, as part of the displayed items.

### Interaction with the React Front-end

The React front-end allows users to perform the following operations:

1. **View Car List:**
    - Lists all available car items fetched from the Express API.
    - Displays car details, including make, model, seats, and an image, if available.

2. **Add Car Item:**
    - Provides a form to add a new car to the list.
    - Accepts car details, including make, model, seats, and an image URL.

3. **Update Car Item:**
    - Enables the user to modify car details.
    - Allows the user to update the make, model, seats, or image for a specific car.

4. **Delete Car Item:**
    - Allows users to remove a car item from the list.

### Bonus Challenge

For an added challenge, include a URL property for car images. Once provided, the React front-end will display the respective car image along with the item's details.

## Instructions for Using the Front-end with Postman

1. **Clone the Car Storage API Project:**
    - Clone or download the project from the [Car Storage API Repository](https://github.com/example/car-storage-api).

2. **Launch the Express Server:**
    - Start the Express server to ensure the car storage API is running.

3. **Install Dependencies:**
    - Install necessary dependencies by navigating to the React front-end directory and executing `npm install`.

4. **Run the React Front-end:**
    - Launch the React application by executing `npm start`.

5. **Use the Front-end Interface:**
    - Access the provided URL to interact with the car storage system.
    - Perform operations such as adding, modifying, or deleting car items using the user-friendly interface.

**Note:** The API must be running before using the React front-end to ensure proper interaction with the car storage system.

