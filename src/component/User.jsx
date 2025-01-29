import React, { useState } from "react";
import { Package } from "react-feather";

const User = () => {

        const [formData, setFormData] = useState({
            username: "michael23",
            email: "",
            firstName: "Chet",
            lastName: "Faker",
            address: "Melbourne, Australia",
            city: "Melbourne",
            country: "Australia",
            zip: "",
            aboutMe: "Oh so, your weak rhyme You doubt I'll bother, reading into it",
        });
    
        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };
    
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(formData);
            // Submit data here (e.g., API request)
        };
    
        return (
            <div className="bg-orange-100 h-screen flex">
                {/* Sidebar */}
                <div className="w-60 rounded-r-lg h-screen bg-orange-400 fixed top-0 left-0 flex">
                    <h1 className="text-slate-900 font-extrabold flex p-8 space-x-4 text-4xl">
                        <Package size={34} /> Task
                    </h1>
                </div>
    
                {/* Main Content */}
                <div className="ml-60 flex-1 p-8 overflow-auto">
                    <div className="grid grid-cols-1 gap-6">
                        {/* Profile Card */}
                        <div className="bg-white h-fit shadow-md rounded-lg overflow-hidden">
                            <img alt="Cover" className="w-full h-32 bg-slate-500 object-cover" />
                            <div className="p-4 text-center">
                                <img alt="Avatar" className="w-24 h-24 rounded-full mx-auto -mt-12 border-4 bg-slate-500 border-black" />
                                <h3 className="text-xl font-semibold mt-2">Chet Faker</h3>
                                <p className="text-gray-500">@chetfaker</p>
                                <p className="text-sm mt-2">
                                    "I like the way you work it, No diggity, I wanna bag it up"
                                </p>
                            </div>
                            <div className="border-t p-4 flex justify-between text-center">
                                <div>
                                    <h4 className="text-lg font-semibold">12</h4>
                                    <p className="text-gray-500 text-sm">Files</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">2GB</h4>
                                    <p className="text-gray-500 text-sm">Used</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">$24.6</h4>
                                    <p className="text-gray-500 text-sm">Spent</p>
                                </div>
                            </div>
                        </div>
    
                        {/* Edit Profile Form */}
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h4 className="text-xl font-semibold mb-4">Edit Profile</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Input fields... */}
                                    <div className="col-span-2">
                                        <label className="block text-sm font-medium">About Me</label>
                                        <textarea
                                            name="aboutMe"
                                            value={formData.aboutMe}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded-md text-gray-200 focus:ring focus:ring-blue-200 h-32"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="mt-4 text-center">
                                    <button type="submit" className="bg-orange-400 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600">
                                        Update Profile
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    
export default User;
