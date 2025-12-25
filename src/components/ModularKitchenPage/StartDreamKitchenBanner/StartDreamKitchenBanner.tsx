"use client";
import Link from "next/link";
import Container from "../../Reusable/Container/Container";
import { motion } from "framer-motion";
import { ICONS } from "@/assets";
import Image from "next/image";

const StartDreamKitchenBanner = () => {
  return (
    <div className="relative overflow-hidden bg-linear-to-r from-success-50 via-white to-success-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 border-2 border-success-200 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 border-2 border-success-200 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative py-12 md:py-16"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Text Content */}
            <div className="text-center lg:text-left max-w-2xl">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 leading-tight mb-4">
                Start Planning Your{" "}
                <span className="text-success-600 relative">
                  Dream Kitchen
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-2 text-success-200"
                    viewBox="0 0 200 10"
                  >
                    <path
                      d="M0,5 Q100,15 200,5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
              </h3>
              <p className="text-lg text-neutral-600 mb-6 max-w-xl">
                Get expert guidance and personalized designs for your perfect
                kitchen. Book a free consultation today!
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8 text-sm font-medium text-neutral-700">
                <span>
                  Free Design Consultation
                </span>
                <span>
                  30-Day Installation
                </span>
                <span>
                  Post-Installation Support
                </span>
              </div>
            </div>

            {/* Interactive CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Link href="/" className="block">
                {/* Main Button */}
                <div className="relative bg-success-05 text-white px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  <div className="relative flex items-center justify-center gap-4">
                    <span className="text-xl font-semibold">
                      Start Planning Now
                    </span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="flex items-center justify-center"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Image
                          src={ICONS.rightArrow}
                          alt="right-arrow-lokplaaza"
                          className="w-6 h-6"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Decorative Kitchen Elements */}
          <div className="hidden lg:flex absolute -bottom-4 left-10 gap-6 opacity-10">
            {["Cabinet", "Countertop", "Sink", "Hob"].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-2 text-success-600"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-2 h-2 rounded-full bg-current"></div>
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default StartDreamKitchenBanner;
