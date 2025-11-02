"use client";

import React from "react";

import {

  Mail,

  Phone,

  MapPin,

  Facebook,

  Instagram,

  Twitter,

  Dribbble,

  Globe,

} from "lucide-react";

import {FooterBackgroundGradient, TextHoverEffect} from "@/components/ui/hover-footer";



function HoverFooter() {

  // Footer link data

  const footerLinks = [

    {

      title: "About Us",

      links: [

        { label: "Company History", href: "#" },

        { label: "Meet the Team", href: "#" },

        { label: "Employee Handbook", href: "#" },

        { label: "Careers", href: "#" },

      ],

    },

    {

      title: "Helpful Links",

      links: [

        { label: "FAQs", href: "#" },

        { label: "Support", href: "#" },

        {

          label: "Live Chat",

          href: "#",

          pulse: true,

        },

      ],

    },

  ];



  // Contact info data

  const contactInfo = [

    {

      icon: <Mail size={18} className="text-[#3ca2fa]" />,

      text: "hello@animatedapp.com",

      href: "mailto:hello@animatedapp.com",

    },

    {

      icon: <Phone size={18} className="text-[#3ca2fa]" />,

      text: "+1 (555) 123-4567",

      href: "tel:+15551234567",

    },

    {

      icon: <MapPin size={18} className="text-[#3ca2fa]" />,

      text: "New York, USA",

    },

  ];



  // Social media icons

  const socialLinks = [

    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },

    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },

    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },

    { icon: <Dribbble size={20} />, label: "Dribbble", href: "#" },

    { icon: <Globe size={20} />, label: "Globe", href: "#" },

  ];



  return (

    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 relative w-full min-h-full overflow-hidden py-12 sm:py-16 md:py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-14 z-40 relative">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16 pb-8 sm:pb-10 md:pb-12">

          {/* Brand section */}

          <div className="flex flex-col space-y-4">

            <div className="flex items-center space-x-2">

              <span className="text-white text-2xl sm:text-3xl font-extrabold">

                ✨

              </span>

              <span className="text-white text-2xl sm:text-3xl font-bold">AnimatedApp</span>

            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-white/90">

              Modern landing page with smooth animations and beautiful transitions.

            </p>

          </div>



          {/* Footer link sections */}

          {footerLinks.map((section) => (

            <div key={section.title}>

              <h4 className="text-white text-base sm:text-lg font-semibold mb-4 sm:mb-6">

                {section.title}

              </h4>

              <ul className="space-y-2 sm:space-y-3">

                {section.links.map((link) => (

                  <li key={link.label} className="relative">

                    <a

                      href={link.href}

                      className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"

                    >

                      {link.label}

                    </a>

                    {link.pulse && (

                      <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-white animate-pulse"></span>

                    )}

                  </li>

                ))}

              </ul>

            </div>

          ))}



          {/* Contact section */}

          <div>

            <h4 className="text-white text-base sm:text-lg font-semibold mb-4 sm:mb-6">

              Contact Us

            </h4>

            <ul className="space-y-3 sm:space-y-4">

              {contactInfo.map((item, i) => (

                <li key={i} className="flex items-center space-x-3">

                  {item.icon}

                  {item.href ? (

                    <a

                      href={item.href}

                      className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"

                    >

                      {item.text}

                    </a>

                  ) : (

                    <span className="text-sm sm:text-base text-white/80 hover:text-white transition-colors">

                      {item.text}

                    </span>

                  )}

                </li>

              ))}

            </ul>

          </div>

        </div>



        <hr className="border-t border-white/20 my-6 sm:my-8" />



        {/* Footer bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm space-y-4 md:space-y-0">

          {/* Social icons */}

          <div className="flex space-x-6 text-white/80">

            {socialLinks.map(({ icon, label, href }) => (

              <a

                key={label}

                href={href}

                aria-label={label}

                className="hover:text-white transition-colors"

              >

                {icon}

              </a>

            ))}

          </div>



          {/* Copyright */}

          <p className="text-center md:text-left text-white/80">

            &copy; {new Date().getFullYear()} AnimatedApp. All rights reserved.

          </p>

        </div>

      </div>



      {/* Text hover effect */}

      <div className="hidden lg:flex h-[30rem] -mt-52 -mb-36">

        <TextHoverEffect text="Explore" className="z-50" />

      </div>



      <FooterBackgroundGradient />

    </footer>

  );

}



export default HoverFooter;

