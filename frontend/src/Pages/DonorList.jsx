import React, { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import Button from "../components/Button";

const DonorList = () => {
    const [donors, setDonors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDonors = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/donor/list");
                const data = await response.json();
                if (Array.isArray(data)) {
                    setDonors(data);
                }
            } catch (error) {
                console.error("Error fetching donors:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDonors();
    }, []);

    return (
        <PageLayout title="Verified Donor List">
            {loading ? (
                <p className="text-center text-gray-500">Loading donors...</p>
            ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 dls">
                    {donors.length > 0 ? (
                        donors.map((donor) => (
                            <div key={donor._id} className="bg-red-50 p-5 rounded-xl shadow-md border-t-4 border-red-600">
                                <div className="flex justify-between">
                                    <h4 className="text-xl font-bold text-gray-800">{donor.name}</h4>
                                    <span className="bg-red-600 text-white font-bold px-3 py-1 rounded-full text-sm">
                                        {donor.bloodGroup}
                                    </span>
                                </div>
                                <p className="text-gray-600 mt-2">
                                    <strong>City:</strong> {donor.city}
                                </p>
                                <p className="text-gray-600">
                                    <strong>Last Donation:</strong> {donor.lastDonation}
                                </p>
                                <p className="text-gray-600">
                                    <strong>Phone:</strong> {donor.phone}
                                </p>
                                <Button>Contact Donor</Button>
                            </div>
                        ))
                    ) : (
                        <p className="text-center col-span-3 text-gray-500">No donors found yet.</p>
                    )}
                </div>
            )}
        </PageLayout>
    );
};

export default DonorList;