const { body } = require("express-validator");

const authValidator = [
  body("email")
    .isEmail()
    .withMessage("Email is required and must be valid"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

module.exports = authValidator;
