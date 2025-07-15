import BASE_URL from "../utils/config";
import { putAccessToken } from "../utils/auth";

export async function registerUser(name, email, password) {
  try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (data.success) {
      return data.data; // Return user data on successful registration
    } else {
      throw new Error(data.message || "Registration failed");
    }
  } catch (error) {
    console.error("Error during registration:", error);
    throw error; // Propagate the error for further handling
  }
}

export async function loginUser(email, password) {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.success) {
      putAccessToken(data.data.token); // Save the access token
      return data.data; // Return user data on successful login
    } else {
      throw new Error(data.message || "Login failed");
    }
  } catch (error) {
    console.error("Error during login:", error);
    throw error; // Propagate the error for further handling
  }
}