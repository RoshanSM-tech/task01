import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div className="bg-orange-100 min-h-screen flex items-center justify-center">
            {/* Left Side - Image */}
            <div className="hidden md:flex w-1/2 justify-center">
                <img 
                    src="https://cdn.prod.website-files.com/6509fe179d7033a278a05268/652771a2ad43d990a8837c07_Blog-feature-HR-Pillar.png"
                    alt="Login"
                    className="rounded-lg shadow-lg w-3/4 h-auto"
                />
            </div>

            {/* Right Side - Login Form */}
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Login</h1>
                <form>
                    {/* Email Field */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            type="email"
                            required
                            name="email"
                            placeholder="Enter your email..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Password:</label>
                        <input
                            type="password"
                            required
                            name="password"
                            placeholder="Enter your password..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
                        >
                            Login
                        </button>
                    </div>
                </form>

                {/* Register Link */}
                <p className="text-sm text-gray-600 text-center mt-4">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-orange-500 hover:underline">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
