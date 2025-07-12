export default function Login() {
  return (
    <div className="bg-cyan-500 min-h-screen flex items-center justify-center w-screen">
      <form action="" className="bg-white p-8 rounded shadow-md w-96">
        <h1>Login</h1>
        <div>
          <label htmlFor="username">Username:</label><br />
          <input type="text" id="username" name="username" required className="rounded-lg"/>
        </div>
        <div>
          <label htmlFor="password">Password:</label><br />
          <input type="password" id="password" name="password" required className="rounded-lg"/>
        </div>
        <button type="submit" className=" bg-neutral-950">Login</button>
      </form>
    </div>
  );
}

 
