import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Factory, Home, MapPin, ArrowRight } from 'lucide-react';
import './ourprojects.css';

import { featuredProjects } from '../data/projects';

const OurProjects = () => {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="section-header">
                        <h2 className="section-title">Featured Projects</h2>
                        <p className="section-subtitle">Delivering excellence across residential, commercial, and industrial sectors.</p>
                    </div>

                    <div className="projects-grid">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="project-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.45 }}
                            >
                                <div
                                    className="project-bg-image"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                                <div className="project-overlay"></div>
                                <div className="card-content">
                                    <div className="project-icon-wrapper">
                                        {project.icon}
                                    </div>
                                    <div className="project-category">{project.category}</div>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>

                                    <div className="project-footer">
                                        <div className="project-location">
                                            <MapPin size={16} />
                                            <span>{project.location}</span>
                                        </div>
                                        <div className="project-arrow">
                                            <ArrowRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OurProjects;