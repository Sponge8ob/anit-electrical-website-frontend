import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users } from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <section id="about-us" className="section about-us-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="about-us-wrapper"
                >
                    <div className="about-us-content">
                        <h2 className="section-title">Who We Are</h2>
                        <h3 className="about-subtitle">Building Trust Through Electrical Excellence</h3>
                        <p className="about-text">
                            Founded in 1999, Anit Electric & Electronics is a trusted
                            “A” Class Electrical Contractor providing end-to-end electrical
                            solutions across India. With a dedicated team of qualified
                            electrical engineers and skilled technicians, we deliver safe,
                            reliable, and cost-effective electrical installations.
                        </p>
                        <p className="about-text">
                            We specialize in HT/LT electrical works for hotels and resort
                            ,offices, large commercial and residential complexes, industrial
                            plants, DG set installations, machine commissioning, and
                            liaisoning with MPSEB and Chief Electrical Inspectorate officials
                            for licenses and permissions. Equipped with advanced tools and
                            machinery, we ensure high-quality execution with strict
                            adherence to safety standards and timelines.
                        </p>

                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">25+</span>
                                <span className="stat-label">Years Exp.</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Compliance</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-us-features">
                        <div className="feature-card">
                            <CheckCircle size={28} className="feature-icon" />
                            <div>
                                <h4>Certified Expertise</h4>
                                <p>Licensed professionals engaging in industry-standard practices.</p>
                            </div>
                        </div>
                        <div className="feature-card">
                            <Award size={28} className="feature-icon" />
                            <div>
                                <h4>Award Winning</h4>
                                <p>Recognized for excellence in safety and execution quality.</p>
                            </div>
                        </div>
                        <div className="feature-card">
                            <Users size={28} className="feature-icon" />
                            <div>
                                <h4>Client Focused</h4>
                                <p>Tailored solutions designed to meet specific client needs.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;
