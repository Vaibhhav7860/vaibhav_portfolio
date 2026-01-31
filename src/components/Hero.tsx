"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    FaGithub,
    FaLinkedinIn,
    FaTwitter,
    FaDownload,
} from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import styles from "./Hero.module.css";

const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Vaibhhav7860", label: "GitHub" },
    {
        icon: FaLinkedinIn,
        href: "https://www.linkedin.com/in/vaibhhavoberoi786",
        label: "LinkedIn",
    },
    {
        icon: FaTwitter,
        href: "https://twitter.com/vaibhavoberoi",
        label: "Twitter",
    },
];

const TypewriterText = () => {
    const roles = ["Python Developer", "Backend Engineer", "Problem Solver", "Tech Enthusiast"];

    return (
        <motion.span
            className={styles.typewriter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
        >
            {roles[0]}
        </motion.span>
    );
};

export default function Hero() {
    return (
        <section id="home" className={styles.hero}>
            {/* Background Elements */}
            <div className={styles.bgElements}>
                <div className={`${styles.glow} ${styles.glowPurple}`}></div>
                <div className={`${styles.glow} ${styles.glowCyan}`}></div>
                <div className={styles.gridPattern}></div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Left Content */}
                    <motion.div
                        className={styles.textContent}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.span
                            className={styles.greeting}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Hello, I&apos;m
                        </motion.span>

                        <motion.h1
                            className={styles.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <span>Vaibhav <span className={styles.highlight}>Oberoi</span></span>
                            <span className={styles.srOnly}> - Senior Software Engineer | Python Developer</span>
                        </motion.h1>

                        <motion.div
                            className={styles.role}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            aria-hidden="true"
                        >
                            <span className={styles.rolePrefix}>Senior Software Engineer</span>
                            <span className={styles.separator}>|</span>
                            <TypewriterText />
                        </motion.div>

                        <motion.p
                            className={styles.description}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            5+ years of experience crafting robust backend systems with Python.
                            Passionate about building scalable solutions that power modern applications.
                        </motion.p>

                        <motion.div
                            className={styles.buttons}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                        >
                            <a href="/Vaibhav_Oberoi_Resume.pdf" download className={`btn btn-primary ${styles.hireBtn}`}>
                                <FaDownload size={16} />
                                <span>Hire Me</span>
                            </a>
                            <a href="#contact" className="btn btn-secondary">
                                Let&apos;s Talk
                            </a>
                        </motion.div>

                        <motion.div
                            className={styles.socialLinks}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className={styles.socialLink}
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2 + 0.1 * index }}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Profile Image */}
                    <motion.div
                        className={styles.imageContainer}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        <div className={styles.imageWrapper}>
                            <div className={styles.imageGlow}></div>
                            <div className={styles.imageFrame}>
                                <div className={styles.imageBorder}>
                                    <Image
                                        src="/profile.png"
                                        alt="Vaibhav Oberoi"
                                        fill
                                        style={{ objectFit: "cover" }}
                                        priority
                                        className={styles.profileImage}
                                    />
                                </div>
                            </div>
                            {/* Decorative Elements */}
                            <motion.div
                                className={styles.floatingShape1}
                                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div
                                className={styles.floatingShape2}
                                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div
                                className={styles.floatingShape3}
                                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Code Card */}
                            <motion.div
                                className={styles.codeCard}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1 }}
                                whileHover={{ scale: 1.08 }}
                            >
                                <div className={styles.codeCardHeader}>
                                    <div className={styles.codeCardDots}>
                                        <span className={styles.dotRed}></span>
                                        <span className={styles.dotYellow}></span>
                                        <span className={styles.dotGreen}></span>
                                    </div>
                                    <span className={styles.codeCardTitle}>backend.py</span>
                                </div>
                                <div className={styles.codeCardBody}>
                                    <pre>
                                        <code>
                                            <span className={styles.keyword}>class</span>{" "}
                                            <span className={styles.className}>BackendEngineer</span>:
                                            {"\n"}
                                            {"  "}<span className={styles.keyword}>def</span>{" "}
                                            <span className={styles.function}>__init__</span>
                                            <span className={styles.paren}>(</span>
                                            <span className={styles.self}>self</span>
                                            <span className={styles.paren}>)</span>:
                                            {"\n"}
                                            {"    "}<span className={styles.self}>self</span>.
                                            <span className={styles.prop}>name</span> ={" "}
                                            <span className={styles.string}>&quot;Vaibhav&quot;</span>
                                            {"\n"}
                                            {"    "}<span className={styles.self}>self</span>.
                                            <span className={styles.prop}>role</span> ={" "}
                                            <span className={styles.string}>&quot;Senior SE&quot;</span>
                                            {"\n"}
                                            {"    "}<span className={styles.self}>self</span>.
                                            <span className={styles.prop}>stack</span> = [
                                            <span className={styles.string}>&quot;Python&quot;</span>,{" "}
                                            <span className={styles.string}>&quot;Django&quot;</span>]
                                        </code>
                                    </pre>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className={styles.scrollIndicator}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <HiArrowDown size={24} />
                    </motion.div>
                    <span>Scroll Down</span>
                </motion.div>
            </div>
        </section>
    );
}
