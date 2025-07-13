import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 min-w-screen">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-sky-500 mb-6 text-center">
          Register
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nama"
            className="w-full p-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <input
            type="password"
            placeholder="Password"
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
