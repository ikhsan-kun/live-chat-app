import { useState } from "react";
import { Link} from "react-router-dom";
import loginUser from "../data/api"; // Assuming you have an API function for login

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    loginUser(email, password)
      .then((data) => {
        console.log("Login successful:", data);
      })
      .catch((error) => {
        console.error("Login failed:", error);
        alert("Login failed. Please check your credentials.");
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 min-w-screen">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-sky-500 mb-6 text-center">
          Login
        </h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-sky-300 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-sky-300 rounded-lg"
          />
          <button className="w-full bg-sky-500 text-white py-3 rounded-lg hover:bg-sky-600">
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Belum punya akun?{" "}
          <Link to="/register" className="text-sky-500 hover:underline">
            Daftar di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
