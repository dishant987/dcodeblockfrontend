import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

const Hero = () => {
    const [activeButton, setActiveButton] = useState("Overview");
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    const handleSubmit = () => {
        setIsRegisterOpen(false);
        setIsRegistered(true);

        // Hide notification after 3 seconds
        setTimeout(() => {
            setIsRegistered(false);
        }, 3000);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative bg-black h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
        >

            {/* Animated Shapes */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Pulsating Glowing Circle */}
                <motion.div
                    className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full opacity-50 shadow-[0_0_20px_5px_rgba(128,0,128,0.5)]"
                    animate={{
                        x: [0, 30, -30, 0],
                        y: [0, 30, -30, 0],
                        scale: [1, 1.1, 1],
                        opacity: [0.4, 0.8, 0.4],
                        filter: ["blur(0px)", "blur(5px)", "blur(0px)"],
                    }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                />

                {/* Floating Blurred Circle */}
                <motion.div
                    className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-gray-400 to-gray-700 rounded-full opacity-50 backdrop-blur-xl shadow-xl"
                    animate={{
                        x: [0, -40, 40, 0],
                        y: [0, -40, 40, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.9, 0.4],
                        rotate: [0, 15, -15, 0],
                    }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                />

                {/* Rotating Neon Square */}
                <motion.div
                    className="hidden sm:block absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-bl from-green-500 to-teal-500 rounded-lg opacity-50 shadow-[0_0_15px_3px_rgba(0,255,128,0.5)] border border-green-300"
                    animate={{ rotate: [0, 360] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                />

                {/* Floating Small Pulse Effect */}
                <motion.div
                    className="absolute top-1/4 right-1/4 w-14 h-14 bg-blue-400 rounded-full opacity-50 shadow-2xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.9, 0.5],
                        filter: ["blur(2px)", "blur(5px)", "blur(2px)"],
                    }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                />

                {/* Orbiting Animated Dot */}
                <motion.div
                    className="absolute top-1/3 left-1/3 w-6 h-6 bg-green-500 rounded-full opacity-60 shadow-lg"
                    animate={{
                        x: [0, 40, -40, 0],
                        y: [0, 40, -40, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 1, 0.6],
                    }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                />

                {/* Faint Glowing Background Overlay */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                />
            </motion.div>



            {/* Header Section */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col items-center justify-center w-full max-w-[925px] mx-auto gap-6 z-10"
            >
                {/* Logo & Title */}
                <div className="flex items-center gap-4">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative w-16 h-16 flex items-center justify-center"
                    >
                        <div className="absolute w-12 h-12 bg-green-600 rounded-lg top-1 left-1"></div>
                        <div className="absolute w-12 h-12 bg-orange-600 -top-1 -left-1 flex items-center justify-center rounded-lg">
                            <span className="text-4xl font-extrabold text-white">H</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-4xl font-extrabold text-white tracking-widest uppercase text-center"
                    >
                        HACKINDIA
                    </motion.h1>
                </div>

                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-wrap justify-center items-center gap-2 w-full max-w-full border border-white/10 shadow-md rounded-lg p-4 bg-[#28083A] md:max-w-[925px] overflow-x-auto"
                >
                    {["Overview", "Create", "Prizes", "FAQs", "Rules", "Resources"].map((item) => (
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

            {/* Hero Text */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-12 text-center z-10"
            >
                <motion.h1
                    className="text-5xl lg:text-[90px] font-normal text-white leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    whileHover={{ scale: 1.02 }}
                >
                    <motion.span
                        whileHover={{ scale: 1.1, rotate: -2, boxShadow: "0px 0px 20px rgba(248,103,32,0.7)" }}
                        transition={{ duration: 0.3 }}
                        animate={{ y: [0, -5, 0], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } }}
                        className="bg-[#F86720] px-2 py-0 rounded-lg shadow-lg"
                    >
                        Ha
                    </motion.span>
                    ckindia2025
                </motion.h1>
                <motion.h2
                    className="text-3xl font-bold text-white mt-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    whileHover={{ scale: 1.05, color: "#F86720" }}
                >
                    India&apos;s Biggest Web3 & AI Hackathon
                </motion.h2>
            </motion.div>

            {/* Event Details */}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="my-8 bg-gradient-to-r from-[#6A1799] to-[#230833] text-white px-4 py-2 rounded-lg text-lg shadow-md z-10"
            >
                February 28 - September 28
            </motion.span>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="flex flex-wrap gap-4 text-white text-lg z-10"
            >
                <motion.span whileHover={{ scale: 1.1 }} className="text-[#F86720] font-semibold">
                    $150+
                </motion.span>
                Prize Pool
                <span>|</span>
                <motion.span whileHover={{ scale: 1.1 }} className="text-[#F86720] font-semibold">
                    150+
                </motion.span>
                Universities
                <span>|</span>
                <motion.span whileHover={{ scale: 1.1 }} className="text-[#F86720] font-semibold">
                    25000+
                </motion.span>
                Students
            </motion.div>

            {/* Register Button */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="mt-8 z-10"
            >
                <Button name="Register Now" size="lg" onClick={() => setIsRegisterOpen(true)} />
            </motion.div>

            {/* Register Modal */}
            <AnimatePresence>
                {isRegisterOpen && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white dark:bg-[#1E1E1E] p-6 rounded-xl shadow-2xl w-[90%] max-w-lg"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-2xl font-bold text-black dark:text-white text-center mb-4">
                                Register for HackIndia 2025
                            </h2>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F86720]"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F86720]"
                            />
                            <div className="flex justify-between">
                                <Button name="Cancel" size="sm" onClick={() => setIsRegisterOpen(false)} />
                                <Button name="Submit" size="sm" onClick={handleSubmit} />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Success Notification */}
            <AnimatePresence>
                {isRegistered && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="fixed top-20 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold z-50"
                    >
                        ✅ Registration Successful!
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default Hero;