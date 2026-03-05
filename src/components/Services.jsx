import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Settings, Activity, FileText, Layout, Users, ClipboardCheck, MonitorPlay, CalendarCheck } from 'lucide-react';
import './Services.css';

const servicesData = [
    {
        icon: <Layout size={32} />,
        title: "Electrical – Commercial, Industrial, Residential",
        description: ["Generators & Emergency Power Systems",
            " Site Lighting & Power Distribution",
            "High Bay Lighting Solutions",
            "Energy Management Systems ",
            "Control Wiring & Panel Boards ",
            "Troubleshooting & Repairs"]
    },
    {
        icon: <Zap size={32} />,
        title: "High Voltage Installations & Services",
        description: [
            "Air Switches & Pad - Mount Transformers",
            "Switching Modules",
            "High - Voltage Cable Installations",
            "Terminations & Splicing",
            "High - Voltage Distribution Systems"
        ]
    },
    {
        icon: <Settings size={32} />,
        title: "Security Systems",
        description: ["Surveillance Systems",
            "Access Control Systems",
            "Alarm Systems",
            "Fire Detection & Suppression",
            "Card Access Control",
            "Surveillance Systems",
            "Intrusion Detection"]
    },
    {
        icon: <Activity size={32} />,
        title: "Fault Diagnosis",
        description: "Expert troubleshooting, rectification, and preventive maintenance."
    },
    {
        icon: <Users size={32} />,
        title: "Site Supervision",
        description: "Coordination of electrical works with contractors and site teams."
    },
    {
        icon: <ClipboardCheck size={32} />,
        title: "Project Compliance",
        description: "Support for project execution and electrical compliance requirements."
    },
    {
        icon: <MonitorPlay size={32} />,
        title: "Audio / Visual Solutions",
        description: ["CCTV Systems",
            "Sound & PA Systems"]

    },
    {
        icon: <CalendarCheck size={32} />,
        title: "Annual Maintenance Contracts (AMC)",
        description: ["Electrical AMC",
            "DG Set AMC",
            "AC AMC"]
    }
];

const Services = () => {
    return (
        <section id="services" className="section services-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Core Services</h2>
                    <div className="services-grid">
                        {servicesData.map((service, index) => (
                            <motion.div
                                className="service-card"
                                key={index}
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="service-icon">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                {Array.isArray(service.description) ? (
                                    <ul className="service-list">
                                        {service.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{service.description}</p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
