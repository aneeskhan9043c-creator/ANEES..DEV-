import { motion } from "motion/react";

export default function LightFooter() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white px-6 py-12 md:py-16 border-t border-gray-200 w-full mt-20" 
      id="main-footer"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10 md:flex-row md:justify-between">
        
        {/* Brand & Bio Section */}
        <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left md:max-w-sm">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Anees<span className="text-blue-600">.</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed text-center md:text-left">
            I craft high-performance, beautiful websites designed to elevate your brand and drive real growth. Whatever your business needs, I am here to build a digital experience your customers will love. Let's create something amazing together.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-8 sm:flex-row sm:gap-16 md:justify-end">
          
          {/* Company Links */}
          <div className="flex flex-col gap-4 items-center text-center">
            <h3 className="font-black text-gray-900 uppercase text-lg sm:text-lg tracking-wider">
              Company
            </h3>
            <ul className="flex flex-col gap-3 text-base text-gray-600 items-center">
              <li>
                <a href="#about" className="hover:text-blue-600 transition-colors duration-200">
                  About Me
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-4 items-center text-center">
            <h3 className="font-black text-gray-900 uppercase text-lg sm:text-lg tracking-wider">
              Legal
            </h3>
            <ul className="flex flex-col gap-3 text-base text-gray-600 items-center">
              <li>
                <a href="#privacy" className="hover:text-blue-600 transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-blue-600 transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Direct Contact */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 flex flex-col gap-6 items-center sm:flex-row sm:justify-between text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Anees. All rights reserved.</p>
        
        {/* Contact Icons */}
        <div className="flex gap-6 items-center">
          
          {/* WhatsApp Icon (Realistic Green) */}
          <a 
            href="https://wa.me/923706980818" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-green-500 hover:text-green-600 transition-colors"
          >
            <span className="sr-only">WhatsApp</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 0C5.405 0 0 5.414 0 12.047c0 2.124.553 4.195 1.603 6.01L.226 23.63l5.725-1.501A11.96 11.96 0 0012.031 24c6.623 0 12.028-5.414 12.028-12.046C24.059 5.414 18.654 0 12.031 0zm3.844 17.202c-.173.486-.997.933-1.463.992-.423.053-.966.126-2.923-.683-2.364-.975-3.876-3.388-3.993-3.543-.115-.155-.953-1.267-.953-2.417 0-1.15.597-1.716.81-1.944.212-.228.462-.285.617-.285.155 0 .309.003.443.01.144.006.335-.057.52.392.193.465.656 1.603.714 1.717.058.115.097.248.019.404-.077.155-.116.248-.231.363-.116.115-.241.258-.347.348-.115.105-.239.221-.106.452.135.23.601.992 1.293 1.61.892.795 1.637 1.042 1.868 1.157.231.115.367.096.502-.057.135-.155.578-.675.733-.906.154-.23.309-.192.521-.115.212.076 1.35.636 1.581.751.232.115.386.172.444.268.058.096.058.556-.115 1.042z" />
            </svg>
          </a>

          {/* Email Icon */}
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aneeskhan9043c@gmail.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 transition-colors"
          >
            <span className="sr-only">Email</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          
        </div>
      </div>
    </motion.footer>
  );
}
