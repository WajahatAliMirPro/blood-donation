import React from "react";
import PageLayout from "../components/PageLayout";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login attempted! (Mock)");
  };

  return (
    <PageLayout title="LogIn">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6 mainForm">
        <input type="email" placeholder="Email" required className="block w-full border rounded-lg p-3" />
        <input type="password" placeholder="Password" required className="block w-full border rounded-lg p-3" />
        <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
          Login
        </button>
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to={'/signup'}  className="text-red-600 font-medium">
            Sign up here
          </Link>
        </p>
      </form>
    </PageLayout>
  );
};

export default Login;
