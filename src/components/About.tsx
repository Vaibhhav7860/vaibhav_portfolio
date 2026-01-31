"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FaCode, FaServer, FaDatabase, FaCogs } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { SiDevdotto } from "react-icons/si";
import styles from "./About.module.css";

const skills = [
    { name: "Python", level: 95 },
    { name: "Django/FastAPI/Flask", level: 90 },
    { name: "PostgreSQL/MongoDB", level: 88 },
    { name: "Docker/Kubernetes", level: 82 },
    { name: "AWS/Cloud Services", level: 85 },
    { name: "REST APIs/GraphQL", level: 92 },
    { name: "Kafka", level: 84 }
];

const highlights = [
    { icon: FaCode, value: 5, suffix: "+", label: "Years Experience" },
    { icon: FaServer, value: 50, suffix: "+", label: "Projects Delivered" },
    { icon: FaDatabase, value: 20, suffix: "+", label: "Happy Clients" },
    { icon: FaCogs, value: 15, suffix: "+", label: "Technologies" },
];

// Animated Counter Component
function CountUp({ end, suffix = "", duration = 20, isInView }: { end: number; suffix?: string; duration?: number; isInView: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) {
            setCount(0); // Reset when out of view
            return;
        }

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, isInView]);

    return <>{count}{suffix}</>;
}

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    return (
        <section id="about" className={styles.about} ref={ref}>
            <div className={styles.container}>
                {/* Section Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.sectionTag} aria-hidden="true">About Me</span>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.srOnly}>About Me - </span>
                        Passionate About Building <span>Scalable Solutions</span>
                    </h2>
                </motion.div>

                <div className={styles.content}>
                    {/* Left Side - About Text */}
                    <motion.div
                        className={styles.textContent}
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className={styles.intro}>
                            I&apos;m a <strong>Senior Software Engineer</strong> with over 5 years of experience
                            specializing in backend development using <strong>Python</strong>. My journey in
                            software development has been driven by a passion for creating efficient,
                            scalable, and maintainable systems.
                        </p>

                        <p className={styles.description}>
                            Throughout my career, I&apos;ve had the privilege of working with diverse startups
                            and established companies as a Backend Developer, where I&apos;ve designed and implemented robust backend
                            architectures, optimized database performance, and built RESTful APIs that
                            power modern applications.
                        </p>

                        <p className={styles.description}>
                            Beyond coding, I believe in continuous learning and staying updated with the
                            latest technologies. I&apos;m currently exploring Product Management with a focus
                            on Gen AI and Agentic AI systems, combining my technical expertise with
                            business acumen.
                        </p>

                        {/* Featured Article Card */}
                        <motion.a
                            href="https://dev.to/vaibhhav7860/how-i-build-scalable-backend-systems-using-python-34go"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.featuredCard}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            whileHover={{ scale: 1.02, y: -4 }}
                            aria-label="Read my featured article on DEV.to about building scalable backend systems"
                        >
                            <article className={styles.featuredContent}>
                                <div className={styles.featuredBadge}>
                                    <SiDevdotto className={styles.devtoIcon} />
                                    <span>Featured on DEV.to</span>
                                </div>
                                <h4 className={styles.featuredTitle}>
                                    How I Build Scalable Backend Systems Using Python
                                </h4>
                                <p className={styles.featuredTagline}>
                                    🚀 From architecture patterns to deployment strategies — the blueprint behind systems serving millions.
                                </p>
                                <span className={styles.readMore}>
                                    Read Article <HiExternalLink />
                                </span>
                            </article>
                        </motion.a>

                        {/* Highlights */}
                        <div className={styles.highlights}>
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    className={styles.highlightCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                >
                                    <item.icon className={styles.highlightIcon} />
                                    <div className={styles.highlightValue}>
                                        <CountUp end={item.value} suffix={item.suffix} isInView={isInView} duration={2} />
                                    </div>
                                    <div className={styles.highlightLabel}>{item.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side - Skills */}
                    <motion.div
                        className={styles.skillsContent}
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 className={styles.skillsTitle}>Technical Expertise</h3>
                        <div className={styles.skillsList}>
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className={styles.skillItem}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                >
                                    <div className={styles.skillHeader}>
                                        <span className={styles.skillName}>{skill.name}</span>
                                        <span className={styles.skillLevel}>{skill.level}%</span>
                                    </div>
                                    <div className={styles.skillBar}>
                                        <motion.div
                                            className={styles.skillProgress}
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: `${skill.level}%` } : {}}
                                            transition={{ duration: 1, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Tech Tags */}
                        <div className={styles.techTags}>
                            {["Python", "Javascript", "HTML", "CSS", "ReactJS", "NextJS", "Django", "FastAPI", "Flask", "Pandas", "Numpy", "Matplotlib", "Requests", "Beautiful Soup", "Tensorflow", "Keras", "Scrapy", "PostgreSQL", "MongoDB", "MySQL", "Flyway", "Redis", "Docker", "Git", "Linux", "Rest API", "Websocket", "GraphQL", "Kafka", "Google Cloud", "AWS"].map((tag, index) => (
                                <motion.span
                                    key={tag}
                                    className={styles.techTag}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
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
