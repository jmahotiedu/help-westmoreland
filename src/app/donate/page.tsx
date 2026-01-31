import Container from "@/components/ui/Container";
import DonorboxEmbed from "@/components/donate/DonorboxEmbed";
import AdoptAFamily from "@/components/donate/AdoptAFamily";
import TrustBadges from "@/components/donate/TrustBadges";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate Now",
  description:
    "Your donation brings food, safety, and dignity back into homes that have lost everything. Support Hurricane Melissa relief efforts in Westmoreland, Jamaica.",
};

export default function DonatePage() {
  const donorboxCampaignId = process.env.NEXT_PUBLIC_DONORBOX_CAMPAIGN_ID;
  const gofundmeUrl =
    process.env.NEXT_PUBLIC_GOFUNDME_URL ||
    "https://www.gofundme.com/f/help-westmoreland";

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 sm:mb-6">
              Change a Family's Story Today
            </h1>

            <div className="prose prose-lg mx-auto text-left sm:text-center">
              <p className="text-base sm:text-xl text-gray-700">
                When a storm destroys your home, families don't just lose walls and a roof, they lose safety, normalcy, and the ability to protect the people they love.
              </p>
              <p className="text-xl text-gray-700">
                Right now in Westmoreland, mothers are trying to calm frightened
                children. Elders are waiting for medication. Families are sharing
                the little food they have left.
              </p>
              <p className="text-xl font-semibold text-primary-600">
                In moments like this, your generosity becomes someone's lifeline.
              </p>
            </div>
          </div>

          {/* Impact Chart */}
          <div className="bg-primary-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-display font-bold text-center mb-8">
              Your Impact
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { amount: "$25", impact: "Food for a family for a week" },
                { amount: "$50", impact: "Baby & hygiene supplies" },
                { amount: "$100", impact: "Bedding & emergency kits" },
                { amount: "$250", impact: "Home repair materials" },
                { amount: "$500", impact: "Restart a small business" },
                {
                  amount: "$1,000+",
                  impact: "Support an entire family's recovery",
                },
              ].map((item) => (
                <div
                  key={item.amount}
                  className="bg-white p-6 rounded-lg text-center shadow-sm"
                >
                  <div className="text-3xl font-bold text-accent-500 mb-2">
                    {item.amount}
                  </div>
                  <div className="text-gray-700">{item.impact}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Donation Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-display font-bold text-center mb-6">
              Make Your Donation
            </h2>

            {donorboxCampaignId ? (
              <div className="flex justify-center">
                <DonorboxEmbed
                  campaignId={donorboxCampaignId}
                  showRecurring={true}
                />
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-gray-600 mb-4">
                  To give by credit card, contact us and we’ll send you a secure link. You can also give by email or the options below.
                </p>
                <a
                  href="mailto:helpwestmoreland@gmail.com?subject=I%20want%20to%20donate%20to%20Help%20Westmoreland&body=Hello%20Help%20Westmoreland%20Team%2C%0A%0AI%20would%20like%20to%20make%20a%20donation%20to%20support%20your%20relief%20efforts%20in%20Westmoreland%2C%20Jamaica.%0A%0ADONATION%20DETAILS%3A%0A-%20Donation%20Amount%3A%20%24______%0A-%20Type%3A%20%5B%20%5D%20One-time%20%20%2F%20%20%5B%20%5D%20Monthly%0A%0AMY%20INFORMATION%3A%0A-%20Full%20Name%3A%20%0A-%20Email%3A%20%0A%0APlease%20send%20me%20a%20secure%20payment%20link%20or%20instructions.%0A%0AThank%20you!"
                  className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-3 rounded-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
                >
                  Email Us to Donate
                </a>
              </div>
            )}
          </div>

          {/* Trust Badges */}
          <TrustBadges className="mb-12" />

          {/* Recurring Donation Benefits */}
          <div className="bg-accent-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-display font-bold text-center mb-6">
              Why Give Monthly?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">📈</div>
                <h3 className="font-semibold mb-2">Sustainable Impact</h3>
                <p className="text-sm text-gray-700">
                  Monthly donations help us plan long-term recovery programs and
                  support families consistently.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⏰</div>
                <h3 className="font-semibold mb-2">Hassle-Free Giving</h3>
                <p className="text-sm text-gray-700">
                  Set it once and make a difference every month without thinking
                  about it.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💝</div>
                <h3 className="font-semibold mb-2">Lower Admin Costs</h3>
                <p className="text-sm text-gray-700">
                  Recurring donations reduce processing costs, meaning more of
                  your gift goes directly to families.
                </p>
              </div>
            </div>
          </div>

          {/* Adopt-A-Family Section */}
          <div className="mb-12">
            <AdoptAFamily />
          </div>

          {/* Other Ways to Give */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-display font-bold text-center mb-6">
              Other Ways to Give
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">
                  📦 Donate Goods
                </h3>
                <p className="text-gray-700 mb-3">
                  Send essential supplies directly to families in need.
                </p>
                <a
                  href="/help#goods"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Learn More →
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">
                  🤝 Volunteer
                </h3>
                <p className="text-gray-700 mb-3">
                  Join our ground team in Westmoreland to help directly.
                </p>
                <a
                  href="/help#volunteer"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Get Involved →
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">
                  🏢 Corporate Partnerships
                </h3>
                <p className="text-gray-700 mb-3">
                  Partner with us for employee matching or corporate giving.
                </p>
                <a
                  href="/partner"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Partner With Us →
                </a>
              </div>
            </div>
          </div>

          {/* Additional Giving Options */}
          <div className="border-t pt-12">
            <h2 className="text-2xl font-display font-bold text-center mb-8">
              More Ways to Give
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Basic food supplies & in-kind</h3>
                <p className="text-gray-700 mb-4">
                  Basic food supplies, clothing, and other essentials go directly to families. See <a href="/help#goods" className="text-primary-600 hover:text-primary-700 font-medium">How to Help</a> for drop-off details.
                </p>
              </div>
              <div className="bg-accent-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">GoFundMe</h3>
                <p className="text-gray-700 mb-4">
                  Donate via our GoFundMe campaign.
                </p>
                <a
                  href={gofundmeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-4 py-2 rounded-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                >
                  Donate on GoFundMe
                </a>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Interac e-Transfer</h3>
                <p className="text-gray-700 mb-4">
                  Send Interac e-Transfer to: helpwestmoreland@gmail.com. <a href="mailto:helpwestmoreland@gmail.com?subject=Interac%20e-Transfer%20Donation&body=Hello%20Help%20Westmoreland%20Team%2C%0A%0AI%20would%20like%20to%20send%20an%20Interac%20e-Transfer%20donation.%0A%0ADONATION%20DETAILS%3A%0A-%20Amount%3A%20%24______%0A%0AMY%20INFORMATION%3A%0A-%20Full%20Name%3A%20%0A-%20Email%3A%20%0A%0APlease%20confirm%20the%20e-Transfer%20details%20and%20any%20security%20question%2Fanswer%20if%20needed.%0A%0AThank%20you!" className="text-primary-600 hover:text-primary-700 font-medium">Email us</a> for details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
