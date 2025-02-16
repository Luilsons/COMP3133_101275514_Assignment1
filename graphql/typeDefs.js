const { gql } = require('graphql-tag');

const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        email: String!
        password: String!
        created_at: String
        updated_at: String
    }

    type Employee {
        id: ID!
        first_name: String!
        last_name: String!
        email: String!
        gender: String
        designation: String!
        salary: Float!
        date_of_joining: String!
        department: String!
        employee_photo: String
        created_at: String
        updated_at: String
    }

    type Query {
        login(username: String!, password: String!): String
        getEmployees: [Employee]
        searchEmployeeById(eid: ID!): Employee
        searchEmployeeByDesignationOrDepartment(designation: String, department: String): [Employee]
    }

    type Mutation {
        signup(username: String!, email: String!, password: String!): String
        addEmployee(
            first_name: String!
            last_name: String!
            email: String!
            gender: String!
            designation: String!
            salary: Float!
            date_of_joining: String!
            department: String!
            employee_photo: String
        ): Employee
        updateEmployeeById(eid: ID!, first_name: String, last_name: String, designation: String, salary: Float, department: String): Employee
        deleteEmployeeById(eid: ID!): String
    }
`;

module.exports = typeDefs;
