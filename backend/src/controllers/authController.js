const bcrypt = require("bcrypt");
const { generateToken, verifyToken } = require("../utils/auth");
// const {validationResult} = require("../validationResults/authvalidationResult");
const { validationResult } = require("express-validator");
const { PrismaClient } = require("../../../generated/prisma");
const prisma = new PrismaClient();

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const validation = validationResult(req);
  if (!validation.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: validation.array(),
    });
  }

  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const userCreated = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    });

    res.status(201).json({
      success: true,
      message: "user berhasil dibuat",
      data: userCreated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const validation = validationResult(req);
  if (!validation.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: validation.array(),
    });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = generateToken(user);
    res.status(200).json({
      success: true,
      message: "Login successful",
      data: { token },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  register,
  login,
};
