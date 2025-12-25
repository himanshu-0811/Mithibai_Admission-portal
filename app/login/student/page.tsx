export default function LoginPage() {
  return (
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block text-md font-semibold mb-2">
              Application Number
            </label>
            <input
              type="text"
              placeholder="Enter Application number"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="block text-md font-semibold mb-2">
              Date Of Birth
            </label>
            <input
              type="date"
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

