import React, { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";

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

    const handleContact = (phone) => {
        if (!phone) return alert("No phone number available");
        window.location.href = `tel:${phone}`;
    };

    return (
        <PageLayout title="Verified Donor List">
            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <p className="text-xl text-gray-500 animate-pulse">Loading donors...</p>
                </div>
            ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 dls">
                    {donors.length > 0 ? (
                        donors.map((donor) => (
                            <div key={donor._id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col justify-between h-full">
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-800">{donor.name}</h4>
                                            <p className="text-sm text-gray-500">{donor.city}</p>
                                        </div>
                                        <span className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-full text-lg border border-red-200 shadow-sm">
                                            {donor.bloodGroup}
                                        </span>
                                    </div>

                                    <div className="space-y-2 text-gray-600 mb-6">
                                        <p className="flex items-center gap-2">
                                            <span className="font-semibold">Last Donation:</span>
                                            {donor.lastDonation || "N/A"}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleContact(donor.phone)}
                                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colorsfv flex justify-center items-center gap-2 shadow-md"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.83.37 1.64.73 2.4a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.77-.28a2 2 0 0 1 2.11.45c.76.36 1.57.61 2.4.73A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                    Call Donor
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-10">
                            <p className="text-xl text-gray-500">No donors found yet.</p>
                        </div>
                    )}
                </div>
            )}
        </PageLayout>
    );
};

export default DonorList;