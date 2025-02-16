const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Employee = require('../models/Employee');

const resolvers = {
    Query: {
        login: async (_, { username, password }) => {
            const user = await User.findOne({ username });
            if (!user) throw new Error("User not found");

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) throw new Error("Incorrect password");

            return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        },
        getEmployees: async () => {
            return await Employee.find();
        },
        searchEmployeeById: async (_, { eid }) => {
            return await Employee.findById(eid);
        },
        searchEmployeeByDesignationOrDepartment: async (_, { designation, department }) => {
            return await Employee.find({ $or: [{ designation }, { department }] });
        },
    },
    Mutation: {
        signup: async (_, { username, email, password }) => {
            const existingUser = await User.findOne({ email });
            if (existingUser) throw new Error("Email already in use");

            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({
                username,
                email,
                password: hashedPassword,
                created_at: new Date(),
                updated_at: new Date()
            });

            await user.save();
            return "User created successfully!";
        },

        addEmployee: async (_, args) => {
            const existingEmployee = await Employee.findOne({ email: args.email });
            if (existingEmployee) throw new Error("Email already associated with an employee");

            const employee = new Employee({
                ...args,
                created_at: new Date(),
                updated_at: new Date()
            });

            return await employee.save();
        },

        updateEmployeeById: async (_, { eid, ...updates }) => {
            const updatedEmployee = await Employee.findByIdAndUpdate(eid, updates, { new: true });
            if (!updatedEmployee) throw new Error("Employee not found");
            return updatedEmployee;
        },

        deleteEmployeeById: async (_, { eid }) => {
            const deletedEmployee = await Employee.findByIdAndDelete(eid);
            if (!deletedEmployee) throw new Error("Employee not found");
            return "Employee deleted successfully!";
        },
    }
};

module.exports = resolvers;
