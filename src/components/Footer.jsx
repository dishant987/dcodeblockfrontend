import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpCircle } from 'lucide-react';

const Footer = () => {
    const [showButton, setShowButton] = useState(false);
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowButton(entry.isIntersecting);
            },
            { threshold: 0.5 } // Trigger when 50% of the footer is visible
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <footer ref={footerRef} className="bg-black text-white py-12 px-4 md:px-12 relative">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                {/* Copyright Section */}
                <div className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} <span className="text-purple-400 font-semibold">DcodeBlock</span>. All Rights Reserved.
                </div>

                {/* Links Section */}
                <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-4 md:mt-0">
                    <a href="#" className="text-gray-300 hover:text-purple-400 transition-all duration-300">Help Center</a>
                    <span className="text-gray-500 hidden md:inline">|</span>
                    <a href="#" className="text-gray-300 hover:text-purple-400 transition-all duration-300">Terms & Conditions</a>
                    <span className="text-gray-500 hidden md:inline">|</span>
                    <a href="#" className="text-gray-300 hover:text-purple-400 transition-all duration-300">Privacy Policy</a>
                </div>
            </div>

            {/* Animated Back to Top Button */}
            {showButton && (
                <motion.button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-6 right-6 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-500 transition-all"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ArrowUpCircle size={30} />
                </motion.button>
            )}
        </footer>
    );
};

export default Footer;
