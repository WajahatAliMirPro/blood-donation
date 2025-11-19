import React from "react";
import PageLayout from "../components/PageLayout";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! (Mock Submit)");
    e.target.reset();
  };

  return (
    <PageLayout title="Get in Touch">
      <div className="grid md:grid-cols-2 gap-10 cnt">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Details</h2>
          <p className="text-gray-600">📞   03554299-386</p>
          <p className="text-gray-600">✉️ support@lifedrop.com</p>
          <p className="text-gray-600">📍 123 Donor Lane, Health City</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Send us a Message</h2>
          <input type="text" placeholder="Name" required className="block w-full border rounded-lg p-3" />
          <input type="email" placeholder="Email" required className="block w-full border rounded-lg p-3" />
          <textarea placeholder="Message" rows="4" required className="block w-full border rounded-lg p-3"></textarea>
          <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
            Send Message
          </button>
        </form>
      </div>
    </PageLayout>
  );
};

export default Contact;
