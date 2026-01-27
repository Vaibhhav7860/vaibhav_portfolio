"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaPython, FaPaintBrush, FaVideo } from "react-icons/fa";
import { HiCode, HiColorSwatch, HiFilm } from "react-icons/hi";
import styles from "./Services.module.css";

const services = [
    {
        id: 1,
        icon: FaPython,
        secondaryIcon: HiCode,
        title: "Custom Software Development",
        description:
            "Building robust, scalable backend systems using Python. From RESTful APIs to microservices architecture, I deliver clean, maintainable code that powers your applications.",
        features: [
            "Backend API Development",
            "Database Design & Optimization",
            "Microservices Architecture",
            "Cloud Deployment (AWS/GCP)",
            "Performance Optimization",
            "API Integration",
        ],
        gradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
    },
    {
        id: 2,
        icon: FaPaintBrush,
        secondaryIcon: HiColorSwatch,
        title: "Graphics Designing",
        description:
            "Creating stunning visual designs that capture attention and communicate your brand message. From logos to complete brand identities, I bring your vision to life.",
        features: [
            "Logo & Brand Identity",
            "Social Media Graphics",
            "UI/UX Design",
            "Marketing Materials",
            "Presentation Design",
            "Digital Illustrations",
        ],
        gradient: "linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)",
    },
    {
        id: 3,
        icon: FaVideo,
        secondaryIcon: HiFilm,
        title: "Video Editing",
        description:
            "Professional video editing services that transform raw footage into engaging content. From promotional videos to YouTube content, I craft compelling visual stories.",
        features: [
            "Promotional Videos",
            "YouTube Content",
            "Motion Graphics",
            "Color Grading",
            "Sound Design",
            "Social Media Reels",
        ],
        gradient: "linear-gradient(135deg, #ef4444 0%, #f97316 100%)",
    },
];

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="services" className={styles.services} ref={ref}>
            <div className={styles.container}>
                {/* Section Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.sectionTag}>Services</span>
                    <h2 className={styles.sectionTitle}>
                        What I <span>Offer</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        Transform your ideas into reality with my diverse range of professional services
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                            whileHover={{ y: -8 }}
                        >
                            {/* Card Glow */}
                            <div
                                className={styles.cardGlow}
                                style={{ background: service.gradient }}
                            />

                            {/* Icon */}
                            <div className={styles.iconWrapper}>
                                <div
                                    className={styles.iconBg}
                                    style={{ background: service.gradient }}
                                />
                                <service.icon className={styles.icon} />
                            </div>

                            {/* Content */}
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>

                            {/* Features */}
                            <ul className={styles.features}>
                                {service.features.map((feature) => (
                                    <li key={feature} className={styles.featureItem}>
                                        <span className={styles.featureCheck}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <motion.a
                                href="#contact"
                                className={styles.ctaBtn}
                                style={{ background: service.gradient }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Get Started
                            </motion.a>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decorations */}
            <div className={styles.bgDecor}>
                <div className={styles.glowPurple}></div>
                <div className={styles.glowPink}></div>
            </div>
        </section>
    );
}
