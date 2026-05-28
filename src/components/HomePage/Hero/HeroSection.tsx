"use client";
import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import Navbar from "@/components/Shared/Navbar/Navbar";
import OfferAnnouncement from "@/components/Shared/OfferAnnouncement/OfferAnnouncement";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";

const HeroSection = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [selected, setSelected] = useState<string>("primary");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const colors = [
    { id: "primary", bg: "primary-05" },
    { id: "success", bg: "success-05" },
    { id: "secondary", bg: "secondary-05" },
  ];

  // Function to get next color
  const getNextColor = useCallback((currentColor: string) => {
    const currentIndex = colors.findIndex(color => color.id === currentColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    return colors[nextIndex].id;
  }, [colors]);

  // Function to auto-change color
  const startAutoChange = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      setSelected((prevSelected) => getNextColor(prevSelected));
    }, 2500);
  }, [getNextColor]);

  // Handle manual color selection
  const handleColorClick = (colorId: string) => {
    setSelected(colorId);
    
    // Reset the interval when user manually clicks
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Restart auto-change after manual click
    startAutoChange();
  };

  const handleNavigation = (sectionId: string) => {
    // If we're not on home page, navigate to home page with section info
    if (pathname !== "/") {
      sessionStorage.setItem("scrollToSection", sectionId);
      router.push("/");
      return;
    }

    // If we're already on home page, scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Check for stored section to scroll to when home page loads
  useEffect(() => {
    if (pathname === "/") {
      const sectionToScroll = sessionStorage.getItem("scrollToSection");
      if (sectionToScroll) {
        // Small delay to ensure DOM is fully loaded
        setTimeout(() => {
          const element = document.getElementById(sectionToScroll);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            // Clear the stored section after scrolling
            sessionStorage.removeItem("scrollToSection");
          }
        }, 100);
      }
    }
  }, [pathname]);

  // Start auto-change on component mount
  useEffect(() => {
    startAutoChange();
    
    // Cleanup interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startAutoChange]);

  return (
    <div className="relative font-Satoshi">
      {/* Offer banner */}
      <OfferAnnouncement />

      <Image
        src={
          selected === "primary"
            ? IMAGES.heroImgYellow
            : selected === "success"
            ? IMAGES.heroImgGreen
            : IMAGES.heroImgRed
        }
        alt="hero section"
        fill
        priority
        className="hidden md:block -z-10 object-cover transition-opacity duration-500"
      />

      {/* Mobile background image */}
      <Image
        src={
          selected === "primary"
            ? IMAGES.heroImgYellow
            : selected === "success"
            ? IMAGES.heroImgGreen
            : IMAGES.heroImgRed
        }
        alt="hero section small"
        fill
        priority
        className="block md:hidden object-cover -z-10 transition-opacity duration-500"
      />

      <Container>
        <Navbar />
        <div className="flex flex-col items-center justify-center text-center min-h-screen py-10">
          <div className="space-y-6 mt-10">
            <h1 className="text-neutral-25 text-3xl md:text-[61px] font-medium max-w-[1128px]">
              Make Your Interior More Minimalistic & Modern
            </h1>
            <p className="text-neutral-30 text-base md:text-2xl lg:text-3xl font-light leading-8">
              Turn your room with Panto into a lot more minimalist and modern
              with ease and speed
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center gap-10">
            {/* Color selectors */}
            <div className="flex items-center justify-center gap-2.5 bg-neutral-05 rounded-full py-2 px-4 shadow-lg mb-80">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => handleColorClick(color.id)}
                  className={`size-10 rounded-full border-2 cursor-pointer transition-all duration-200 bg-${
                    color.bg
                  } ${
                    selected === color.id
                      ? "border-white scale-110"
                      : "border-neutral-05 scale-100"
                  }`}
                  aria-label={`Select ${color.id} color theme`}
                ></button>
              ))}
            </div>

            {/* Button */}
            <Button 
              onClick={() => handleNavigation("categories")} 
              label="Browse Bestsellers" 
              icon={ICONS.rightArrow} 
            />
          </div>
        </div>
      </Container>
      <OfferAnnouncement />
    </div>
  );
};

export default HeroSection;