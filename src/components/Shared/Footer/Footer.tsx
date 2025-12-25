import { ICONS, IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Reusable/Button/Button";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const legalLinks = [
    { label: "Terms & Conditions", path: "/" },
    { label: "Privacy Policy", path: "/" },
  ];

  const paymentIcons = [
    { src: ICONS.visaCard, alt: "visaCard" },
    { src: ICONS.amex, alt: "amex" },
    { src: ICONS.cirrus, alt: "cirrus" },
    { src: ICONS.maestro, alt: "maestro" },
    { src: ICONS.mastercard, alt: "mastercard" },
    { src: ICONS.unionPay, alt: "unionPay" },
  ];

  const footerLinks = [
    {
      heading: "Furniture",
      links: [
        { label: "Home Furniture", path: "/" },
        { label: "Office Furniture", path: "/" },
        { label: "Modular Kitchen", path: "/" },
        { label: "Wardrobe", path: "/" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", path: "/" },
        { label: "Contact", path: "/" },
        { label: "Careers", path: "/" },
        { label: "Blog", path: "/" },
      ],
    },
    {
      heading: "Follow Us",
      links: [
        { label: "Instagram", path: "/", icon: FaInstagram },
        { label: "Facebook", path: "/", icon: FaFacebookF },
        { label: "Twitter", path: "/", icon: FaTwitter },
        { label: "LinkedIn", path: "/", icon: FaLinkedinIn },
      ],
    },
  ];

  return (
    <footer className="bg-linear-to-b from-white to-neutral-50 border-t border-neutral-100">
      {/* Newsletter Section */}
      <div className="bg-success-50 border-y border-success-100">
        <Container>
          <div className="py-10 md:py-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold text-neutral-800 mb-2">
                  Stay Updated with Latest Designs
                </h3>
                <p className="text-neutral-600">
                  Subscribe to our newsletter for exclusive offers and design
                  tips
                </p>
              </div>
              <div className="flex gap-3 w-full lg:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 lg:w-80 px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-success-500 focus:border-transparent"
                />
                <Button label="Subscribe" className="rounded-lg" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-12 md:py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src={IMAGES.lokplaazaLogo}
                  alt="Lokplaaza"
                  width={160}
                  height={45}
                  className="h-11 w-auto"
                />
              </Link>
              <p className="text-neutral-600 leading-relaxed max-w-lg mb-6">
                The advantage of hiring a workspace with us is that gives you
                comfortable service and all-around facilities. We provide
                premium furniture solutions for modern living.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-success-100 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-success-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="text-neutral-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-success-100 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-success-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-neutral-700">hello@lokplaaza.com</span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            {footerLinks.map((section) => (
              <div key={section.heading} className="space-y-4">
                <h3 className="text-neutral-800 font-semibold text-lg mb-4 flex items-center gap-2">
                  {section.heading}
                  {section.heading === "Follow Us" && (
                    <span className="w-2 h-2 rounded-full bg-success-500"></span>
                  )}
                </h3>
                <ul className="space-y-3">
                  {section?.links.map((link) => {
                    const Icon = "icon" in link ? link.icon : undefined;

                    return (
                      <li key={link.label}>
                        <Link
                          href={link.path}
                          className="text-neutral-600 hover:text-success-600 transition-colors duration-200 flex items-center gap-2 group"
                        >
                          {Icon && (
                            <Icon className="opacity-70 group-hover:text-success-600 transition-colors" />
                          )}

                          <span className="group-hover:translate-x-1 transition-transform">
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Payment & Trust Section */}
          <div className="border-t border-neutral-100 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div>
                <h4 className="text-neutral-700 font-medium mb-3">We Accept</h4>
                <div className="flex flex-wrap gap-3">
                  {paymentIcons.map((icon) => (
                    <div
                      key={icon.alt}
                      className="bg-white border border-neutral-200 p-2 rounded-lg hover:border-success-300 transition-colors duration-200"
                    >
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        width={45}
                        height={30}
                        className="h-6 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-success-600">
                    24/7
                  </div>
                  <div className="text-sm text-neutral-600">Support</div>
                </div>
                <div className="h-8 w-px bg-neutral-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success-600">
                    100%
                  </div>
                  <div className="text-sm text-neutral-600">Secure</div>
                </div>
                <div className="h-8 w-px bg-neutral-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success-600">30</div>
                  <div className="text-sm text-neutral-600">Day Returns</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-neutral-100 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-neutral-500 text-sm">
                © {new Date().getFullYear()} Lokplaaza. All rights reserved.
              </div>

              <div className="flex items-center gap-6">
                {legalLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.path}
                    className="text-neutral-600 hover:text-success-600 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-success-600 hover:bg-success-700 text-success-05 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-50 group cursor-pointer"
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5 group-hover:-translate-y-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
