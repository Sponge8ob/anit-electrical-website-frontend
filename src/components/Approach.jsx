import React from 'react';
import { motion } from 'framer-motion';
import './Approach.css';

const approachItems = [
    {
        title: "Commitment to Safety",
        text: "Safety isn't just a requirement; it's a culture. I ensure every installation meets distinct safety protocols to protect both people and property."
    },
    {
        title: "Transparent Communication",
        text: "Clear, honest updates with clients and project teams. No hidden costs or technical jargon that confuses the scope of work."
    },
    {
        title: "On-time Execution",
        text: "Respecting project timelines is crucial. I plan effectively to ensure deliverables are met without compromising on quality."
    },
    {
        title: "Solution-Oriented",
        text: "Issues arise on every site. My focus is always on finding the most practical, efficient, and compliant solution to move forward."
    }
];

const Approach = () => {
    return (
        <section className="section approach-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Professional Approach</h2>
                    <div className="approach-grid">
                        {approachItems.map((item, index) => (
                            <div className="approach-card" key={index}>
                                <div className="approach-number">0{index + 1}</div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Approach;
