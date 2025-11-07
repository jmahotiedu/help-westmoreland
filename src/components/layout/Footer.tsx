import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-4">
              Help Westmoreland
            </h3>
            <p className="text-sm">
              Supporting families in Westmoreland, Jamaica with relief,
              rebuilding, and recovery after Hurricane Melissa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-white transition">
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/transparency"
                  className="hover:text-white transition"
                >
                  Transparency
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/donate" className="hover:text-white transition">
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/help#volunteer"
                  className="hover:text-white transition"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/partner" className="hover:text-white transition">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:helpwestmoreland@gmail.com"
                  className="hover:text-white transition"
                >
                  helpwestmoreland@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="https://instagram.com/helpwestmoreland"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com/@helpwestmoreland"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                TikTok
              </a>
              <a
                href="https://facebook.com/helpwestmoreland"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {currentYear} Help Westmoreland. All rights reserved.</p>
          <p className="mt-2">
            100% of donations go directly to relief efforts.
          </p>
        </div>
      </div>
    </footer>
  );
}
