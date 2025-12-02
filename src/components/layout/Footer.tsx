import Link from "next/link";
import Container from "@/components/ui/Container";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/helpwestmoreland",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643.012 2.987.06 4.043.049 1.064.218 1.791.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm0 2.225h-.63c-2.098.007-2.437.026-3.465.076-.967.049-1.6.22-2.038.42a2.677 2.677 0 00-1.018 1.018c-.2.437-.371 1.07-.42 2.038-.05 1.028-.069 1.367-.076 3.465L6 10.845v-.63c.007-2.098.026-2.437.076-3.465.049-.967.22-1.6.42-2.038a2.677 2.677 0 011.018-1.018c.437-.2 1.07-.371 2.038-.42 1.028-.05 1.367-.069 3.465-.076h.63c2.098.007 2.437.026 3.465.076.967.049 1.6.22 2.038.42a2.677 2.677 0 011.018 1.018c.2.437.371 1.07.42 2.038.05 1.028.069 1.367.076 3.465v.63c-.007 2.098-.026 2.437-.076 3.465-.049.967-.22 1.6-.42 2.038a2.677 2.677 0 01-1.018 1.018c-.437.2-1.07.371-2.038.42-1.028.05-1.367.069-3.465.076h-.63zM12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.5a3 3 0 110-6 3 3 0 010 6z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@helpwestmoreland",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/helpwestmoreland",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
] as const;

function FooterLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <Link
      href={href}
      className={`inline-block py-2 -my-2 min-h-[44px] flex items-center hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded touch-manipulation ${className}`}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gray-900 text-gray-300 pb-[env(safe-area-inset-bottom)]"
      role="contentinfo"
    >
      <Container>
        <div className="py-10 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* About */}
            <div className="md:col-span-1">
              <h2 className="text-white font-display font-bold text-lg mb-4">
                Help Westmoreland
              </h2>
              <p className="text-sm leading-relaxed">
                Supporting families in Westmoreland, Jamaica with relief,
                rebuilding, and recovery after Hurricane Melissa.
              </p>
            </div>

            {/* Quick Links */}
            <nav aria-label="Footer quick links">
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm" role="list">
                <li><FooterLink href="/about">About Us</FooterLink></li>
                <li><FooterLink href="/programs">Programs</FooterLink></li>
                <li><FooterLink href="/gallery">Gallery</FooterLink></li>
                <li><FooterLink href="/transparency">Transparency</FooterLink></li>
                <li><FooterLink href="/faq">FAQ</FooterLink></li>
              </ul>
            </nav>

            {/* Get Involved */}
            <nav aria-label="Get involved">
              <h3 className="text-white font-semibold mb-4">Get Involved</h3>
              <ul className="space-y-2 text-sm" role="list">
                <li><FooterLink href="/donate">Donate</FooterLink></li>
                <li><FooterLink href="/help#volunteer">Volunteer</FooterLink></li>
                <li><FooterLink href="/partner">Partner With Us</FooterLink></li>
              </ul>
            </nav>

            {/* Contact & Social */}
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <p className="text-sm mb-4">
                <FooterLink href="mailto:helpwestmoreland@gmail.com?subject=Question%20about%20Help%20Westmoreland">
                  helpwestmoreland@gmail.com
                </FooterLink>
              </p>
              <ul className="flex gap-2 sm:gap-4" role="list" aria-label="Social media">
                {socialLinks.map(({ name, href, icon }) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] text-gray-400 hover:text-white transition rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 touch-manipulation"
                      aria-label={`Follow us on ${name}`}
                    >
                      {icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-8 text-sm text-center text-gray-400">
            <p>&copy; {currentYear} Help Westmoreland. All rights reserved.</p>
            <p className="mt-2">
              100% of donations go directly to relief efforts.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
