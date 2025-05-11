import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = JSON.stringify(formData);

    console.log(data)

    emailjs
      .send('service_zedphwv', 'template_dh9dtbj', formData, {
        publicKey: 'OdHmhLomcMMNeSjh4',
      })
      .then(
        () => {
          console.log("SUCCESS");
          setIsSubmitting(false);
          setSubmitMessage({
            type: 'success',
            text: 'Thank you! Your message has been sent successfully.'
          });
          
          // Reset form
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          
          // Clear success message after 5 seconds
          setTimeout(() => {
            setSubmitMessage(null);
          }, 5000);
        },
        (error) => {
          setIsSubmitting(false);
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-pink-500 dark:bg-pink-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Feel free to reach out to me for job opportunities, collaborations, or just to say hello. 
              I'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-pink-100 dark:bg-pink-900/20 rounded-full mr-4">
                  <Mail className="text-pink-500 dark:text-pink-400" size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:eco.villaraza@gmail.com" 
                    className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                  >
                    eco.villaraza@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-pink-100 dark:bg-pink-900/20 rounded-full mr-4">
                  <Phone className="text-pink-500 dark:text-pink-400" size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a 
                    href="tel:+639616542957" 
                    className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                  >
                    +63 961 654 2957
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-pink-100 dark:bg-pink-900/20 rounded-full mr-4">
                  <MapPin className="text-pink-500 dark:text-pink-400" size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Manila, Philippines
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400 focus:border-transparent dark:bg-gray-800 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400 focus:border-transparent dark:bg-gray-800 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400 focus:border-transparent dark:bg-gray-800 transition-colors"
                  placeholder="Job Opportunity"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400 focus:border-transparent dark:bg-gray-800 transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>
              
              {submitMessage && (
                <div className={`p-4 rounded-md ${
                  submitMessage.type === 'success' 
                    ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' 
                    : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400'
                }`}>
                  {submitMessage.text}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-md transition-colors duration-300 shadow-md flex items-center justify-center ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;