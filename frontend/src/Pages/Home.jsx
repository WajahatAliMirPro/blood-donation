import React from "react";
import PageLayout from "../components/PageLayout";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageLayout title="Wellcome to Life Drop">
      <div className="space-y-12 bgc">
        <div className="text-center py-16 bg-red-50 rounded-xl shadow-inner">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-red-800 mb-4">
            The Gift of Life is in Your Hands
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Every drop counts. Join our mission to connect those who give with those who need, instantly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => navigate("/signup")}
              className="bg-red-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-red-700 rg-btn"
            >
              Register to Donate
            </button>
            <button
              onClick={() => navigate("/donors")}
              className="bg-gray-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-700 find-btn "
            >
              Find a Donor
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 bcg">
          <Card title="Instant Connection">Find the nearest verified donor in minutes, not hours.</Card>
          <Card title="Secure & Private">Your data is safe with us and only shared with verified users.</Card>
          <Card title="Community Driven">Life Drop is powered by volunteers building a stronger community.</Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
