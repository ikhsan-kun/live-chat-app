const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "supersecret"; 

function generateToken(user) {
  return jwt.sign({ userId: user.id }, secret, { expiresIn: "7d" });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, secret);
  } catch {
    return null;
  }
}

module.exports = { generateToken, verifyToken };
