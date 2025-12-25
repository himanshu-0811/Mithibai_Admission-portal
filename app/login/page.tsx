import Link from "next/link";
export default function LoginPage() {
  return (
    
      <div className="w-full max-w-lg bg-white p-12 rounded-xl shadow-lg">
        <h1 className="text-4xl font-extrabold mb-10 text-center">
          Login
        </h1>

        <div className="flex flex-col gap-6">
          <Link href="/login/student">
          
            <button
            type="submit"
            className="w-full text-lg font-semibold bg-black text-white py-4 rounded hover:bg-gray-800 transition"
          >
            Student Login
          </button>
          </Link>

          <div className="flex flex-col gap-6">
            <Link href="/login/admin">
            <button
            type="submit"
            className="w-full text-lg font-semibold bg-amber-300 text-black py-3 rounded hover:bg-gray-800 transition"
          >
           Admin Login
          </button> 
          </Link>
          </div>

          
        </div>

        
      </div>
    
  );
}

