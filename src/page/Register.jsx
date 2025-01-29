import React from 'react'
import { Link } from 'react-router-dom'


function RegisterPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const password1 = form.password1.value;
        const password2 = form.password2.value;

        if (password1 !== password2) {
            alert("Passwords do not match!");
            return;
        }

        // Submit form logic here
    };

    return (
        <div className="bg-orange-100 h-screen flex">
            <div className="w-1/2 flex p-4 m-14 items-center justify-center">
                <img 
                    src="https://cdn.prod.website-files.com/6509fe179d7033a278a05268/652771a2ad43d990a8837c07_Blog-feature-HR-Pillar.png"
                    alt="Role Selection"
                    className="rounded-lg shadow-lg"
                />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg w-fit h-fit max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name:</label>
                        <input type="text" id="name" name="name" required placeholder="Enter your name..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
                        <input type="email" id="email" name="email" required placeholder="Enter your email..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password1" className="block text-sm font-medium text-gray-700 mb-2">Password:</label>
                        <input type="password" id="password1" name="password1" required placeholder="Enter your password..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password2" className="block text-sm font-medium text-gray-700 mb-2">Confirm Password:</label>
                        <input type="password" id="password2" name="password2" required placeholder="Confirm your password..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" />
                    </div>

                    <div className="mb-6">
                        <input type="submit" value="Register" className="w-full py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition" />
                    </div>
                </form>
                <p className="text-sm text-gray-600 text-center">Already have an account? 
                    <Link to="/login" className="text-orange-500 hover:underline">Login here</Link>
                </p>
            </div>
        </div>
    );
}

export default RegisterPage