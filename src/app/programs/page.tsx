import Container from "@/components/ui/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Programs",
  description:
    "Relief, Rebuild, and Recovery programs supporting families in Westmoreland, Jamaica.",
};

export default function ProgramsPage() {
  return (
    <div className="py-16">
      <Container>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-center text-gray-900 mb-4">
          RELIEF | REBUILD | RECOVERY
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Our three-phase approach to supporting Westmoreland families
        </p>

        {/* Relief Section */}
        <section id="relief" className="mb-16 scroll-mt-24">
          <div className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-3xl font-display font-bold text-primary-700 mb-4">
              RELIEF: Immediate Support When It Matters Most
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We deliver essential items to stabilize families after disaster:
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                Non-perishable food
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                Clean drinking water
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                Clothing
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                Baby supplies
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                Toiletries & hygiene items
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                Flashlights, batteries, emergency tools
              </li>
            </ul>
            <p className="mt-6 text-lg font-semibold text-gray-900">
              Relief is the first step toward restoring safety and hope.
            </p>
          </div>
        </section>

        {/* Rebuild Section */}
        <section id="rebuild" className="mb-16 scroll-mt-24">
          <div className="bg-accent-50 rounded-lg p-8">
            <h2 className="text-3xl font-display font-bold text-accent-600 mb-4">
              REBUILD: Restoring Homes, Schools & Community Spaces
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We help families and communities rebuild with:
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-accent-600 mr-2">✓</span>
                Roofing materials
              </li>
              <li className="flex items-start">
                <span className="text-accent-600 mr-2">✓</span>
                Construction supplies
              </li>
              <li className="flex items-start">
                <span className="text-accent-600 mr-2">✓</span>
                Bedding & household essentials
              </li>
              <li className="flex items-start">
                <span className="text-accent-600 mr-2">✓</span>
                Support for damaged schools, churches, community centers
              </li>
            </ul>
            <p className="mt-6 text-lg font-semibold text-gray-900">
              Rebuilding is more than fixing structures, it's restoring dignity and stability.
            </p>
          </div>
        </section>

        {/* Recovery Section */}
        <section id="recovery" className="scroll-mt-24">
          <div className="bg-green-50 rounded-lg p-8">
            <h2 className="text-3xl font-display font-bold text-green-700 mb-4">
              RECOVERY: Long-Term Healing and Stability
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Recovery continues long after the cameras are gone. We support:
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Wellness checks & emotional support
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                School support: uniforms, meals, supplies
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Small business restart assistance
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Farming support for agricultural families
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Livelihood programs
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Disaster-preparedness education
              </li>
            </ul>
            <p className="mt-6 text-lg font-semibold text-gray-900">
              We walk with Westmoreland for as long as it takes.
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
}
