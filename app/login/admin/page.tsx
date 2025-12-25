export default function LoginPage() {
  return (
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block text-md font-semibold mb-2">
              User Id
            </label>
            <input
              type="text"
              placeholder="Enter your id"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="block text-md font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>

        
      </div>
    
  );
}

