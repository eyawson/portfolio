import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-[#f8f9ff] relative overflow-hidden pt-20">
            {/* Background decoration */}
            <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#444cf7 0.5px, transparent 0.5px), radial-gradient(#444cf7 0.5px, #f8f9ff 0.5px)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>

            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-l from-blue-400/30 to-purple-500/30 rounded-full blur-3xl filter mix-blend-multiply opacity-70 animate-blob" />
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full blur-3xl filter mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-gradient-to-t from-indigo-400/30 to-blue-500/30 rounded-full blur-3xl filter mix-blend-multiply opacity-70 animate-blob animation-delay-4000" />

            <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-[#150578] mb-6 leading-tight">
                        {content.name} <br />
                        <span className="text-[#ca471b]">{content.intro}</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-light">
                        {content.introB}
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#portfolio"
                            className="px-8 py-3 bg-[#150578] text-white rounded-full font-medium hover:bg-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border-2 border-[#150578] text-[#150578] rounded-full font-medium hover:bg-blue-50 transition-all duration-300"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
