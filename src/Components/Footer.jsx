import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaYoutube } from 'react-icons/fa';


function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-16">
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Social Icons */}
            <div className="flex space-x-6 text-gray-400 hover:text-white">
              <a href="https://www.instagram.com/ss.saqib_muhammed/?next=%2F" aria-label="Twitter" className="hover:text-pink-400 transition">
                <FaInstagram size={24} />
              </a>
              <a  href="https://www.youtube.com" aria-label="Facebook" className="hover:text-red-600 transition">
                <FaYoutube size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-500 transition">
                <FaGithub size={24} />
              </a>
              <a href=" href=https://www.linkedin.com/in/saquib-arif-sayyed-62b88b1a1" aria-label="LinkedIn" className="hover:text-blue-500 transition">
                <FaLinkedin size={24} />
              </a>
              
            </div>

            {/* Footer Text */}
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Saquib Sayyed. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
