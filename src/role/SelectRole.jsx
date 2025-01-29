import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SelectRole() {
    const [selectedRole, setSelectedRole] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        const role = event.target.value;
        setSelectedRole(role);

        if (role === "manager") {
            navigate("/manager-login");
        } else if (role === "user") {
            navigate("/login");
        }
    };

    return (
        <div className="flex min-h-screen bg-orange-100">
            {/* Left Side - Photo */}
            <div className="w-1/2 flex p-4 m-14 items-center justify-center">
                <img 
                    src="https://cdn.prod.website-files.com/6509fe179d7033a278a05268/652771a2ad43d990a8837c07_Blog-feature-HR-Pillar.png"
                    alt="Role Selection"
                    className="rounded-lg shadow-lg"
                />
            </div>

            {/* Right Side - Role Selection */}
            <div className="w-1/2 flex flex-col justify-center items-center p-10">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Select Your Role</h1>
                <p className="text-lg text-gray-600 mb-4">Choose your role to continue</p>

                <select
                    value={selectedRole}
                    onChange={handleChange}
                    className="w-64 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 text-gray-700"
                >
                    <option value="">Select Role</option>
                    <option value="manager">Manager</option>
                    <option value="user">User</option>
                </select>
            </div>
        </div>
    );
}

export default SelectRole;
