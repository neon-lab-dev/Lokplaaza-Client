"use client";
import Container from "@/components/Reusable/Container/Container";
import BookConsultationForm from "../BookConsultationForm/BookConsultationForm";

const WhyChooseLokplaaza = () => {
  const features = [
    {
      title: "Get an Instant Quote Now",
      desc: "Transparent pricing with no hidden costs",
    },
    {
      title: "Designs Personalized to your Needs",
      desc: "Custom solutions for your unique space",
    },
    {
      title: "Delivery & Installation Within 30 Days",
      desc: "Quick and hassle-free process",
    },
    {
      title: "Post Installation Support",
      desc: "Dedicated customer care team",
    },
  ];

  return (
    <Container>
      <div className="py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Content */}
          <div className="space-y-10">
            {/* Header */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-success-05 uppercase tracking-wide mb-3">
                  Why Choose Us
                </h3>
                <h1 className="text-3xl md:text-4xl font-bold text-neutral-05 leading-tight">
                  Why Lokplaaza Modular?
                </h1>
              </div>
              <p className="text-lg text-neutral-20 leading-relaxed">
                We Design{" "}
                <span className="font-semibold text-success-05">
                  Tailor-made Solutions
                </span>{" "}
                for Your Home
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-xl border border-neutral-15 bg-white hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-success-05/10 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-success-05 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-neutral-05 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-neutral-20 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="pt-6 border-t border-neutral-15">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-success-05 mb-1">
                    20,000+
                  </div>
                  <div className="text-sm text-neutral-20">Happy Homes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-success-05 mb-1">
                    500+
                  </div>
                  <div className="text-sm text-neutral-20">Designers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-success-05 mb-1">
                    20
                  </div>
                  <div className="text-sm text-neutral-20">Years Warranty*</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-success-05 mb-1">
                    Wide
                  </div>
                  <div className="text-sm text-neutral-20">
                    Colors & Finishes
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
            <BookConsultationForm />
        </div>
      </div>
    </Container>
  );
};

export default WhyChooseLokplaaza;
