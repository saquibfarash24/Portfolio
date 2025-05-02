import React from 'react';
import {
  FaFacebook, FaLinkedin, FaYoutube, FaTelegram, FaGithub,
  FaNodeJs, FaInstagram
} from 'react-icons/fa';

import { DiMongodb } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';
import { RiReactjsFill } from 'react-icons/ri';
import { ReactTyped } from 'react-typed';
import saqibimg from '../../public/img4.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section
      name="Home"
      className="relative bg-cover bg-center bg-no-repeat bg-fixed text-white"
      style={{
        backgroundImage:
          'url(/codeimg2.jpg)',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 md:px-20 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="md:w-1/2 space-y-6 order-2 md:order-1 text-center md:text-left">
            <span className="text-lg font-medium text-green-300">Welcome To My Space</span>
            <div className="text-3xl md:text-4xl font-bold">
              <h1 className="inline">Hello, I'm a </h1>
              <ReactTyped
                className="text-green-400"
                strings={['Developer', 'Programmer', 'Coder']}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </div>
            <p className="text-sm md:text-base leading-relaxed">
              I am a frontend web developer. I create clean code and pixel-perfect design.
              I also make websites interactive with smooth web animations.
            </p>

            {/* Socials & Tech */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-6">
              {/* Social Icons */}
              <div>
                <h2 className="text-lg font-semibold mb-2">Available On</h2>
                <div className="flex space-x-4 justify-center md:justify-start">
                 
                  <a
                    href="https://www.linkedin.com/in/saquib-arif-sayyed-62b88b1a1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="text-2xl hover:text-blue-400 transition" />
                  </a>
                  <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                    <FaYoutube className="text-2xl hover:text-red-400 transition" />
                  </a>
                  <a href="https://www.instagram.com/ss.saqib_muhammed/?next=%2F" target="_blank" rel="noreferrer">
                    <FaInstagram className="text-2xl hover:text-pink-300 transition" />
                  </a>
                  <a href="https://github.com/saquibsayyedcoder" target="_blank" rel="noreferrer">
                    <FaGithub className="text-2xl hover:text-gray-300 transition" />
                  </a>
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h2 className="text-lg font-semibold mb-2">Currently Working On</h2>
                <div className="flex space-x-4 justify-center md:justify-start">
                  <DiMongodb className="text-3xl hover:text-green-400 transition cursor-pointer" />
                  <SiExpress className="text-3xl hover:text-yellow-400 transition cursor-pointer" />
                  <RiReactjsFill className="text-3xl hover:text-blue-400 transition cursor-pointer" />
                  <FaNodeJs className="text-3xl hover:text-lime-400 transition cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Resume Button */}
            <Link to='/resume' smooth duration={500}>
              <button className="mt-6 px-6 py-3 bg-violet-500 rounded-lg hover:bg-violet-600 transition">
                View Resume
              </button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 order-1 md:order-2 mb-10 md:mb-0 flex justify-center">
            <img
              src={saqibimg}
              alt="Saqib"
              className="w-48 h-48 md:w-96 md:h-96 rounded-full object-cover border-4 border-green-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
