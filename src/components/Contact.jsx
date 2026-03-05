import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('Sending...');

        const formData = {
            name: e.target.name.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        };

        try {
            // Send request to the new Vercel Serverless Function
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                e.target.reset();
            } else {
                setStatus('Failed to send message.');
            }
        } catch (error) {
            setStatus('Error sending message. Is the backend running?');
        } finally {
            setIsSubmitting(false);
            // Clear success message after 3 seconds
            setTimeout(() => setStatus(''), 3000);
        }
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Get in Touch</h2>
                    <div className="contact-wrapper">
                        <div className="contact-info">
                            <h3>Contact Information</h3>
                            <p>Ready to discuss your electrical requirements? Reach out directly via phone or email.</p>

                            <div className="contact-details">
                                <a href="tel:+919926490008" className="contact-item">
                                    <div className="icon-box"><Phone size={24} /></div>
                                    <div>
                                        <span className="label">Phone</span>
                                        <span className="value">+91 99264 90008</span>
                                    </div>
                                </a>

                                <a href="mailto:kanha.151078@gmail.com" className="contact-item">
                                    <div className="icon-box"><Mail size={24} /></div>
                                    <div>
                                        <span className="label">Email</span>
                                        <span className="value">kanha.151078@gmail.com</span>
                                    </div>
                                </a>

                                <div className="contact-item">
                                    <div className="icon-box"><MapPin size={24} /></div>
                                    <div>
                                        <span className="label">Location</span>
                                        <span className="value">India (Available for Site Visits)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-container">
                            <h3>Send a Message</h3>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" required placeholder="Your Name or Company" disabled={isSubmitting} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" name="subject" required placeholder="Project Inquiry / Tender" disabled={isSubmitting} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" rows="4" required placeholder="Describe your requirements..." disabled={isSubmitting}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary full-width" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : (
                                        <>Send Message <Send size={18} style={{ marginLeft: '8px' }} /></>
                                    )}
                                </button>
                                {status && <p className="form-status" style={{ marginTop: '15px', color: status.includes('success') ? 'green' : 'red' }}>{status}</p>}
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
