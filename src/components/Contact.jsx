import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Mail, Phone, Linkedin, Twitter, Github } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Get In Touch</h2>
                    <p className="text-lg text-gray-600 mb-12">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <a
                            href={`mailto:${content.contact.email}`}
                            className="flex flex-col items-center p-8 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group"
                        >
                            <div className="p-4 bg-white rounded-full shadow-md mb-4 group-hover:scale-110 transition-transform">
                                <Mail className="text-accent" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2">Email Me</h3>
                            <p className="text-gray-600">{content.contact.email}</p>
                        </a>

                        <a
                            href={`tel:${content.contact.phone}`}
                            className="flex flex-col items-center p-8 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group"
                        >
                            <div className="p-4 bg-white rounded-full shadow-md mb-4 group-hover:scale-110 transition-transform">
                                <Phone className="text-accent" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2">Call Me</h3>
                            <p className="text-gray-600">{content.contact.phone}</p>
                        </a>
                    </div>

                    <div className="flex justify-center gap-6">
                        <a href="https://www.linkedin.com/in/ebowyawson" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                            <Linkedin size={32} />
                        </a>
                        <a href="https://www.twitter.com/yawson_e" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                            <Twitter size={32} />
                        </a>
                        <a href="https://www.github.com/eyawson" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                            <Github size={32} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
