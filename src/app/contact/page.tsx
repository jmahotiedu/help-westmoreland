import Container from "@/components/ui/Container";
import ContactForm from "@/components/forms/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Help Westmoreland. We're here to answer your questions and connect you with our relief efforts.",
};

export default function ContactPage() {
  return (
    <div className="py-16">
      <Container>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-center text-gray-900 mb-8">
          Get In Touch
        </h1>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {/* Email */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span>📧</span> Email
                    </h3>
                    <a
                      href="mailto:helpwestmoreland@gmail.com"
                      className="text-primary-600 hover:text-primary-700 text-lg"
                    >
                      helpwestmoreland@gmail.com
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      We respond within 24-48 hours
                    </p>
                  </div>

                  {/* Social Media */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span>📱</span> Social Media
                    </h3>
                    <div className="space-y-2">
                      <div>
                        <a
                          href="https://instagram.com/helpwestmoreland"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 flex items-center gap-2"
                        >
                          Instagram: @helpwestmoreland
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://tiktok.com/@helpwestmoreland"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 flex items-center gap-2"
                        >
                          TikTok: @helpwestmoreland
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://facebook.com/helpwestmoreland"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 flex items-center gap-2"
                        >
                          Facebook: @helpwestmoreland
                        </a>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      DM us for the fastest response
                    </p>
                  </div>

                  {/* Urgent Matters */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      ⚡ Urgent Matters
                    </h3>
                    <p className="text-sm text-gray-700">
                      For immediate assistance, contact us through Instagram DM
                      for the fastest response.
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours (optional) */}
              <div className="bg-primary-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  📍 Based in Westmoreland, Jamaica
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  We're on the ground every day helping families rebuild their
                  lives. Our team typically responds to inquiries within 24-48
                  hours.
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Response Times:</strong>
                  <br />
                  Weekdays: Within 24 hours
                  <br />
                  Weekends: Within 48 hours
                </p>
              </div>
            </div>
          </div>

          {/* Quick Action Links */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <a
              href="/donate"
              className="block bg-accent-500 hover:bg-accent-600 text-white text-center font-semibold px-6 py-4 rounded-lg transition"
            >
              💝 Make a Donation
            </a>
            <a
              href="/help#volunteer"
              className="block bg-primary-500 hover:bg-primary-600 text-white text-center font-semibold px-6 py-4 rounded-lg transition"
            >
              🤝 Volunteer With Us
            </a>
            <a
              href="/partner"
              className="block bg-green-500 hover:bg-green-600 text-white text-center font-semibold px-6 py-4 rounded-lg transition"
            >
              🏢 Partner With Us
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
