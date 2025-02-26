import { useState } from "react";
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
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[90px] font-normal text-white leading-[108px] tracking-[10%] drop-shadow-lg text-center">
                    <span className="bg-[#F86720] rounded-lg text-white px-2 mx-[4px]">Ha</span>ckindia2025
                </h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-12"
            >
                <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-3xl font-extrabold text-white leading-[42px]drop-shadow-lg text-center">
                    India&apos;s Biggest Web3 & AI Hackathon
                </h1>
            </motion.div>
            <span className="my-12 bg-gradient-to-r from-[#6A1799] to-[#230833] text-white px-4 py-2 rounded-lg text-lg font-normal drop-shadow-lg">
                February 28 - September 28
            </span>
            <div className="flex gap-6">
                <span className="text-white font-justina">
                    <span className="text-[#F86720]">$150+ </span>Price Pool
                </span>
                <span className="text-white font-justina">|</span>
                <span className="text-white">
                    <span className="text-[#F86720]">150+ </span> University
                </span>
                <span className="text-white font-justina">|</span>
                <span className="text-white">
                    <span className="text-[#F86720]">25000+ </span>Students
                </span>
            </div>
            <div className="mt-8">
                <Button name="Register Now" size="lg" />
            </div>
        </motion.div>
    );
};

export default Hero;