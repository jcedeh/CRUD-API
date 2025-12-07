# CRUD-API
This project is a Node.js REST API built with MongoDB, providing full CRUD functionality.

The application is organized into clear, modular sections to ensure scalability and maintainability:

data/ — Contains the user schema definition used to structure and validate user data in MongoDB.

controllers/ — Houses the userController file responsible for implementing core CRUD operations (POST, GET, PUT, PATCH, and DELETE).

routes/ — Includes the userRoute file that maps API endpoints to their corresponding controller functions.

app.js — Initializes the server, connects to the database, configures essential middleware, and registers all routes.

.env — Stores environment variables such as the database URI and server port.

A .env.example file is provided to guide contributors on how to structure their own .env file when running the project locally. For security reasons, the actual .env file is intentionally excluded from the repository.

challenges: using require to import my created modules was not working for me.
solution: I had to switch to Modern ES module, and it worked well.
