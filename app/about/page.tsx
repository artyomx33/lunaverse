import { Container } from "@/components/ui/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Our Story & Team",
  description: "Learn about our mission, values, and the team behind our success.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section-wrapper bg-gradient-to-b from-neutral-50 to-white py-12 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-4 md:mb-6">About Our Company</h1>
            <p className="text-lg text-neutral-600 mb-8">
              Discover our story, mission, and the values that drive everything we do.
            </p>
          </div>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="section-wrapper py-12 md:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-4">Our Story</h2>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                Our company was founded with a simple mission: to deliver exceptional value and service
                to our customers. From humble beginnings, we have grown into a trusted partner in our industry.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Today, we continue to uphold the principles that made us successful: integrity, quality,
                and a commitment to our customers' success.
              </p>
            </div>
            <div className="bg-neutral-200 aspect-square rounded-lg flex items-center justify-center">
              <span className="text-neutral-500">Company Image Placeholder</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Values */}
      <section className="section-wrapper py-12 md:py-20 bg-neutral-50">
        <Container>
          <h2 className="heading-lg mb-12 text-center">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-lg mb-3">Quality</h3>
              <p className="text-neutral-600">
                We deliver excellence in everything we do, exceeding expectations consistently.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-lg mb-3">Integrity</h3>
              <p className="text-neutral-600">
                We conduct our business with honesty, transparency, and ethical practices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-lg mb-3">Innovation</h3>
              <p className="text-neutral-600">
                We continuously improve to serve our customers better in a changing world.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="section-wrapper py-12 md:py-20 bg-white">
        <Container>
          <h2 className="heading-lg mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="text-center">
                <div className="bg-neutral-200 aspect-square rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-neutral-500">Team Member Photo</span>
                </div>
                <h3 className="font-semibold text-lg">Team Member Name</h3>
                <p className="text-neutral-600">Position Title</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
