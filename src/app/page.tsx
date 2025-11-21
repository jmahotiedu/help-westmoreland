import Link from "next/link";
import {
  HeartIcon,
  CubeIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import HeroVideo from "@/components/home/HeroVideo";
import HeroContent from "@/components/home/HeroContent";
import ImpactStats from "@/components/home/ImpactStats";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/Button";

export default function Home() {
  const impactStats = [
    { value: 500, label: "Families Helped", suffix: "+" },
    { value: 2000, label: "People Supported", suffix: "+" },
    { value: 15000, label: "Meals Provided", suffix: "+" },
    { value: 100, label: "Homes Rebuilt", suffix: "+" },
  ];

  return (
    <div>
      {/* Hero Section - mobile: 70dvh min, desktop 90vh; space above green stats */}
      <section
        className="relative min-h-[max(500px,70dvh)] sm:min-h-[max(600px,90vh)] flex items-center justify-center pb-[max(4rem,env(safe-area-inset-bottom))] sm:pb-[max(5rem,env(safe-area-inset-bottom))]"
        aria-labelledby="hero-heading"
      >
        <HeroVideo
          videoSrc="/videos/hero-video.mp4"
          posterSrc="/images/hero-poster.jpg"
          className="absolute inset-0"
        />

        <HeroContent />
      </section>

      {/* Impact Stats */}
      <ImpactStats stats={impactStats} />
      <p className="text-center text-primary-700 font-semibold bg-primary-50 py-3 px-4 text-sm sm:text-base">
        100% of donations go directly to relief.
      </p>

      {/* Opening Statement (from Site Specifications) */}
      <AnimatedSection className="py-12 sm:py-16 bg-white" whileInView>
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              Westmoreland is hurting. Families are facing the unthinkable:
              homes washed away, food gone, clothes ruined, and entire
              communities left waiting for help that comes too slowly. Parents
              are trying to stay strong with almost nothing left. Children are
              frightened. Elders are vulnerable.
            </p>
            <p className="text-2xl font-display font-bold text-primary-700 mb-6">
              But hope is not lost.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Help Westmoreland stands in the gap, providing immediate relief,
              comfort, and support so no family has to walk this journey alone.
            </p>
            <p className="text-lg font-semibold text-gray-800">
              No one should face disaster alone. Not one family. Not one child.
              Not one community.
            </p>
          </div>
        </Container>
      </AnimatedSection>

      {/* Urgency Section */}
      <AnimatedSection className="py-12 sm:py-16 bg-accent-50" whileInView>
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-6">
              Right Now, Families Are Waiting
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Hurricane Melissa left thousands without shelter, food, or clean
              water. Every day that passes, families struggle to survive in
              damaged homes with limited resources. Children are missing school.
              Elders are going without medication. Small businesses have been
              destroyed.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Behind every number are parents, children, and neighbors in Westmoreland who are counting on us. Your gift connects directly to them.
            </p>
            <p className="text-xl font-semibold text-accent-600 mb-8">
              Your donation today brings immediate relief and long-term recovery.
            </p>
            <ButtonLink href="/donate" size="lg" className="w-full sm:w-auto">
              Give Hope Today
            </ButtonLink>
          </div>
        </Container>
      </AnimatedSection>

      {/* How We Help - Three Phases */}
      <section className="py-12 sm:py-16">
        <Container>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-8 sm:mb-12">
            Our Three-Phase Approach
          </h2>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Relief Phase */}
            <div className="bg-blue-50 rounded-lg p-6 sm:p-8 text-center">
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
            <div className="bg-green-50 rounded-lg p-6 sm:p-8 text-center">
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
            <div className="bg-purple-50 rounded-lg p-6 sm:p-8 text-center">
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
            <ButtonLink href="/programs" variant="secondary" size="lg">
              See All Our Programs
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Ways to Help */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <Container>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-8 sm:mb-12">
            Ways You Can Help
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" role="list">
            <Link
              href="/donate"
              className="bg-white p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-md hover:border-primary-100 border border-transparent transition-all text-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 active:scale-[0.99] min-h-[120px] flex flex-col justify-center items-center"
            >
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-100 text-accent-600 mb-4 group-hover:bg-accent-500 group-hover:text-white transition-colors" aria-hidden>
                <HeartIcon className="w-7 h-7" />
              </span>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent-600 transition-colors">
                Donate Money
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your financial gift provides immediate relief
              </p>
            </Link>

            <Link
              href="/help#goods"
              className="bg-white p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-md hover:border-primary-100 border border-transparent transition-all text-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 active:scale-[0.99] min-h-[120px] flex flex-col justify-center items-center"
            >
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 text-primary-600 mb-4 group-hover:bg-primary-500 group-hover:text-white transition-colors" aria-hidden>
                <CubeIcon className="w-7 h-7" />
              </span>
              <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-accent-600 transition-colors">
                Donate Goods
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Send supplies directly to families in need
              </p>
            </Link>

            <Link
              href="/help#volunteer"
              className="bg-white p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-md hover:border-primary-100 border border-transparent transition-all text-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 active:scale-[0.99] min-h-[120px] flex flex-col justify-center items-center"
            >
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 text-primary-600 mb-4 group-hover:bg-primary-500 group-hover:text-white transition-colors" aria-hidden>
                <UserGroupIcon className="w-7 h-7" />
              </span>
              <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-accent-600 transition-colors">
                Volunteer
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Join our ground team in Westmoreland
              </p>
            </Link>

            <Link
              href="/partner"
              className="bg-white p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-md hover:border-primary-100 border border-transparent transition-all text-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 active:scale-[0.99] min-h-[120px] flex flex-col justify-center items-center"
            >
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 text-primary-600 mb-4 group-hover:bg-primary-500 group-hover:text-white transition-colors" aria-hidden>
                <BuildingOfficeIcon className="w-7 h-7" />
              </span>
              <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-accent-600 transition-colors">
                Partner With Us
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Corporate partnerships for larger impact
              </p>
            </Link>
          </div>
        </Container>
      </section>

      {/* Trust & Transparency */}
      <section className="py-12 sm:py-16 bg-primary-700 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-6">
              Your Trust Matters
            </h2>
            <p className="text-base sm:text-xl mb-6 sm:mb-8 text-primary-100">
              100% of your donation goes directly to relief efforts. We provide
              full transparency on how every dollar is spent.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <ButtonLink
                href="/transparency"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto min-h-[48px] justify-center bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-700"
              >
                View Our Financials
              </ButtonLink>
              <ButtonLink
                href="/faq"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto min-h-[48px] justify-center bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-700"
              >
                Read FAQs
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-accent-500 to-accent-600 text-white pb-[max(3rem,env(safe-area-inset-bottom))]">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
              Every Family Deserves Safety and Hope
            </h2>
            <p className="text-base sm:text-xl mb-6 sm:mb-8">
              Your donation today can change a family's story. Will you help?
            </p>
            <ButtonLink
              href="/donate"
              size="lg"
              className="w-full sm:w-auto min-h-[48px] justify-center bg-white text-accent-600 hover:bg-gray-100 text-lg sm:text-xl px-8 sm:px-12 py-4"
            >
              Donate Now
            </ButtonLink>
          </div>
        </Container>
      </section>
    </div>
  );
}
