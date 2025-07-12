const bycrpt = require("bcrypt");
const { generateToken, verifyToken } = require("../utils/auth");
const validator = require("../validators/authValidator");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const validation = validator(req);
  if (!validation.isValid) {
    return res.status(400).json({
      success: false,
      message: validation.errors,
      errors: validation.array(),
    });
  }

  try {
    const hashPassword = await bycrpt.hash(password, 10);
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

  const validation = validator(req);
  if (!validation.isValid) {
    return res.status(400).json({
      success: false,
      message: validation.errors,
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

    const isPasswordValid = await bycrpt.compare(password, user.password);
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
      data: { user, token },
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