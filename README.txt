COMP3133 GraphQL Employee Management API

This project is a GraphQL API for managing employee records. It allows users to add, update, delete, and retrieve employees from a MongoDB database using GraphQL.

---------------------------------------------------------------
Technologies Used
Node.js
Express.js
MongoDB & Mongoose
GraphQL with Apollo Server
Postman for API Testing
Dotenv for Environment Variables

------------------------------------------------------------------

Installation
Clone this repository: git clone https://github.com/Luilsons/COMP3133_101275514_Assignment1.git
cd COMP3133_101275514_Assignment1

Install dependencies: npm install

Set up your .env file:
MONGO_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/your_db?retryWrites=true&w=majority
PORT=5001
JWT_SECRET=your_secret_key

Start the server: npm start or using nodemon: npx nodemon server.js

--------------------------------------------------------------------
GraphQL API Endpoints

Get All Employees 
query {
  getEmployees {
    id
    first_name
    last_name
    email
    designation
    salary
  }
}

Get Employee by ID
query {
  searchEmployeeById(eid: "EMPLOYEE_ID_HERE") {
    id
    first_name
    last_name
  }
}

Add Employee
mutation {
  addEmployee(
    first_name: "Alice"
    last_name: "Johnson"
    email: "alice@example.com"
    designation: "Developer"
    salary: 75000
    date_of_joining: "2023-07-10"
    department: "IT"
    employee_photo: "alice.jpg"
  ) {
    id
    first_name
  }
}

Update Employee
mutation {
  updateEmployeeById(
    eid: "EMPLOYEE_ID_HERE"
    salary: 90000
  ) {
    id
    salary
  }
}

Delete Employee
mutation {
  deleteEmployeeById(eid: "EMPLOYEE_ID_HERE")
}

------------------------------------------------------------------

Screenshots 
Add screenshots of Postman API requests
Add MongoDB Atlas database screenshots
GraphQL Studio Query Results

