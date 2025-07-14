import { Link } from "react-router-dom";
import { useState } from "react";
import registerUser  from "../data/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister =  async (e) => {
    e.preventDefault();
    registerUser(name, email, password)
      .then((data) => {
        console.log("Registration successful:", data);
        alert("Registration successful! Please log in.");
      }).catch((error) => {
        console.error("Registration failed:", error);
        alert("Registration failed. Please try again.");
      })
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 min-w-screen">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-sky-500 mb-6 text-center">
          Register
        </h2>
        <form className="space-y-4" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <button
            type="submit"
            className="w-full bg-sky-500 text-white font-semibold py-3 rounded-lg hover:bg-sky-600 transition"
          >
            Daftar
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-sky-500 hover:underline">
            Login di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
