import React from "react";
import logo from "../assets/images/footer_logo.svg";
import { Link, NavLink } from "react-router-dom";
import { Facebook, HomeIcon, MailIcon, PhoneCall, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <section className="pt-10 relative">
      <div className="flex h-full items-center footer border-t bg-black text-white pt-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-3">
            <NavLink to="/">
              <img src={logo} alt="" className="w-72 h-full" />
            </NavLink>
            <div className="lg:grid grid-cols-12 gap-10 mb-10 space-y-5">
              <div className="col-span-12 lg:col-span-5 space-y-5">
                <p>
                  We are world largest and trustful blood donation center. We
                  are working all over the world, organizing blood donation
                  campaign to grow awareness among the people to donate blood.
                </p>
                <div className="contact-info space-y-5">
                  <div className="flex gap-3">
                    <span>
                      <HomeIcon />
                    </span>
                    <span>23/1, Taltala, Sylhet-3100, Bangladesh</span>
                  </div>
                  <div className="flex gap-3">
                    <span>
                      <PhoneCall />
                    </span>
                    <span>+8801759-231892</span>
                  </div>
                  <div className="flex gap-3">
                    <span>
                      <MailIcon />
                    </span>
                    <span>safe.donor@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-3 space-y-5">
                <h3 className="text-2xl">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="blood-request/">Blood Request</Link>
                  </li>
                  <li>
                    <Link to="about/">About</Link>
                  </li>
                  <li>
                    <Link to="contact/">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-12 lg:col-span-4 social-lins space-y-5">
                <h3 className="text-2xl">Social Links</h3>
                <ul className="space-x-5 flex">
                  <li className="bg-white text-black p-2">
                    <Link to="/">
                      <Facebook />
                    </Link>
                  </li>
                  <li className="bg-white text-black p-2">
                    <Link to="/">
                      <Twitter />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="bg-black border-t border-white text-white text-center py-3">
        © {new Date().getFullYear()} Safe Blood. All rights reserved
      </p>
    </section>
  );
};

export default Footer;




