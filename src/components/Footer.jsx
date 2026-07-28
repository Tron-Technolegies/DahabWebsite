import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { number } from "../utils/whatsapp";

const FooterLinks = ({ link, icon }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-[#0194FE] transition-colors duration-300"
  >
    {icon}
  </a>
);

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.footer
      className="bg-gradient-to-b from-[#000618] to-[#021124] text-white px-6 md:px-12 lg:px-24 xl:px-32 py-12"
      // variants={containerVariants}
      // initial="hidden"
      // whileInView="visible"
      // viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Social Links */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <a href="https://dahabminers.com/" className="block w-40">
              <img
                src="/home/footerLogo.webp"
                loading="lazy"
                decoding="async"
                alt="Dahab Miners Logo"
                title="Dahab Miners - Premier Crypto Mining Service in UAE"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </a>
            <div className="flex gap-5 text-base font-normal text-white">
              <FooterLinks
                link="https://www.instagram.com/dahabminers.btc"
                icon={<FaInstagram />}
              />
              <FooterLinks
                link="https://www.facebook.com/dahabminers"
                icon={<FaFacebookF />}
              />
              <FooterLinks
                link="https://ae.linkedin.com/company/dahabminers"
                icon={<FaLinkedinIn />}
              />
              <FooterLinks
                link="https://x.com/dahabminersuae"
                icon={<FaXTwitter />}
              />
              <FooterLinks
                link="https://www.youtube.com/@DahabMinersUAE"
                icon={<FaYoutube />}
              />
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm font-medium md:flex md:flex-col md:gap-3"
          >
            <Link
              to="/"
              className="hover:text-[#0194FE] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/buy-bitcoin-miners-uae"
              className="hover:text-[#0194FE] transition-colors duration-300"
            >
              Buy Miners
            </Link>
            <Link
              to="/host-miners"
              className="hover:text-[#0194FE] transition-colors duration-300"
            >
              Host Mining
            </Link>
            <Link
              to="/asic-miner-repair-dubai"
              className="hover:text-[#0194FE] transition-colors duration-300"
            >
              Miner Repair
            </Link>
            <Link
              to="/blogs"
              className="hover:text-[#0194FE] transition-colors duration-300"
            >
              Blogs
            </Link>
            <Link
              to="/about-us"
              className="hover:text-[#0194FE] transition-colors duration-300"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="hover:text-[#0194FE] transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              to="/terms_and_conditions"
              className="hover:text-[#0194FE] transition-colors duration-300"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/privacy_policy"
              className="hover:text-[#0194FE] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="bg-[#030815]/50 rounded-xl p-6 shadow-lg"
          >
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <a
                href="https://maps.app.goo.gl/eLqPGSFbuweek7788?g_st=ipc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-start hover:text-[#0194FE] transition-colors duration-300"
              >
                <CiLocationOn className="text-xl flex-shrink-0 mt-1" />
                <p>
                  Plot 122 Ad Doja 1 St, Musaffah - M40, Abu Dhabi, United Arab
                  Emirates
                </p>
              </a>
              <a
                href="https://maps.app.goo.gl/PCJcJS8TUPDGca6HA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-start hover:text-[#0194FE] transition-colors duration-300"
              >
                <CiLocationOn className="text-xl flex-shrink-0 mt-1" />
                <p>
                  Saif Thamer General Transport Establishment building, Al
                  Jubailah, Liwa, Abu Dhabi
                </p>
              </a>
              <a
                href="https://maps.app.goo.gl/nvicitwD6T9yF4Ei8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-start hover:text-[#0194FE] transition-colors duration-300"
              >
                <CiLocationOn className="text-xl flex-shrink-0 mt-1" />
                <p>WM92+VCQ Alem Gena, Ethiopia</p>
              </a>
              <div
                className="flex gap-3 items-center hover:text-[#0194FE] cursor-pointer transition-colors duration-300"
                onClick={() =>
                  (window.location.href = "mailto:Rizwan@dahabminers.ae")
                }
              >
                <CiMail className="text-xl flex-shrink-0" />
                <p>Rizwan@dahabminers.ae</p>
              </div>
              <div
                className="flex gap-3 items-center hover:text-[#0194FE] cursor-pointer transition-colors duration-300"
                onClick={() => (window.location.href = `tel:${number}`)}
              >
                <CiPhone className="text-xl flex-shrink-0" />
                <p>{number}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-6 border-t border-white/10 text-center"
        >
          <p className="text-xs font-normal text-white/80">
            © {new Date().getFullYear()} Dahab Miners Electrical Contracting
            LLC. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
