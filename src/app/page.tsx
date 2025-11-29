import Link from "next/link";
import HeroVideo from "@/components/home/HeroVideo";
import ImpactStats from "@/components/home/ImpactStats";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Home() {
  const impactStats = [
    { value: 500, label: "Families Helped", suffix: "+" },
    { value: 2000, label: "People Supported", suffix: "+" },
    { value: 15000, label: "Meals Provided", suffix: "+" },
    { value: 100, label: "Homes Rebuilt", suffix: "+" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
        <HeroVideo
          videoSrc="/videos/hero-video.mp4"
          posterSrc="/images/hero-poster.jpg"
          className="absolute inset-0"
        />

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 drop-shadow-lg">
            Help Rebuild Lives After Hurricane Melissa
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
            Families in Westmoreland, Jamaica need your help. Together, we can
            restore homes, dignity, and hope.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="w-full sm:w-auto">
                Donate Now
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-700"
              >
                Learn Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <ImpactStats stats={impactStats} />

      {/* Urgency Section */}
      <section className="py-16 bg-accent-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Right Now, Families Are Waiting
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Hurricane Melissa left thousands without shelter, food, or clean
              water. Every day that passes, families struggle to survive in
              damaged homes with limited resources. Children are missing school.
              Elders are going without medication. Small businesses have been
              destroyed.
            </p>
            <p className="text-xl font-semibold text-accent-600 mb-8">
              Your donation today brings immediate relief and long-term recovery.
            </p>
            <Link href="/donate">
              <Button size="lg">Give Hope Today</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* How We Help - Three Phases */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Our Three-Phase Approach
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Relief Phase */}
            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-blue-900">
                Relief
              </h3>
              <p className="text-gray-700">
                Immediate aid: food, water, shelter materials, and medical
                supplies to families in crisis.
              </p>
            </div>

            {/* Rebuild Phase */}
            <div className="bg-green-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-green-900">
                Rebuild
              </h3>
              <p className="text-gray-700">
                Home repairs, roofing, and structural work to restore safe
                living conditions.
              </p>
            </div>

            {/* Recovery Phase */}
            <div className="bg-purple-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-purple-900">
                Recovery
              </h3>
              <p className="text-gray-700">
                Long-term support to restart businesses, education, and
                community strength.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/programs">
              <Button variant="secondary" size="lg">
                See All Our Programs
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Ways to Help */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Ways You Can Help
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/donate"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center group"
            >
              <div className="text-4xl mb-3">💝</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent-600 transition">
                Donate Money
              </h3>
              <p className="text-gray-600">
                Your financial gift provides immediate relief
              </p>
            </Link>

            <Link
              href="/help#goods"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center group"
            >
              <div className="text-4xl mb-3">📦</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent-600 transition">
                Donate Goods
              </h3>
              <p className="text-gray-600">
                Send supplies directly to families in need
              </p>
            </Link>

            <Link
              href="/help#volunteer"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center group"
            >
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent-600 transition">
                Volunteer
              </h3>
              <p className="text-gray-600">
                Join our ground team in Westmoreland
              </p>
            </Link>

            <Link
              href="/partner"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center group"
            >
              <div className="text-4xl mb-3">🏢</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent-600 transition">
                Partner With Us
              </h3>
              <p className="text-gray-600">
                Corporate partnerships for larger impact
              </p>
            </Link>
          </div>
        </Container>
      </section>

      {/* Trust & Transparency */}
      <section className="py-16 bg-primary-700 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Your Trust Matters
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              100% of your donation goes directly to relief efforts. We provide
              full transparency on how every dollar is spent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/transparency">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-700"
                >
                  View Our Financials
                </Button>
              </Link>
              <Link href="/faq">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-700"
                >
                  Read FAQs
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-accent-500 to-accent-600 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Every Family Deserves Safety and Hope
            </h2>
            <p className="text-xl mb-8">
              Your donation today can change a family's story. Will you help?
            </p>
            <Link href="/donate">
              <Button
                size="lg"
                className="bg-white text-accent-600 hover:bg-gray-100 text-xl px-12 py-4"
              >
                Donate Now
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
