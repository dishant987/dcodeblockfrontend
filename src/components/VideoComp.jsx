import React from "react";
import { motion } from "framer-motion";

const VideoComp = () => {
    return (
        <motion.div
            className="relative h-[500px] bg-black flex items-center justify-center px-8 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
        >
            <motion.div
                className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >


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


            </motion.div>
            {/* Background Light Effect */}
            <motion.img
                className="absolute top-[80px] left-0 opacity-75"
                src="/light.png"
                alt="light effect"
                animate={{ opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="relative z-10 flex flex-col md:flex-row items-center gap-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
            >
                {/* Statistics Section */}
                <motion.div
                    className="text-white space-y-6 text-center md:text-left"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="flex flex-col font-bold text-4xl md:text-5xl">
                        <motion.span
                            className="text-purple-400"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            150+
                        </motion.span>
                        <span className="text-lg md:text-xl text-gray-300">Universities participating</span>
                    </div>

                    <div className="flex gap-6 justify-center md:justify-start">
                        {[
                            { value: "72+", label: "Judges", color: "text-orange-400" },
                            { value: "21", label: "Hackathons", color: "text-blue-400" },
                            { value: "36+", label: "Great Speakers", color: "text-green-400" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center md:items-start"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.2, ease: "easeOut" }}
                            >
                                <span className={`text-4xl ${stat.color}`}>{stat.value}</span>
                                <span className="text-gray-300 text-lg">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Video Section */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <motion.iframe
                        className="w-[350px] md:w-[450px] lg:w-[550px] h-[200px] md:h-[250px] lg:h-[315px] rounded-lg shadow-lg border-2 border-purple-500"
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(128, 0, 128, 0.6)" }}
                        transition={{ duration: 0.3 }}
                        src="https://www.youtube.com/embed/GtUVQei3nX4"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></motion.iframe>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default VideoComp;
