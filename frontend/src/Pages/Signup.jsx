// import React from "react";
// import PageLayout from "../components/PageLayout";
// import { useNavigate } from "react-router-dom";
// import Button from "../components/Button";

// const Signup = () => {
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("🎉 Registration complete! (Mock)");
//     navigate("/login");
//   };

//   return (
//     <PageLayout title="Register as a Donor">
//       <div className="flex justify-center items-center min-h-[70vh] px-4 sgup">
//         <form
//           onSubmit={handleSubmit}
//           className="w-full max-w-md bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-8 space-y-6 border border-gray-200 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(185,28,28,0.2)] animate-fadeIn"
//         >
//           <h2 className="text-3xl font-bold text-center text-red-700 mb-2 tracking-wide">
//             Become a Donor ❤️
//           </h2>
//           <p className="text-center text-gray-500 text-sm mb-4">
//             Join our lifesaving community by registering below.
//           </p>

//           {/* Full Name */}
//           <div className="space-y-2">
//             <label className="block text-gray-700 font-medium text-sm">Full Name</label>
//             <input
//               type="text"
//               placeholder="Enter your full name"
//               required
//               className="block w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 hover:shadow-md"
//             />
//           </div>

//           {/* Blood Group */}
//           <div className="space-y-2">
//             <label className="block text-gray-700 font-medium text-sm">Blood Group</label>
//             <select
//               required
//               className="block w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 hover:shadow-md bg-white"
//             >
//               <option value="">Select Blood Group</option>
//               <option value="A+">A+</option>
//               <option value="B+">B+</option>
//               <option value="O+">O+</option>
//               <option value="AB+">AB+</option>
//               <option value="A-">A-</option>
//               <option value="B-">B-</option>
//               <option value="O-">O-</option>
//               <option value="AB-">AB-</option>
//             </select>
//           </div>

//           {/* Email */}
//           <div className="space-y-2">
//             <label className="block text-gray-700 font-medium text-sm">Email Address</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               required
//               className="block w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 hover:shadow-md"
//             />
//           </div>

//           {/* Password */}
//           <div className="space-y-2">
//             <label className="block text-gray-700 font-medium text-sm">Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               required
//               className="block w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 hover:shadow-md"
//             />
//           </div>

//           {/* Submit Button */}
//           <Button
//             type="submit"
            
//           >
//             Register Now
//           </Button>

//           {/* Already have an account */}
//           <p className="text-center text-gray-600 text-sm mt-3">
//             Already have an account?{" "}
//             <span
//               onClick={() => navigate("/login")}
//               className="text-red-600 font-semibold cursor-pointer hover:underline"
//             >
//               Login here
//             </span>
//           </p>
          
//                     {/* <Link to={'/login'}  className="text-red-600 font-medium">
//                       login here
//                     </Link>
//                     </p> */}
//         </form>
//       </div>
//     </PageLayout>
//   );
// };

// export default Signup;
import React from "react";
import PageLayout from "../components/PageLayout";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Registration complete! (Mock)");
    navigate("/login");
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
              placeholder="Enter your full name"
              required
              className="block w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 hover:shadow-md"
            />
          </div>

          {/* Blood Group */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium text-sm">
              Blood Group
            </label>
            <select
              required
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

          {/* 🏙️ City */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium text-sm">
              City
            </label>
            <select
              required
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

          {/* 🩸 Last Donation */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium text-sm">
              Last Donation
            </label>
            <input
              type="text"
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
              placeholder="Enter your email"
              required
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
              placeholder="Enter your password"
              required
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
