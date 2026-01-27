"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import styles from "./Header.module.css";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Endeavours", href: "#endeavours" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
            <nav className={styles.nav}>
                <motion.a
                    href="#home"
                    className={styles.logo}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className={styles.logoText}>Vaibhav</span>
                    <span className={styles.logoDot}>.</span>
                </motion.a>

                {/* Desktop Navigation */}
                <motion.ul
                    className={styles.navLinks}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {navLinks.map((link, index) => (
                        <li key={link.name}>
                            <motion.a
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(link.href);
                                }}
                                whileHover={{ color: "#a855f7" }}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 * index }}
                            >
                                {link.name}
                            </motion.a>
                        </li>
                    ))}
                </motion.ul>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
                </button>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className={styles.mobileMenu}
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                        >
                            <ul className={styles.mobileNavLinks}>
                                {navLinks.map((link, index) => (
                                    <motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                    >
                                        <a
                                            href={link.href}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNavClick(link.href);
                                            }}
                                        >
                                            {link.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
