import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 px-4 md:px-12">
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
        </footer>
    );
};

export default Footer;
