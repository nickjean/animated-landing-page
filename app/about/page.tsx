'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-black dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-4">
              About Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
              We create beautiful, animated web experiences that captivate and engage users.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Our Mission
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                To push the boundaries of web design and create experiences that are not just
                functional, but truly delightful. We believe that every interaction should feel
                smooth and intentional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Our Values
              </h2>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                  <span>Innovation in every project</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                  <span>User-centered design approach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                  <span>Performance and accessibility first</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-20"
          >
            {[
              { number: '100+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-5 sm:p-6 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-xl"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-4"
          >
            Want to Work Together?
          </motion.h2>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="/contact"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg text-sm sm:text-base"
          >
            Get in Touch
          </motion.a>
        </div>
      </section>
    </main>
  );
}

