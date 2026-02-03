"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Experience.module.css";

const experiences = [
    {
        id: 1,
        role: "Software Development Engineer - 2",
        company: "Destm Technologies",
        logo: "/logos/destm.png",
        location: "Remote",
        period: "Nov 2025 – Present",
        description:
            "Architecting an ecommerce product (Python FastAPI), building end-to-end integration pipelines to sync products, orders, and inventory between major retail systems like NetSuite and Shopify. Developing AI-ready ETL pipelines to standardize diverse retail data into Ekyam's canonical ontology for cross-system analytics.",
        technologies: ["Python", "FastAPI", "ETL", "AI/ML", "NetSuite", "Shopify"],
    },
    {
        id: 2,
        role: "Software Development Engineer",
        company: "Lobb Logistics",
        logo: "/logos/lobb.jpg",
        location: "Bangalore, Karnataka",
        period: "Apr 2024 – Sep 2025",
        description:
            "Developed Lobb Care Control Tower (FastAPI) for priority ticket resolution across teams, reducing resolution time by 56%. Built Heuristic View showcasing critical metrics for truckers and transporters (payables, routes, trips), leading to 34% increase in logistical efficiency.",
        technologies: ["Python", "FastAPI", "PostgreSQL", "Analytics", "Docker"],
    },
    {
        id: 3,
        role: "Software Product Developer – 2",
        company: "Xlscout",
        logo: "/logos/xlscout.avif",
        location: "Mohali, Punjab",
        period: "Aug 2022 – Feb 2024",
        description:
            "Steered development of Novelty LLM using ParaEmbed embedding model (Hugging Face) achieving 40% better results. Built Drafting LLM on Django with Gen AI for automated patent drafting (43% faster). Developed Usage Global Counter (Flask) improving client conversion by 37%.",
        technologies: ["Python", "Django", "Flask", "LLMs", "Hugging Face", "GenAI"],
    },
    {
        id: 4,
        role: "Software Product Developer - 1",
        company: "Xlscout",
        logo: "/logos/xlscout.avif",
        location: "Mohali, Punjab",
        period: "Aug 2022 – Feb 2024",
        description:
            "Led end-to-end development of Novelty Checker (FastAPI) driving 64% growth in client base. Integrated GPT-3.5/4 in Ideacue for idea generation (44% more submissions). Implemented search, bucketing, and report generation features reducing research time by 35%.",
        technologies: ["Python", "FastAPI", "GPT-3.5", "GPT-4", "Celery", "Redis"],
    },
    {
        id: 5,
        role: "SDE Intern - Python",
        company: "39k Group",
        logo: "/logos/39k.jpg",
        location: "Gurugram, Haryana",
        period: "Jan 2022 – Jun 2022",
        description:
            "Built Python scripts for high-frequency trading data retrieval from 6 major exchanges using REST APIs and WebSockets. Optimized latency by 50% for 2x faster order execution. Developed React.js frontend for real-time Deribit order books, enhancing trading efficiency by 24%.",
        technologies: ["Python", "React.js", "PostgreSQL", "WebSockets", "REST APIs"],
    },
];


export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experience" className={styles.experience} ref={ref}>
            <div className={styles.container}>
                {/* Section Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.sectionTag}>Work Experience</span>
                    <h2 className={styles.sectionTitle}>
                        My Professional <span>Journey</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        A timeline of my career progression and the amazing teams I&apos;ve worked with
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className={styles.timeline}>
                    {/* Timeline Line */}
                    <motion.div
                        className={styles.timelineLine}
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : {}}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                        >
                            {/* Timeline Dot */}
                            <motion.div
                                className={styles.timelineDot}
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : {}}
                                transition={{ duration: 0.4, delay: 0.4 + index * 0.2 }}
                            >
                                <FaBriefcase />
                            </motion.div>

                            {/* Content Card */}
                            <div className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.companyLogo}>
                                        <Image
                                            src={exp.logo}
                                            alt={`${exp.company} logo`}
                                            fill
                                            style={{ objectFit: "contain" }}
                                        />
                                    </div>
                                    <div className={styles.headerText}>
                                        <h3 className={styles.role}>{exp.role}</h3>
                                        <span className={styles.company}>{exp.company}</span>
                                    </div>
                                </div>

                                <div className={styles.cardMeta}>
                                    <span className={styles.metaItem}>
                                        <FaCalendarAlt />
                                        {exp.period}
                                    </span>
                                    <span className={styles.metaItem}>
                                        <FaMapMarkerAlt />
                                        {exp.location}
                                    </span>
                                </div>

                                <p className={styles.description}>{exp.description}</p>

                                <div className={styles.technologies}>
                                    {exp.technologies.map((tech) => (
                                        <span key={tech} className={styles.techTag}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
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
