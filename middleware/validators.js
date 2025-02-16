const { check } = require('express-validator');

// Validation rules for user signup
const validateSignup = [
    check('username').notEmpty().withMessage('Username is required'),
    check('email').isEmail().withMessage('Valid email is required'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
];

// Validation rules for adding an employee
const validateEmployee = [
    check('first_name').notEmpty().withMessage('First name is required'),
    check('last_name').notEmpty().withMessage('Last name is required'),
    check('email').isEmail().withMessage('Valid email is required'),
    check('gender').isIn(['Male', 'Female', 'Other']).withMessage('Invalid gender'),
    check('designation').notEmpty().withMessage('Designation is required'),
    check('salary').isFloat({ min: 1000 }).withMessage('Salary must be at least 1000'),
    check('date_of_joining').isISO8601().toDate().withMessage('Invalid date format'),
    check('department').notEmpty().withMessage('Department is required')
];

// Validation rules for updating an employee
const validateEmployeeUpdate = [
    check('first_name').optional().notEmpty().withMessage('First name cannot be empty'),
    check('last_name').optional().notEmpty().withMessage('Last name cannot be empty'),
    check('email').optional().isEmail().withMessage('Valid email is required'),
    check('designation').optional().notEmpty().withMessage('Designation cannot be empty'),
    check('salary').optional().isFloat({ min: 1000 }).withMessage('Salary must be at least 1000'),
    check('department').optional().notEmpty().withMessage('Department cannot be empty')
];

module.exports = { validateSignup, validateEmployee, validateEmployeeUpdate };
