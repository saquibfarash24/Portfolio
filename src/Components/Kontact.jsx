// import React from 'react';



// const Contact = () => {
//   const form = React.createRef();
//   const [formData, setFormData] = React.useState({
//     user_name: '',
//     user_email: '',
//     phone: '',
//     message: ''
//   });

//   const [submitStatus, setSubmitStatus] = React.useState('');

//   // Define constants
//   const PUBLIC_KEY = "wWgmZvhbNmr1fd-rV";
//   const SERVICE_ID = "service_a4c9zg2";
//   const TEMPLATE_ID = "template_he9mmbh";

//   // Define recipient emails
//   const RECIPIENT_EMAILS = ["ayanp2055@gmail.com", "rizwan3748@gmail.com"];

//   React.useEffect(() => {
//     emailjs.init(PUBLIC_KEY);
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitStatus('sending');

//     try {
//       // Prepare template parameters
//       const templateParams = {
//         to_email: RECIPIENT_EMAILS.join(', '),
//         from_name: formData.user_name,
//         from_email: formData.user_email,
//         phone: formData.phone,
//         message: formData.message,
//         // Add formatted message for email body
//         email_body: `
//           New Contact Form Submission

//           Name: ${formData.user_name}
//           Email: ${formData.user_email}
//           Phone: ${formData.phone}

//           Message:
//           ${formData.message}

//           This message was sent from the NxtMark contact form.
//         `
//       };

//       const result = await emailjs.send(
//         SERVICE_ID,
//         TEMPLATE_ID,
//         templateParams,
//         PUBLIC_KEY
//       );

//       console.log('EmailJS Response:', result);

//       if (result.status === 200) {
//         setSubmitStatus('success');
//         setFormData({ user_name: '', user_email: '', phone: '', message: '' });
//       } else {
//         throw new Error('Failed to send message');
//       }
//     } catch (error) {
//       console.error('Error sending email:', error);
//       setSubmitStatus('error');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const contactInfo = [
//     {
//       title: "Address",
//       info: "Fremont, California, USA",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//         </svg>
//       )
//     },
//     {
//       title: "Phone",
//       info: ["+1 (970) 286-9080"],
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//         </svg>
//       )
//     },
//     {
//       title: "Email",
//       info: ["info@nxtmark.com", "sales@nxtmark.com"],
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//         </svg>
//       )
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white relative">
//       <TopBlob />
//       <BottomBlob />

//       {/* Hero Section */}
//       <section className="pt-24 pb-12 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
//           >
//             Get in Touch
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-lg text-gray-600 max-w-2xl mx-auto"
//           >
//             Have a question or want to work together? We'd love to hear from you.
//           </motion.p>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="py-12 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//               className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
//             >
//               <form ref={form} onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="user_name"
//                     name="user_name"
//                     value={formData.user_name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="user_email"
//                     name="user_email"
//                     value={formData.user_email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                     Phone
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows="4"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   disabled={submitStatus === 'sending'}
//                   className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200"
//                 >
//                   {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
//                 </button>

//                 {submitStatus === 'success' && (
//                   <p className="text-green-400 text-center">Message sent successfully!</p>
//                 )}
//                 {submitStatus === 'error' && (
//                   <p className="text-red-400 text-center">Error sending message. Please try again.</p>
//                 )}
//               </form>
//             </motion.div>

//             {/* Contact Information */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.3 }}
//               className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
//             >
//               <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
//               <div className="space-y-6">
//                 {contactInfo.map((item) => (
//                   <div key={item.title} className="flex items-start">
//                     <div className="text-blue-500 mr-4">{item.icon}</div>
//                     <div>
//                       <h4 className="text-lg font-medium text-gray-800">{item.title}</h4>
//                       {Array.isArray(item.info) ? (
//                         item.info.map((line) => (
//                           <p key={line} className="text-gray-600">{line}</p>
//                         ))
//                       ) : (
//                         <p className="text-gray-600">{item.info}</p>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Map */}
//               <div className="mt-8">
//                 <h4 className="text-lg font-medium text-gray-800 mb-4">Location</h4>
//                 <div className="aspect-w-16 aspect-h-9">
//                   <iframe
//                     title="NxtMark Office Location"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202499.20158869374!2d-122.17445407682679!3d37.530318038950696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbf46b7e8caf7%3A0x8ada313b89d888d4!2sFremont%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1737955109294!5m2!1sen!2sin" 
//                     className="w-full h-64 rounded-lg"
//                     style={{ border: 0 }}
//                     allowFullScreen=""
//                     loading="lazy"
//                   ></iframe>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;