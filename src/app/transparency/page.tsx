import Container from "@/components/ui/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparency",
  description:
    "100% of donations go directly to relief. See exactly where your contributions make an impact.",
};

export default function TransparencyPage() {
  return (
    <div className="py-16">
      <Container>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-center text-gray-900 mb-8">
          Where Your Donations Go
        </h1>

        <div className="max-w-4xl mx-auto">
          {/* Funding Areas */}
          <div className="bg-primary-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
              Your support funds:
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-3">•</span>
                <div>
                  <strong>Food & Essentials:</strong> Emergency meals, water,
                  hygiene kits
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-3">•</span>
                <div>
                  <strong>Home Repair Materials:</strong> Roofing, lumber,
                  tarps, bedding, tools
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-3">•</span>
                <div>
                  <strong>Community Rebuilding:</strong> Schools, churches,
                  community spaces
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-3">•</span>
                <div>
                  <strong>Small Business Support:</strong> Help shop owners, vendors and other entrepreneurs restart income
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-3">•</span>
                <div>
                  <strong>Farming Assistance:</strong> Seeds, tools, livestock
                  replacements
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-3">•</span>
                <div>
                  <strong>Adopt-A-Family:</strong> Direct, personalized support
                  for the hardest-hit families
                </div>
              </li>
            </ul>
          </div>

          {/* Our Promise */}
          <div className="bg-white border-2 border-primary-200 rounded-lg p-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
              Our Promise
            </h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-center">
                <span className="text-green-600 text-2xl mr-3">✓</span>
                No salaries
              </li>
              <li className="flex items-center">
                <span className="text-green-600 text-2xl mr-3">✓</span>
                No political ties
              </li>
              <li className="flex items-center">
                <span className="text-green-600 text-2xl mr-3">✓</span>
                No hidden fees
              </li>
              <li className="flex items-center">
                <span className="text-green-600 text-2xl mr-3">✓</span>
                100% transparency
              </li>
              <li className="flex items-center">
                <span className="text-green-600 text-2xl mr-3">✓</span>
                Photos, videos & receipts shared regularly
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-xl text-gray-700 mb-6">
              See our impact in action through regular updates on social media
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://instagram.com/helpwestmoreland"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg transition"
              >
                Follow on Instagram
              </a>
              <a
                href="/donate"
                className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-3 rounded-lg transition"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
