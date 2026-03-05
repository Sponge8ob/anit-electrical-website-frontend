import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const name = "ANIT ELECTRIC AND\nELECTRONICS";

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const letter = {
        hidden: { y: 50, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <section id="hero" className="hero">
            <div className="hero-bg"></div>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <h1 className="hero-name">
                        {name.split("").map((char, index) => (
                            char === '\n' ? <br key={index} /> : (
                                <motion.span key={index} variants={letter}>
                                    {char}
                                </motion.span>
                            )
                        ))}
                    </h1>
                </motion.div>

                <motion.h2
                    className="hero-title"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    Electrical Contractor & <br />Technical Specialist
                </motion.h2>

                <motion.p
                    className="hero-tagline"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    “Delivering Reliable, Safe, and Efficient Electrical Solutions”
                </motion.p>

                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                >
                    <a href="#contact" className="btn btn-primary">
                        Get in Touch <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
