import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, PenTool } from 'lucide-react';
import './Overview.css';

const Overview = () => {
    return (
        <section id="overview" className="section overview-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Professional Overview</h2>

                    <div className="overview-content">
                        <p className="overview-text">
                            “I am an experienced <strong>Electrical Contractor and Technical Specialist</strong> providing dependable electrical solutions for residential, commercial, and project-based environments. My work is grounded in hands-on field experience, adherence to safety standards, and a strong commitment to quality execution and timely delivery. I collaborate effectively with clients, contractors, and site teams to ensure reliable and compliant electrical installations.”
                        </p>
                    </div>

                    <div className="overview-highlights">
                        <div className="highlight-item">
                            <ShieldCheck size={32} className="highlight-icon" />
                            <h3>Safety & Compliance</h3>
                            <p>Strict adherence to safety standards and regulations.</p>
                        </div>
                        <div className="highlight-item">
                            <PenTool size={32} className="highlight-icon" />
                            <h3>Quality Execution</h3>
                            <p>Precision in installation, maintenance, and diagnostics.</p>
                        </div>
                        <div className="highlight-item">
                            <Clock size={32} className="highlight-icon" />
                            <h3>Timely Delivery</h3>
                            <p>Committed to meeting project timelines and milestones.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Overview;
