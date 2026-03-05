import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { industrialProjects } from '../data/projects';
import './industrialprojects.css';

const IndustrialProjects = () => {

    return (
        <section id="industrial-projects" className="section industrial-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="section-header">
                        <h2 className="section-title">Industrial Projects</h2>
                        <p className="section-subtitle">Specialized electrical installations for industrial facilities.</p>
                    </div>

                    <div className="industrial-list">
                        {industrialProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="industrial-item"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="industrial-content">
                                    <h3 className="industrial-title">{project.title}</h3>
                                    <div className="industrial-location">
                                        <MapPin size={16} />
                                        <span>{project.location}</span>
                                    </div>
                                    <p className="industrial-description">{project.description}</p>
                                </div>
                                <div className="industrial-image-wrapper">
                                    <img src={project.image} alt={project.title} className="industrial-image" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default IndustrialProjects;
