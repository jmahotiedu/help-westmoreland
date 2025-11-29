import Container from "@/components/ui/Container";
import PartnerForm from "@/components/forms/PartnerForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Partner with Help Westmoreland to rebuild lives and restore hope in Westmoreland, Jamaica.",
};

export default function PartnerPage() {
  return (
    <div className="py-16">
      <Container>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-center text-gray-900 mb-6">
          Rebuild Westmoreland With Us
        </h1>

        <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto mb-16">
          When Hurricane Melissa tore through Westmoreland, families lost homes,
          food, clothing, and stability. Rebuilding isn't a one-day effort—it
          requires unity, resources, and long-term commitment. That's where
          partners like you make the biggest impact.
        </p>

        {/* Why Partner */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-6">
            Why Your Partnership Matters
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Partnerships allow us to:
          </p>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-start">
              <span className="text-primary-600 font-bold mr-3">•</span>
              Reach the hardest-hit communities faster
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 font-bold mr-3">•</span>
              Distribute larger volumes of food, clothing, and supplies
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 font-bold mr-3">•</span>
              Rebuild damaged homes, schools, and community spaces
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 font-bold mr-3">•</span>
              Support farmers and small businesses restarting after loss
            </li>
          </ul>
        </section>

        {/* Ways to Partner */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-8">
            Ways to Partner
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-display font-bold text-primary-600 mb-3">
                Financial Sponsorship
              </h3>
              <p className="text-gray-700">
                Support rebuilding projects, relief distributions, school
                restoration, and Adopt-A-Community initiatives. Sponsorships can
                be one-time or ongoing.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-display font-bold text-primary-600 mb-3">
                Donation Drives
              </h3>
              <p className="text-gray-700">
                Collect essential items such as food, clothing, baby supplies,
                toiletries, school items, or household essentials. We provide
                guidelines, you collect, we distribute.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-display font-bold text-primary-600 mb-3">
                Employee Giving & Matching
              </h3>
              <p className="text-gray-700">
                Encourage staff to give while your company matches their
                donations. This doubles or triples impact with minimal effort.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-display font-bold text-primary-600 mb-3">
                Volunteer Teams
              </h3>
              <p className="text-gray-700">
                Corporate, school, and church groups are welcome. Activities
                include sorting donations, distribution, community cleanups, and
                rebuilding support.
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="mb-16 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg p-12">
          <h2 className="text-3xl font-display font-bold mb-6 text-center">
            Benefits of Partnership
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="font-bold mb-2">Brand Visibility</h3>
              <p className="text-primary-100">
                Recognition on our website, social media, and relief materials
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-bold mb-2">Community Impact</h3>
              <p className="text-primary-100">
                Direct, measurable impact on families and communities
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">💼</div>
              <h3 className="font-bold mb-2">Employee Engagement</h3>
              <p className="text-primary-100">
                Unite your team around meaningful corporate social responsibility
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Form */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-display font-bold mb-6 text-center">
            Start a Partnership
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-2xl mx-auto">
            Ready to make a lasting impact? Fill out the form below and our
            partnerships team will contact you within 2-3 business days to discuss
            how we can work together.
          </p>
          <PartnerForm />
        </section>
      </Container>
    </div>
  );
}
