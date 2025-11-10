import { ICONS, IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

const Footer = () => {
  //   const legalLinks=[
  //     { label: "Terms & Conditions", path: "/terms-of-service" },
  //     { label: "Privacy Policy", path: "/privacy-policy" },
  // ]
  const legalLinks = [
    { label: "Terms & Conditions", path: "/" },
    { label: "Privacy Policy", path: "/" },
  ];
  const pymentIcons = [
    { src: ICONS.visaCard, alt: "visaCard" },
    { src: ICONS.amex, alt: "amex" },
    { src: ICONS.cirrus, alt: "cirrus" },
    { src: ICONS.maestro, alt: "maestro" },
    { src: ICONS.mastercard, alt: "mastercard" },
    { src: ICONS.unionPay, alt: "unionPay" },
  ];
  const footerLinks = [
    {
      heading: "Services",
      links: [
        { label: "Email Marketing", path: "/" },
        { label: "Campaigns", path: "/" },
        { label: "Branding", path: "/" },
      ],
    },
    {
      heading: "Furniture",
      links: [
        { label: "Home", path: "/" },
        { label: "Office", path: "/" },
        { label: "Electronics", path: "/" },
      ],
    },
    {
      heading: "Follow Us",
      links: [
        { label: "Instagram", path: "/" },
        { label: "FaceBook", path: "/" },
        { label: "Twitter", path: "/" },
      ],
    },
  ];
  return (
    <div className="bg-neutral-35 h-fit py-14 font-Satoshi">
      <Container>
        <div className="flex flex-col md:flex-row gap-9 md:justify-between">
          <div className="flex justify-start gap-16 ">
            {footerLinks?.map((item) => (
              <div key={item?.heading}>
                <h2 className="text-neutral-20 text-xl font-semibold leading-6">
                  {item?.heading}
                </h2>
                <div className="flex flex-col gap-3 mt-3">
                  {item?.links?.map((link) => (
                    <Link
                      key={link?.label}
                      href={link?.path}
                      className="text-neutral-05 leading-5 hover:underline hover:text-primary-05 transition duration-300"
                    >
                      {link?.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-neutral-20 text-xl font-semibold leading-6">
              We Accept
            </h2>
            <div className="grid grid-cols-6 md:grid-cols-3 gap-3 mt-3">
              {pymentIcons?.map((icon) => (
                <Fragment key={icon.alt}>
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    className="h-8 w-12 object-contain"
                  />
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-20">
          <Link href={"/"} className="py-3.5 px-0 flex items-center">
            <Image
              src={IMAGES.lokplaazaLogo}
              alt="lokplaaza"
              className="h-9 md:h-7 w-[109px] md:w-[83px]"
            />
          </Link>
          <p className="text-neutral-20">
            The advantage of hiring a workspace with us is that gives you
            comfortable service and all-around facilities
          </p>
          <div className="flex items-center justify-start mt-6">
            {legalLinks.map((link, index) => (
              <React.Fragment key={index}>
                <Link
                  href={link.path}
                  className="text-neutral-05 text-sm underline mr-3 underline-offset-4 hover:underline hover:text-primary-05 transition duration-300"
                >
                  {" "}
                  {link.label}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
