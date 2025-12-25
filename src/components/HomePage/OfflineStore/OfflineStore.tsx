"use client";
import { ICONS } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import { motion } from "framer-motion";

const OfflineStore = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Content & Locations */}
          <div className="w-full lg:w-2/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-neutral-05 text-sm font-medium mb-4">
                VISIT OUR STUDIO
              </span>

              <Heading
                heading="LOKPLAAZA STUDIO - OFFLINE SHOP"
                title="Visit Lokplaaza Studio"
                alignClass="text-left"
              />

              <p className="text-lg text-neutral-600 mt-6 mb-8 leading-relaxed">
                Want to touch, feel, and see the details in person? Step into
                Lokplaaza Studio, our offline experience center. With accurate
                location details for your city, you can explore our curated
                collections and get personalized recommendations from our design
                experts.
              </p>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  label="Find Directions"
                  textColor="text-white"
                  icon={ICONS.rightArrow}
                  onClick={() => {
                    // Open Google Maps in new tab
                    window.open(
                      "https://www.google.com/maps/place/Lokplaza+Furnitures+-+Home+Furniture+%26+Office+Furniture/@26.2037232,78.1605614,15z/data=!4m6!3m5!1s0x3976c50628e37413:0xbfa4d1a1e7cbbd4f!8m2!3d26.2037897!4d78.1605051!16s%2Fg%2F11g3z2318x?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
                      "_blank"
                    );
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Google Map & Store Image */}
          <div className="w-full lg:w-3/5">
            <div className="space-y-6">
              {/* Google Map Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden shadow-xl h-80 md:h-96"
              >
                {/* Google Maps Iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2237512445936!2d77.20931667524272!3d28.50219607573377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1c5d0b4a1c3%3A0x1b6c4f5d9e6f5f5f!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokplaaza Studio Location"
                  className="absolute inset-0"
                />

                {/* Map Overlay Controls */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-success-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium text-neutral-700">
                      View on Maps
                    </span>
                  </div>
                </div>

                {/* Location Pin */}
                <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="animate-bounce">
                    <div className="relative">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OfflineStore;
