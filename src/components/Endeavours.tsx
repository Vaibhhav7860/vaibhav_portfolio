"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaRocket, FaBrain, FaCertificate } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import styles from "./Endeavours.module.css";

const endeavours = [
    {
        id: 1,
        icon: FaBrain,
        title: "Product Management with Gen & Agentic AI",
        institution: "Bitsom (BITS Pilani)",
        status: "In Progress",
        statusType: "ongoing",
        description:
            "Pursuing an advanced program focused on Product Management principles combined with cutting-edge Generative AI and Agentic AI technologies. Learning to build AI-powered products and manage AI-driven product lifecycles.",
        link: "#",
        highlights: ["Gen AI Applications", "Agentic AI Systems", "Product Strategy", "AI Product Lifecycle"],
    },
    {
        id: 2,
        icon: FaRocket,
        title: "Building SaaS Products",
        institution: "Personal Projects",
        status: "Active",
        statusType: "ongoing",
        description:
            "Actively developing and launching fullstack SaaS products leveraging my backend expertise. Building solutions that solve real-world problems using Python, modern architectures, and cloud technologies.",
        link: "#",
        highlights: ["SaaS Development", "MVP Building", "Product Launch", "User Feedback"],
    },
    {
        id: 3,
        icon: FaCertificate,
        title: "AWS Solutions Architect",
        institution: "Amazon Web Services",
        status: "Certified",
        statusType: "completed",
        description:
            "Achieved AWS Solutions Architect certification, demonstrating expertise in designing distributed systems, implementing scalable architectures, and leveraging AWS services for production workloads.",
        link: "#",
        highlights: ["Cloud Architecture", "AWS Services", "Best Practices", "Security"],
    },
    {
        id: 4,
        icon: FaGraduationCap,
        title: "Open Source Contributions",
        institution: "GitHub Community",
        status: "Ongoing",
        statusType: "ongoing",
        description:
            "Contributing to various open-source Python projects and maintaining personal packages. Sharing knowledge with the developer community and learning from collaborative development.",
        link: "#",
        highlights: ["Python Libraries", "Code Review", "Documentation", "Community"],
    },
];

export default function Endeavours() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="endeavours" className={styles.endeavours} ref={ref}>
            <div className={styles.container}>
                {/* Section Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.sectionTag}>Current Endeavours</span>
                    <h2 className={styles.sectionTitle}>
                        What I&apos;m <span>Working On</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        Continuous learning and growth through various initiatives and certifications
                    </p>
                </motion.div>

                {/* Endeavours Grid */}
                <div className={styles.grid}>
                    {endeavours.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            whileHover={{ y: -6 }}
                        >
                            {/* Status Badge */}
                            <div className={`${styles.statusBadge} ${styles[item.statusType]}`}>
                                {item.status}
                            </div>

                            {/* Icon */}
                            <div className={styles.iconWrapper}>
                                <item.icon className={styles.icon} />
                            </div>

                            {/* Content */}
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <span className={styles.institution}>{item.institution}</span>
                            <p className={styles.description}>{item.description}</p>

                            {/* Highlights */}
                            <div className={styles.highlights}>
                                {item.highlights.map((highlight) => (
                                    <span key={highlight} className={styles.highlightTag}>
                                        {highlight}
                                    </span>
                                ))}
                            </div>

                            {/* Learn More Link */}
                            <a href={item.link} className={styles.learnMore}>
                                Learn More <HiExternalLink />
                            </a>
                        </motion.div>
                    ))}
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
