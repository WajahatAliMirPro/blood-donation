import React from "react";
import PageLayout from "../components/PageLayout";
import Card from "../components/Card";

const About = () => (
  <PageLayout title="Our Mission">
    <div className="space-y-6 text-lg text-gray-700 abt">
      <p>
        <strong>Life Drop</strong> was founded on a simple principle: no one should have to wait for blood in an emergency.
      </p>
      <p className="font-semibold text-red-600">Our Vision:</p>
      <p>
        To create a global network where blood scarcity is eliminated, and every individual has immediate access to life-saving resources.
      </p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <Card title="Transparency">We communicate openly about our goals and progress.</Card>
        <Card title="Reliability">Our platform ensures 99.9% uptime—available day and night.</Card>
      </div>
    </div>
  </PageLayout>
);

export default About;
