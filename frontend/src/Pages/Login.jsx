import React, { useState } from "react";
import PageLayout from "../components/PageLayout";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.type]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                // Save the token to local storage
                localStorage.setItem("token", data.token);
                alert("Login Successful!");
                navigate("/donors"); // Redirect to donor list
            } else {
                alert(data.msg || "Login failed");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Server Error");
        }
    };

    return (
        <PageLayout title="LogIn">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6 mainForm">
                <input
                    type="email"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                    className="block w-full border rounded-lg p-3"
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    onChange={handleChange}
                    className="block w-full border rounded-lg p-3"
                />
                <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
                    Login
                </button>
                <p className="text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link to={'/signup'} className="text-red-600 font-medium">
                        Sign up here
                    </Link>
                </p>
            </form>
        </PageLayout>
    );
};

export default Login;