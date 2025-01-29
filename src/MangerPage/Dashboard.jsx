import React from "react";
import { useNavigate } from "react-router-dom";
import { Package, PlusCircle, Eye } from "react-feather";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
    const navigate = useNavigate();

    const tasks = [
        { title: "Add Task", route: "/sidetask", icon: <PlusCircle className="text-blue-500 text-5xl" /> },
        { title: "Monitor Tasks", route: "/monitortask", icon: <Eye className="text-green-500 text-5xl" /> },
    ];

    const pieChartData = {
        labels: ["Opened", "Read", "Deleted", "Unopened"],
        datasets: [
            {
                data: [300, 150, 100, 50],
                backgroundColor: ["#007bff", "#ffc107", "#dc3545", "#6c757d"],
            },
        ],
    };

    return (
        <div className="bg-gradient-to-b from-orange-100 flex to-orange-200 min-h-screen">
            <div className="w-60 h-auto rounded-r-lg bg-orange-400">
                <h1 className="text-slate-900 font-extrabold flex p-8 items-center space-x-4 text-4xl"><Package size={34} /> Task</h1>
            </div>
            <div className="max-w-screen-xl m-auto p-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-800">Welcome to the Dashboard</h1>
                    <p className="text-lg text-gray-600 mt-2">Manage your tasks and monitor progress efficiently.</p>
                </div>

                {/* Task Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {tasks.map((task, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(task.route)}  // Navigate to the respective route
                            className="relative bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition transform cursor-pointer p-6 flex flex-col items-center text-center"
                        >
                            <div className="mb-4">{task.icon}</div>
                            <h2 className="text-xl font-semibold text-gray-700">{task.title}</h2>
                        </div>
                    ))}
                </div>

                {/* Email Statistics Chart */}
                <div className="mt-10 flex justify-center">
                    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
                        <h2 className="text-center font-bold text-lg mb-4">Email Statistics</h2>
                        <Pie data={pieChartData} />
                        <p className="text-center text-sm mt-4">Number of emails sent</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
