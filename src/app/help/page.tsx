import Container from "@/components/ui/Container";
import VolunteerForm from "@/components/forms/VolunteerForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Help",
  description:
    "Support Westmoreland families through donations, volunteering, or partnerships. Every contribution makes a difference.",
};

export default function HelpPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-center text-gray-900 mb-4 sm:mb-6">
          How to Help
        </h1>

        <p className="text-base sm:text-xl text-center text-gray-700 max-w-3xl mx-auto mb-10 sm:mb-16">
          Rebuilding Westmoreland takes all of us. Together, through giving,
          volunteering, and partnership, we can bring relief, dignity, and hope
          to families in need.
        </p>

        {/* Donate Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-6">
            Make a Monetary Donation
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Your support funds critical needs: food & medicine, home repairs,
            school programs, entrepreneurship support, and emergency kits.
          </p>
          <a
            href="/donate"
            className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            Donate Now
          </a>
        </section>

        {/* Donate Goods Section */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-display font-bold mb-6">
            Donate Goods
          </h2>
          <p className="text-lg text-gray-700 mb-6">Families urgently need:</p>
          <ul className="grid md:grid-cols-2 gap-4 mb-6">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Clothing</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Food (non-perishable)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Baby items</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Toiletries</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Cleaning supplies</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Bottled water</span>
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            <strong>Drop-off locations:</strong> Contact us for current
            locations
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-2.5 rounded-lg transition"
          >
            Contact for Drop-off Locations
          </a>
        </section>

        {/* Volunteer Section */}
        <section id="volunteer" className="scroll-mt-24">
          <h2 className="text-3xl font-display font-bold mb-6">Volunteer</h2>
          <p className="text-lg text-gray-700 mb-8">
            Your hands, time, and support can help rebuild Westmoreland. One family, one home, one act of kindness at a time. Volunteers are the heart of our mission, you bring relief, stability, and hope to communities that need it most.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Volunteer Opportunities */}
            <div className="bg-primary-50 rounded-lg p-8">
              <h3 className="text-2xl font-display font-bold mb-6">
                Volunteer Opportunities
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-lg">❤️</span>
                  <div>
                    <strong>Counseling:</strong> Provide emotional support and therapy services
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-lg">📚</span>
                  <div>
                    <strong>Education:</strong> Support school rebuilding and provide back to school supplies
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-lg">🌐</span>
                  <div>
                    <strong>Social media & Digital presence:</strong> Help with social media, design, or administration
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-lg">💰</span>
                  <div>
                    <strong>Fundraising & donor outreach:</strong> Help raise critical funds and engage donors
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-lg">🤝</span>
                  <div>
                    <strong>Building credible partnerships:</strong> With businesses, churches, and community organizations
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-lg">🤝</span>
                  <div>
                    <strong>Sorting, Packing & Delivery:</strong> Help organize donations and prepare relief packages
                  </div>
                </li>
              </ul>
            </div>

            {/* What to Expect */}
            <div className="bg-accent-50 rounded-lg p-8">
              <h3 className="text-2xl font-display font-bold mb-6">
                What to Expect
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Orientation:</strong> All volunteers receive training
                  on our mission, safety protocols, and how to best support
                  families.
                </p>
                <p>
                  <strong>Flexible Schedule:</strong> We work with your availability, whether you can volunteer for just a few hours or on an ongoing basis.
                </p>
                <p>
                  <strong>Community Impact:</strong> You'll see firsthand how
                  your work brings relief and hope to families rebuilding their
                  lives.
                </p>
                <p>
                  <strong>Support:</strong> Our team is with you every step of
                  the way to ensure a meaningful volunteer experience.
                </p>
              </div>
            </div>
          </div>

          {/* Volunteer Application Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-display font-bold mb-6">
              Volunteer Application
            </h3>
            <p className="text-gray-700 mb-6">
              Ready to make a difference? Fill out the form below and our team will contact you to discuss opportunities.
            </p>
            <VolunteerForm />
          </div>
        </section>
      </Container>
    </div>
  );
}
