import React from 'react';

const VideoComp = () => {
    return (
        <div className="relative h-[500px] bg-black flex items-center justify-center px-8">
            {/* Background Light Effect */}
            <img className="absolute top-[80px] left-0 opacity-50 animate-pulse" src="/light.png" alt="light effect" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                {/* Statistics Section */}
                <div className="text-white space-y-6 text-center md:text-left">
                    <div className="flex flex-col font-bold text-4xl md:text-5xl">
                        <span className="text-purple-400">150+</span>
                        <span className="text-lg md:text-xl text-gray-300">Universities participating</span>
                    </div>

                    <div className="flex gap-6 justify-center md:justify-start">
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-4xl text-orange-400">72+</span>
                            <span className="text-gray-300 text-lg">Judges</span>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-4xl text-blue-400">21</span>
                            <span className="text-gray-300 text-lg">Hackathons</span>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-4xl text-green-400">36+</span>
                            <span className="text-gray-300 text-lg">Great Speakers</span>
                        </div>
                    </div>
                </div>

                {/* Video Section */}
                <div className="relative">
                    <iframe
                        className="w-[350px] md:w-[450px] lg:w-[550px] h-[200px] md:h-[250px] lg:h-[315px] rounded-lg shadow-lg border-2 border-purple-500 hover:shadow-purple-500 transition-all duration-300"
                        src="https://www.youtube.com/embed/GtUVQei3nX4"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default VideoComp;
