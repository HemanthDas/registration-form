# Project Overview

This project is a registration form that allows users to create an account and sign in. The project utilizes HTML, CSS, JavaScript, Node.js, and MongoDB to provide a complete solution for user registration and data storage.

## Project Structure

The project folder contains the following files and directories:

- `index.html`: This file contains the HTML structure of the registration form and sign-in page.
- `style.css`: This file contains the CSS styles for the registration form and sign-in page.
- `script.js`: This file contains the JavaScript code for form validation, user authentication, and data submission.
- `server.js`: This file contains the Node.js server code that handles HTTP requests and interacts with the MongoDB database.
- `images/`: This directory contains any images used in the registration form and sign-in page.

## Functionality

The registration form allows users to enter their details, such as name, email, and password, and create an account. The form includes client-side validation to ensure that the entered data is valid before submitting it to the server.

The sign-in page allows registered users to enter their email and password to authenticate themselves. The entered credentials are validated against the user data stored in the MongoDB database.

## Data Storage

The project uses MongoDB, a NoSQL database, to store user data. When a user creates an account, their details are saved in the database. When a user signs in, their credentials are checked against the stored data to verify their identity.

## Getting Started

To run the project locally, follow these steps:

1. Install Node.js and MongoDB on your machine.
2. Clone this repository to your local machine.
3. Open a terminal and navigate to the project folder.
4. Run `npm install` to install the project dependencies.
5. Start the MongoDB server.
6. Run `node server.js` to start the Node.js server.
7. Open your web browser and navigate to `http://localhost:3000` to access the registration form.
