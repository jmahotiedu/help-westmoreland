import Container from "@/components/ui/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about Help Westmoreland, donations, volunteering, and our relief efforts.",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "How do I know this is real?",
      answer:
        "We provide regular updates with photos and videos on our social media channels (Instagram, TikTok, Facebook). We share receipts and documentation of our relief distributions. You can follow our work in real-time and see the direct impact of donations.",
    },
    {
      question: "Where do donations go?",
      answer:
        "100% of monetary donations go directly to relief efforts. We purchase food, water, building materials, school supplies, and support small business recovery. No salaries are paid from donations. See our Transparency page for full details.",
    },
    {
      question: "What is Adopt-A-Family?",
      answer:
        "Adopt-A-Family allows donors to provide personalized, direct support to a verified family in need. You'll receive updates about your adopted family's progress and see exactly how your contribution helps them rebuild their lives. Contact us for more information about available families.",
    },
    {
      question: "How can I volunteer internationally?",
      answer:
        "International volunteers can help remotely by organizing donation drives, spreading awareness on social media, fundraising in their communities, or providing professional services (graphic design, accounting, etc.). Visit our How to Help page and fill out the volunteer form to get started.",
    },
    {
      question: "Is this tax-deductible?",
      answer:
        "Tax deductibility depends on your country of residence and our registration status. We are working toward formal charity registration. Contact us for specific questions about tax receipts in your jurisdiction.",
    },
    {
      question: "Can I donate goods instead of money?",
      answer:
        "Yes! We accept donations of clothing, food, baby items, toiletries, cleaning supplies, and bottled water. Contact us to find current drop-off locations or to arrange larger donations.",
    },
    {
      question: "How can my organization partner with you?",
      answer:
        "We welcome partnerships with businesses, churches, schools, and community organizations. Partners can sponsor specific projects, organize donation drives, provide volunteer teams, or offer logistics support. Visit our Partner With Us page or email us to discuss opportunities.",
    },
    {
      question: "How do you verify families in need?",
      answer:
        "We work directly with local community leaders and conduct on-the-ground assessments. Our team visits affected areas, documents damage, and verifies family situations before providing support. We prioritize the most vulnerable families, including those with young children, elderly members, or medical needs.",
    },
  ];

  return (
    <div className="py-16">
      <Container>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions
        </h1>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
              >
                <h2 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {faq.question}
                </h2>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Still have questions? */}
          <div className="mt-12 bg-primary-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-700 mb-6">
              We're here to help. Reach out to us and we'll get back to you as
              soon as possible.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
