import { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Facebook, Instagram, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value || "Hello!",
      message: e.target.message.value,
    };

    // Assuming you set up an endpoint at /api/send
    const response = await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      alert("Message sent!");
    } else {
      alert("Error sending message.");
    }
    setIsLoading(false);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10 bg-slate-200/50 dark:bg-gray-900/80 relative overflow-hidden">

      {/* Decoration: Faint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container mx-auto max-w-[1400px] xl:max-w-[1200px] 2xl:max-w-[1280px] relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-2 sm:mb-3 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text py-2 leading-tight text-transparent drop-shadow-lg">
            Initialize Comms
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
            Ready to engineer something remarkable? Establish a secure connection and let's discuss your mission requirements.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 max-w-6xl mx-auto">

          {/* LEFT: Base Station Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 space-y-8"
          >

            {/* Status Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"
            >
              <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                System Status
              </h3>
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  Operational & Available
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Currently accepting freelance projects and engineering collaborations.
              </p>
            </motion.div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sky-100 dark:bg-sky-900/30 rounded-lg text-sky-600 dark:text-sky-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Email Frequency</h4>
                  <a href="mailto:rezwan.aaub@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    rezwan.aaub@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-sky-100 dark:bg-sky-900/30 rounded-lg text-sky-600 dark:text-sky-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Phone Line</h4>
                  <a href="tel:+8801315201696" className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    +880 1315-201696
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-sky-100 dark:bg-sky-900/30 rounded-lg text-sky-600 dark:text-sky-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Base Location</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Lalmonirhat, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a whileHover={{ y: -5 }} href="https://github.com/RezwanZani" className="p-3 bg-slate-200 dark:bg-gray-800 rounded-lg hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-slate-900 transition-all">
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a whileHover={{ y: -5 }} href="https://www.linkedin.com/in/rezwanzani" className="p-3 bg-slate-200 dark:bg-gray-800 rounded-lg hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-slate-900 transition-all">
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a whileHover={{ y: -5 }} href="https://www.facebook.com/rezwans19" className="p-3 bg-slate-200 dark:bg-gray-800 rounded-lg hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-slate-900 transition-all">
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a whileHover={{ y: -5 }} href="https://www.instagram.com/rezwan.shajib" className="p-3 bg-slate-200 dark:bg-gray-800 rounded-lg hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-slate-900 transition-all">
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a whileHover={{ y: -5 }} href="https://wa.me/8801315201696" className="p-3 bg-slate-200 dark:bg-gray-800 rounded-lg hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-slate-900 transition-all">
                <MessageCircle className="w-5 h-5" />
              </motion.a>
            </div>

          </motion.div>

          {/* RIGHT: Transmission Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3 relative"
          >

            {/* DECORATION: The "Technical Brackets" (HUD Style) */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-500/70 dark:border-cyan-400/70 opacity-50"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-500/70 dark:border-cyan-400/70 opacity-50"></div>

            <form onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl relative z-10">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Pilot Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-colors"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Comms ID (Email)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-colors"
                    placeholder="name@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label htmlFor="subject" className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-colors"
                  placeholder="Hello!"
                />
              </div>

              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Transmission Data
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Describe your mission requirements..."
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 hover:from-cyan-500 hover:via-purple-500 hover:to-pink-500 text-white font-bold py-4 rounded-lg shadow-lg shadow-cyan-600/20 transition-all flex items-center justify-center gap-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                {isLoading ? "Transmitting Message..." : "Transmit Message"}
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;