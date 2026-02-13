import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: 'Validation Error',
        description: 'Please fill in all fields correctly.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS Integration Placeholder
      // TODO: Add your EmailJS credentials here
      // const serviceID = 'YOUR_SERVICE_ID';
      // const templateID = 'YOUR_TEMPLATE_ID';
      // const publicKey = 'YOUR_PUBLIC_KEY';
      
      // await emailjs.send(serviceID, templateID, {
      //   from_name: formData.name,
      //   from_email: formData.email,
      //   message: formData.message,
      // }, publicKey);

      // Simulated success for now
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: 'Message Sent!',
        description: 'Thank you for reaching out. I\'ll get back to you soon!',
      });

      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://www.linkedin.com/in/durgesh-sharma-64260b33b',
      color: 'hover:text-blue-500',
    },
    {
      name: 'Email',
      icon: <Mail size={24} />,
      url: 'mailto:durgesh@example.com',
      color: 'hover:text-red-500',
    },
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      url: '#',
      color: 'hover:text-gray-400',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-12"></div>

          <div className="max-w-2xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 shadow-xl"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-900/70 border ${
                    errors.name ? 'border-red-500' : 'border-slate-700'
                  } rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors`}
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-900/70 border ${
                    errors.email ? 'border-red-500' : 'border-slate-700'
                  } rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 bg-slate-900/70 border ${
                    errors.message ? 'border-red-500' : 'border-slate-700'
                  } rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none`}
                  placeholder="Your message..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold py-3 text-lg"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={20} className="ml-2" />
              </Button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-semibold text-center mb-6">Connect With Me</h3>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className={`p-4 bg-slate-800/50 rounded-full border border-slate-700/50 text-gray-300 ${social.color} transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;