import React from "react";
import PageLayout from "../components/PageLayout";
import Button from "../components/Button";

const DonorList = () => {
  const donors = [
    { id: 1, name: "Shehbaz sk balyari", bloodGroup: "O+", city: "Roundu", lastDonation: "3 months ago" },
    { id: 2, name: "S fatima", bloodGroup: "A-", city: "Skardu", lastDonation: "1 month ago" },
    { id: 3, name: "kamila", bloodGroup: "B+", city: "Shigar", lastDonation: "6 months ago" },
    { id: 3, name: "Karimi", bloodGroup: "B+", city: "Shigar", lastDonation: "4 months ago" },
    { id: 3, name: "Mazahir balyari", bloodGroup: "A+", city: "Roundu", lastDonation: "6 months ago" },
    { id: 3, name: "shahis numa", bloodGroup: "O+", city: "Roundu", lastDonation: "  3 months ago"},
  ];

  return (
    <PageLayout title="Verified Donor List">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 dls">
        {donors.map((donor) => (
          <div key={donor.id} className="bg-red-50 p-5 rounded-xl shadow-md border-t-4 border-red-600">
            <div className="flex justify-between">
              <h4 className="text-xl font-bold text-gray-800">{donor.name}</h4>
              <span className="bg-red-600 text-white font-bold px-3 py-1 rounded-full">{donor.bloodGroup}</span>
            </div>
            <p className="text-gray-600 mt-2"><strong>City:</strong> {donor.city}</p>
            <p className="text-gray-600"><strong>Last Donation:</strong> {donor.lastDonation}</p>
            <Button>
              Contact Donor
            </Button>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default DonorList;
