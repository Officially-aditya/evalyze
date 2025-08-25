import PageWrapper from "../components/PageWrapper";

export default function Signup() {
  return (
    <PageWrapper>
      <section className="py-20 px-6 text-center bg-white">
        <h1 className="text-4xl font-bold mb-6">Sign Up</h1>
        <form className="max-w-md mx-auto bg-gray-50 p-8 rounded-lg shadow">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none"
          />
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
            Create Account
          </button>

          {/* Back to login link */}
          <p className="mt-6 text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-black hover:underline">
              Log in
            </a>
          </p>
        </form>
      </section>
    </PageWrapper>
  );
}
