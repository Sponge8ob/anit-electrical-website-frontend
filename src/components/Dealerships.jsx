import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';
import { dealershipsData } from '../data/projects';
import './Dealerships.css';

const Dealerships = () => {
    return (
        <section id="dealerships" className="section dealerships-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="section-header">
                        <h2 className="section-title">Dealerships & Authorizations</h2>
                        <p className="section-subtitle">We are proud partners and authorized dealers of leading electrical and electronics manufacturers.</p>
                    </div>

                    <div className="dealerships-grid">
                        {dealershipsData.map((dealer, index) => (
                            <motion.div
                                key={dealer.id}
                                className="dealership-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="dealership-icon-wrapper">
                                    <Award size={32} className="dealership-icon" />
                                </div>
                                <h3 className="dealership-name">{dealer.name}</h3>
                                <div className="dealership-type">
                                    <ShieldCheck size={16} />
                                    <span>{dealer.type}</span>
                                </div>
                                {dealer.image && (
                                    <div className="dealership-image-wrapper">
                                        <img src={dealer.image} alt={dealer.name} className="dealership-image" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Dealerships;
