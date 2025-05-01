import React from "react";

function Contact() {
  return (
    <div
      name="Contact"
      className="relative min-h-screen flex items-center justify-center bg-gray-900 bg-cover bg-center pt-16 pb-16"
      style={{
        backgroundImage: "url('/contact.jpg')", // Make sure the image path is correct
      }}
    >
      {/* Overlay for background image */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Form Container */}
      <div className="relative z-10 bg-white bg-opacity-90 p-8 rounded-lg shadow-xl w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-4 sm:mx-0">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
  CONTACT ME
</h1>

        <p className="text-center text-gray-600 mb-6 text-lg">
          Please fill out the form below to get in touch with me.
        </p>

        <form action="https://api.web3forms.com/submit" method="POST">
          {/* Web3Forms Access Key */}
          <input
            type="hidden"
            name="access_key"
            value="0c7e4e14-6446-4d5d-93a5-66d73a53764b"
          />

          {/* Full Name */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-3 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              required
              className="w-full px-4 py-3 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Type your message here"
              required
              className="w-full px-4 py-3 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-800 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
