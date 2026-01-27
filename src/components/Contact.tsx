"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import styles from "./Contact.module.css";

const contactInfo = [
    {
        icon: HiMail,
        label: "Email",
        value: "vaibhhav.oberoi33@gmail.com",
        href: "mailto:vaibhhav.oberoi33@gmail.com",
    },
    {
        icon: HiPhone,
        label: "Phone",
        value: "+91 96950 29302",
        href: "tel:+919695029302",
    },
    {
        icon: HiLocationMarker,
        label: "Location",
        value: "Kanpur, UP, India",
        href: "#",
    },
];

const socialLinks = [
    { icon: FaGithub, href: "https://github.com/vaibhavoberoi", label: "GitHub" },
    { icon: FaLinkedinIn, href: "https://linkedin.com/in/vaibhhavoberoi786", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com/VaibhhavO20494", label: "Twitter" },
];

export default function Contact() {
    const ref = useRef(null);
    const formRef = useRef<HTMLFormElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // EmailJS integration
        try {
            // Build message with client email included
            const messageWithEmail = `From: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;

            await emailjs.send(
                'service_1m1oq2n',
                'template_ih7g458',
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: messageWithEmail,
                },
                '_QaLyDiyHdfyGQBPz'
            );

            setIsSubmitted(true);
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        } catch (error) {
            console.error("Failed to send message:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className={styles.contact} ref={ref}>
            <div className={styles.container}>
                {/* Section Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.sectionTag}>Contact</span>
                    <h2 className={styles.sectionTitle}>
                        Let&apos;s Work <span>Together</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life
                    </p>
                </motion.div>

                <div className={styles.content}>
                    {/* Contact Info */}
                    <motion.div
                        className={styles.infoSection}
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className={styles.infoTitle}>Get In Touch</h3>
                        <p className={styles.infoDescription}>
                            I&apos;m always excited to work on new projects and collaborate with amazing people.
                            Whether you need a backend system built from scratch or want to discuss a potential
                            partnership, feel free to reach out!
                        </p>

                        <div className={styles.contactItems}>
                            {contactInfo.map((item, index) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    className={styles.contactItem}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    whileHover={{ x: 8 }}
                                >
                                    <div className={styles.contactIcon}>
                                        <item.icon size={22} />
                                    </div>
                                    <div className={styles.contactDetails}>
                                        <span className={styles.contactLabel}>{item.label}</span>
                                        <span className={styles.contactValue}>{item.value}</span>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <div className={styles.socialSection}>
                            <span className={styles.socialLabel}>Follow Me</span>
                            <div className={styles.socialLinks}>
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className={styles.socialLink}
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                                    >
                                        <social.icon size={20} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className={styles.formSection}
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {isSubmitted ? (
                            <motion.div
                                className={styles.successMessage}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <div className={styles.successIcon}>✓</div>
                                <h3>Message Sent!</h3>
                                <p>Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
                                <button
                                    className={styles.resetBtn}
                                    onClick={() => setIsSubmitted(false)}
                                >
                                    Send Another Message
                                </button>
                            </motion.div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name" className={styles.formLabel}>
                                            Your Name <span>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Doe"
                                            className={styles.formInput}
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email" className={styles.formLabel}>
                                            Your Email <span>*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@example.com"
                                            className={styles.formInput}
                                        />
                                    </div>
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="phone" className={styles.formLabel}>
                                            Phone Number <span>*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="+91 XXXXX XXXXX"
                                            className={styles.formInput}
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="subject" className={styles.formLabel}>
                                            Subject <span>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            placeholder="Project Inquiry"
                                            className={styles.formInput}
                                        />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message" className={styles.formLabel}>
                                        Your Message <span>*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Tell me about your project..."
                                        rows={5}
                                        className={styles.formTextarea}
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className={styles.submitBtn}
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <span className={styles.spinner}></span>
                                    ) : (
                                        <>
                                            <HiPaperAirplane size={20} />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Background Decorations */}
            <div className={styles.bgDecor}>
                <div className={styles.glowPurple}></div>
                <div className={styles.glowCyan}></div>
            </div>
        </section>
    );
}
