"use client";

import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedinIn,
    FaTwitter,
    FaInstagram,
} from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import styles from "./Footer.module.css";

const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Vaibhhav7860", label: "GitHub" },
    {
        icon: FaLinkedinIn,
        href: "https://linkedin.com/in/vaibhhavoberoi786",
        label: "LinkedIn",
    },
    {
        icon: FaTwitter,
        href: "https://twitter.com/VaibhhavO20494",
        label: "Twitter",
    },
    {
        icon: FaInstagram,
        href: "https://instagram.com/wisdom.of.vaibhav",
        label: "Instagram",
    },
];

const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.glowTop}></div>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand Section */}
                    <motion.div
                        className={styles.brand}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className={styles.logo}>
                            Vaibhav<span>.</span>
                        </h3>
                        <p className={styles.tagline}>
                            Senior Software Engineer crafting elegant solutions with Python
                            and modern technologies.
                        </p>
                        <div className={styles.socialLinks}>
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        className={styles.column}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className={styles.columnTitle}>Quick Links</h4>
                        <ul className={styles.linkList}>
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        className={styles.column}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className={styles.columnTitle}>Services</h4>
                        <ul className={styles.linkList}>
                            <li>Python Development</li>
                            <li>Backend Systems</li>
                            <li>Graphics Design</li>
                            <li>Video Editing</li>
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className={styles.column}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h4 className={styles.columnTitle}>Get In Touch</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <HiMail size={18} />
                                <span>vaibhhav.oberoi33@gmail.com</span>
                            </li>
                            <li>
                                <HiPhone size={18} />
                                <span>+91 96950 29302</span>
                            </li>
                            <li>
                                <HiLocationMarker size={18} />
                                <span>Kanpur, UP, India</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    className={styles.bottomBar}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <p>© {currentYear} Vaibhav Oberoi. All rights reserved.</p>
                    <p className={styles.madeWith}>
                        Made with <span className={styles.heart}>❤</span> using Next.js
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
