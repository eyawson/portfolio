import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Code, Server, Database, Cloud, Terminal, Globe } from 'lucide-react';

const Bio = () => {
    return (
        <section id="bio" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">About Me</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center md:text-left">
                        {content.bio}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {content.majorSkills.map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors border border-gray-100 hover:border-blue-100"
                            >
                                <span className="text-primary font-medium">{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Bio;
