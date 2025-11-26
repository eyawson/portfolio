import React from 'react';
import { content } from '../data/content';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-12">
            <div className="container mx-auto px-6 text-center">
                <p className="text-lg mb-4">{content.friends}</p>
                <a
                    href="https://www.linkedin.com/search/results/people/?facetIndustry=%5B%2296%22%2C%224%22%5D&facetNetwork=%5B%22F%22%5D&origin=FACETED_SEARCH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 border border-white/30 rounded-full hover:bg-white/10 transition-colors mb-8"
                >
                    View Connections on LinkedIn
                </a>

                <div className="border-t border-white/10 pt-8">
                    <p>&copy; {new Date().getFullYear()} Ebow Yawson. All rights reserved.</p>
                    <p className="text-white/60 text-sm mt-2">Built with React, Vite & Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
