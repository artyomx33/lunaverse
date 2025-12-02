import { Container } from "@/components/ui/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Solutions for Your Needs",
  description: "Explore our range of professional services designed for you.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Service One",
      description: "First service offering with key benefits and features.",
    },
    {
      title: "Service Two",
      description: "Second service offering with key benefits and features.",
    },
    {
      title: "Service Three",
      description: "Third service offering with key benefits and features.",
    },
    {
      title: "Service Four",
      description: "Fourth service offering with key benefits and features.",
    },
    {
      title: "Service Five",
      description: "Fifth service offering with key benefits and features.",
    },
    {
      title: "Service Six",
      description: "Sixth service offering with key benefits and features.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="section-wrapper bg-gradient-to-b from-neutral-50 to-white py-12 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-4 md:mb-6">Our Services</h1>
            <p className="text-lg text-neutral-600">
              Comprehensive solutions tailored to meet your unique needs and goals.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section-wrapper py-12 md:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-neutral-50 p-8 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-semibold">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-6">{service.description}</p>
                <a href="#" className="button-primary inline-block">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-wrapper py-12 md:py-20 bg-blue-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-neutral-600 mb-8">
              Contact us today to discuss which services are right for you.
            </p>
            <a href="/contact" className="button-primary inline-block">
              Contact Us
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
