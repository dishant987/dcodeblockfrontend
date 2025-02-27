import React from 'react'
import { motion } from "framer-motion";

const logos = Array.from({ length: 20 }, (_, i) => `/logos/${i + 1}.png`);

const Image = () => {
    return (
        <div className="relative overflow-hidden bg-slate-200 py-4">
            {/* Gradient Overlay for Fade Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none z-10"></div>

            <motion.div
                className="flex w-[200%] items-center"
                animate={{ x: [0, "-100%"] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
                {[...logos, ...logos].map((src, index) => (
                    <div key={index} className="w-32 mx-6 flex-shrink-0 flex justify-center items-center">
                        <img src={src} alt={`logo-${index}`} className="w-full h-auto drop-shadow-xl transition-transform hover:scale-110 duration-300" />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default Image;
