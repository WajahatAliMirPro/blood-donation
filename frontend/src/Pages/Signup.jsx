import React, { useState } from "react";
import PageLayout from "../components/PageLayout";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Signup = () => {
    const navigate = useNavigate();

    // State to hold form data
    const [formData, setFormData] = useState({
        name: "",
        bloodGroup: "",
        city: "",
        phone: "",
        lastDonation: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok && !data.error) {
                alert(data.msg || "Registration Successful!");
                navigate("/login");
            } else {
                alert(data.msg || data.error || "Registration Failed");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Is the backend running?");
        }
    };

    return (
        <PageLayout title="Register as a Donor">
            <div className="flex justify-center items-center min-h-[70vh] px-4 sgup">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-8 space-y-6 border border-gray-200 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(185,28,28,0.2)] animate-fadeIn"
                >
                    <h2 className="text-3xl font-bold text-center text-red-700 mb-2 tracking-wide">
                        Become a Donor ❤️
                    </h2>
                    <p className="text-center text-gray-500 text-sm mb-4">
                        Join our lifesaving community by registering below.
                    </p>

                    {/* Full Name */}
                    <div className="space-y-2">
                        <label className="block text-gray-700 font-medium text-sm">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            required
                            onChange={handleChange}
                            className="block w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 hover:shadow-md"
                        />
                    </div>

                    {/* Phone Number (NEW FIELD REQUIRED BY BACKEND) */}
                    <div className="space-y-2">
                        <label className="block text-gray-700 font-medium text-sm">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="e.g. 0300-1234567"
                            required
                            onChange={handleChange}
                            className="block w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 hover:shadow-md"
                        />
                    </div>

                    {/* Blood Group */}
                    <div className="space-y-2">
                        <label className="block text-gray-700 font-medium text-sm">
                            Blood Group
                        </label>
                        <select
                            name="bloodGroup"
                            required
                            onChange={handleChange}
                            className="block w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 hover:shadow-md bg-white"
                        >
                            <option value="">Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="B+">B+</option>
                            <option value="O+">O+</option>
                            <option value="AB+">AB+</option>
                            <option value="A-">A-</option>
                            <option value="B-">B-</option>
                            <option value="O-">O-</option>
                            <option value="AB-">AB-</option>
                        </select>
                    </div>

                    {/* City */}
                    <div className="space-y-2">
                        <label className="block text-gray-700 font-medium text-sm">
                            City
                        </label>
                        <select
                            name="city"
                            required
                            onChange={handleChange}
                            className="block w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 hover:shadow-md bg-white"
                        >
                            <option value="">Select City</option>
                            <option value="Skardu">Skardu</option>
                            <option value="Gilgit">Gilgit</option>
                            <option value="Roundu">Roundu</option>
                            <option value="Kharmang">Kharmang</option>
                            <option value="Shigar">Shigar</option>
                            <option value="Kachura">Kachura</option>
                            <option value="Hussain Abad">Hussain Abad</option>
                            <option value="Ghanche">Ghanche</option>
                            <option value="Satpara">Satpara</option>
                        </select>
                    </div>

                    {/* Last Donation */}
                    <div className="space-y-2">
                        <label className="block text-gray-700 font-medium text-sm">
                            Last Donation
                        </label>
                        <input
                            type="text"
                            name="lastDonation"
                            onChange={handleChange}
                            placeholder="e.g. 6 months ago"
                            className="block w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 hover:shadow-md"
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label className="block text-gray-700 font-medium text-sm">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            onChange={handleChange}
                            className="block w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 hover:shadow-md"
                        />
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                        <label className="block text-gray-700 font-medium text-sm">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                            onChange={handleChange}
                            className="block w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 hover:shadow-md"
                        />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit">Register Now</Button>

                    {/* Already have an account */}
                    <p className="text-center text-gray-600 text-sm mt-3">
                        Already have an account?{" "}
                        <span
                            onClick={() => navigate("/login")}
                            className="text-red-600 font-semibold cursor-pointer hover:underline"
                        >
                            Login here
                        </span>
                    </p>
                </form>
            </div>
        </PageLayout>
    );
};

export default Signup;