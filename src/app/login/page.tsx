import PageWrapper from "../components/PageWrapper";
import Link from "next/link";

export default function Login() {
  return (
    <PageWrapper>
      <section className="py-20 px-6 text-center bg-white">
        <h1 className="text-4xl font-bold mb-6">Login</h1>
        <form className="max-w-md mx-auto bg-gray-50 p-8 rounded-lg shadow">
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 px-4 py-2 border rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md font-medium"
          >
            Login
          </button>

          {/* Signup Button */}
          <p className="mt-6 text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-black hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </section>
    </PageWrapper>
  );
}
