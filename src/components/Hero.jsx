import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const Hero = () => {
    const [activeButton, setActiveButton] = useState("Overview");

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
            className="relative bg-black min-h-[500px] md:min-h-[600px] lg:min-h-[835px] flex flex-col items-center pt-6 px-4"
        >
            {/* SVG Banner */}
            <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-0 left-0 w-full"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 1440 6" fill="none">
                    <path d="M0 6H75.5L88.5 4.5H198L210 6H331.5L337.5 3.5H667.5L673 6H1043.5L1050.5 3H1198H1440V0H0V6Z" fill="#B026FF" fillOpacity="0.5" />
                </svg>
            </motion.div>

            {/* Content Container */}
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col lg:flex-row items-center gap-6 w-full justify-center mt-8"
            >
                {/* Logo and Title */}
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                    {/* Logo */}
                    <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center"
                    >
                        <div className="absolute w-10 h-10 sm:w-12 sm:h-12 bg-green-600 top-1 left-1"></div>
                        <div className="absolute w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 -top-1 -left-1 flex items-center justify-center">
                            <span className="relative text-3xl sm:text-4xl font-extrabold text-white z-10">H</span>
                        </div>
                    </motion.div>
                    {/* Title */}
                    <motion.h1 
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-widest drop-shadow-lg uppercase text-center"
                    >
                        HACKINDIA
                    </motion.h1>
                </div>

                {/* Button Group */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-wrap items-center justify-center gap-2 w-full max-w-[925px] border-2 border-white border-opacity-10 shadow-sm rounded-lg p-4 bg-[#28083A]"
                >
                    {[
                        "Overview",
                        "Create",
                        "Prizes",
                        "FAQs",
                        "Rules",
                        "Resources"
                    ].map((item) => (
                        <Button
                            key={item}
                            size="md"
                            name={item}
                            isActive={activeButton === item}
                            onClick={() => setActiveButton(item)}
                        />
                    ))}
                </motion.div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-12"
            >
                <img src="/net.png" alt="" />
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-12"
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-widest drop-shadow-lg text-center">
                    <span className="bg-[#f49134] rounded-lg text-white px-2 mx-[4px]">Ha</span>ckindia2025
                </h1>
            </motion.div>
        </motion.div>
    );
};

export default Hero;