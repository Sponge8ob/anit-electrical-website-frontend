import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './Competencies.css';

const competenciesList = [
    "Electrical Installation & Commissioning",
    "Preventive and Breakdown Maintenance",
    "Basic Load Assessment & Power Distribution Planning",
    "Electrical Safety Practices & Site Compliance",
    "Team Supervision & Contractor Coordination",
    "Documentation Support for Project & Site Requirements"
];

const Competencies = () => {
    return (
        <section id="competencies" className="section competencies-section">
            <div className="container">
                <div className="competencies-layout">
                    <motion.div
                        className="competencies-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title text-left">Technical Competencies</h2>
                        <p className="intro-text">
                            With a focus on industrial and commercial standards, I bring a comprehensive skill set that ensures projects are executed efficiently and safely.
                        </p>
                        <ul className="competencies-list">
                            {competenciesList.map((item, index) => (
                                <li key={index}>
                                    <CheckCircle2 size={20} className="check-icon" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="competencies-visual"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Visual representation - abstract or card */}
                        <div className="visual-card">
                            <div className="stat-row">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Safety Compliance</span>
                            </div>
                            <div className="divider"></div>
                            <div className="stat-row">
                                <span className="stat-number">24/7</span>
                                <span className="stat-label">Reliable Support</span>
                            </div>
                            <div className="divider"></div>
                            <div className="stat-row">
                                <span className="stat-number">Pro</span>
                                <span className="stat-label">Project Execution</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Competencies;
