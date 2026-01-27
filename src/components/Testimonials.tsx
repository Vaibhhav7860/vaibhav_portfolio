"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import styles from "./Testimonials.module.css";

const testimonials = [
    {
        id: 1,
        name: "Santosh Ray",
        role: "Research Analyst, ITS Group of Institutions",
        image: "/testimonials/client1.png",
        rating: 5,
        content:
            "I've had the privilege of working with Vaibhav, and I can confidently say that he is an exceptional software engineer with deep technical expertise, especially in machine learning. His ability to analyze complex problems and implement efficient, scalable solutions is truly remarkable. What sets Vaibhav apart is his combination of strong coding skills, architectural understanding, and the ability to bridge the gap between theory and practical application. He can easily break any complex problem statement into modular sub problems. His proficiency in algorithms, data structures, and system design is evident in the quality of his work. Whether it's about optimizing machine learning models or developing robust applications, he consistently delivers high-performing solutions. Beyond his technical acumen, Vaibhav is a fantastic collaborator. He communicates complex ideas with clarity, making him a valuable asset in cross-functional teams. His adaptability and problem-solving mindset enable him to tackle challenges efficiently, ensuring seamless project execution.  He is constantly pushing the boundaries of what's possible, staying up-to-date with the latest research and innovations in ML and generative AI, and bringing this knowledge to bear in every project he tackle. Any team would be lucky to have Vaibhav as a contributor, and I have no doubt that he will continue to make a significant impact in the field of software engineering, machine learning and AI. I highly recommend him to anyone looking for a skilled, insightful, and results-driven developer.",
    },
    {
        id: 2,
        name: "Amanda Zhang",
        role: "Software Engineer 2, RSA Security, USA",
        image: "/testimonials/client2.png",
        rating: 5,
        content:
            "I wholeheartedly endorse Vaibhav as an exceptional coach. Over an extended period, I have had the privilege of studying Python and SQL under his guidance. Vaibhav's teaching style is both instructive and illustrative, offering invaluable insights into complex concepts. Beyond imparting high-quality knowledge, he also imparts the skills needed to excel in the job market. Vaibhav goes the extra mile, dedicating additional time to assist with assignments and generously sharing a wealth of valuable resources with his students. Under his mentorship, my confidence in my abilities has significantly increased. He is committed to helping you develop the essential skills and is always available to address any questions or concerns. Our shared learning journey has been immensely enriching. If you are in search of a trainer to bolster your software skills, do not miss the opportunity to work with Vaibhav. I wholeheartedly recommend him for his unwavering commitment to helping you succeed.",
    },
    {
        id: 3,
        name: "Ananya Upadhyay",
        role: "Building early stage teams, Fractional HR",
        image: "/testimonials/client8.png",
        rating: 5,
        content:
            "Vaibhav was part of my mentorship batch and I found him to be a hardworking individual with an aim of pushing his potentials and utilising it to the fullest!! I wish him all the very best for future endeavours :)",
    },
    {
        id: 4,
        name: "Rajeev Sharma",
        role: "Product Manager, FinFlow",
        image: "/testimonials/client3.png",
        rating: 5,
        content:
            "Working with Vaibhav was a game-changer for our fintech platform. He built robust APIs that handle millions of transactions daily. His attention to security and code quality is remarkable. A true professional who delivers on time, every time.",
    },
    {
        id: 5,
        name: "Abhishek Goel",
        role: "Product Manager, Xlscout",
        image: "/testimonials/client4.jpg",
        rating: 5,
        content:
            "Not only did Vaibhav build our entire backend from scratch, but he also created stunning graphics for our brand. His diverse skill set and creative vision helped us launch a product that stands out in the market. Exceptional work!",
    },
    {
        id: 6,
        name: "Manisha Jadeja",
        role: "Manager, Deloitte",
        image: "/testimonials/client5.jpg",
        rating: 5,
        content:
            "Vaibhav's expertise in database optimization and microservices architecture is top-notch. He reduced our query response times by 70% and implemented a robust caching system. His technical knowledge and problem-solving skills are impressive.",
    },
    {
        id: 7,
        name: "Priya Sharma",
        role: "Marketing Lead, EY",
        image: "/testimonials/client6.jpg",
        rating: 5,
        content:
            "The video editing work Vaibhav did for our marketing campaigns was phenomenal. He has a great eye for storytelling and knows how to create content that engages audiences. Our social media engagement increased by 40% thanks to his work!",
    },
    {
        id: 8,
        name: "Jitin Talwar",
        role: "Founder, Xlscout",
        image: "/testimonials/client11.png",
        rating: 5,
        content:
            "As a non-technical founder, I needed someone who could not only code but also explain complex concepts simply. Vaibhav was perfect for this. He built our MVP in record time and was always available to discuss improvements. A reliable partner!",
    },
    {
        id: 9,
        name: "Vijender Kumar",
        role: "Business Development Executive, TT Consultant",
        image: "/testimonials/client7.png",
        rating: 5,
        content:
            "Vaibhav is very passionate and dedicated to his work. He is always ready to help and guide the next person very well. He has strong software skills that make him an effective leader of the software development division. He manages things very easily. I would say at last if anyone needs any help related to software development you can reach him at any time.",
    },
    {
        id: 10,
        name: "Aanchal Kathuria",
        role: "Java Developer, Chandigarh",
        image: "/testimonials/client9.png",
        rating: 5,
        content:
            "I have worked with many people throughout my journey, but working with Vaibhav was a unique and best experience I have gained till now. I started my Google Cloud journey with him, and he removed all the obstacles which came in my path towards my success. His work ethics are pristine, and he is easily adjustable to a given situation. He is flexible enough to go out of his way to help others. He brings integrity and intelligence to his work, and I believe his overall presence positively impacted me to achieve my goals efficiently in a smaller span of time. The biggest commendable quality in him is his soft-hearted down-to-earth nature which is missing in people these days. Moreover, he is an exceptional coder and he is in a process of developing a learning mindset and the best thing is he doesn't expect himself to be a knower of everything rather he tries to become a learner of everything. I am damn sure he will be a valuable asset and will bring prosperity to any company which he'll join in the future. Wish you good luck for all your future endeavors Vaibhav, may you be the brightest star in the future.",
    },
    {
        id: 11,
        name: "Shubhangi Mishra",
        role: "Programmer Analyst, Cognizant",
        image: "/testimonials/client10.png",
        rating: 5,
        content:
            "Vaibhav is a very assiduous person, I had the pleasure of working with him on a minor project. As a team leader he has been very motivating and supporting.I was consistently impressed by his essential managerial skills, his dedication, and coding skills. He has always been consistent in his efforts and ardent towards solving even the most complex problems. As a team leader as well as a programmer he earns my highest recommendation.",
    }
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    const [showScroll, setShowScroll] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className={styles.card}>
            <FaQuoteLeft className={styles.quoteIcon} />

            <div
                ref={contentRef}
                className={`${styles.content} ${showScroll ? styles.scrollable : ""}`}
                onMouseEnter={() => setShowScroll(true)}
                onMouseLeave={() => setShowScroll(false)}
            >
                <p>{testimonial.content}</p>
            </div>

            <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className={styles.star} />
                ))}
            </div>

            <div className={styles.author}>
                <div className={styles.avatar}>
                    <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className={styles.authorInfo}>
                    <h4 className={styles.authorName}>{testimonial.name}</h4>
                    <span className={styles.authorRole}>{testimonial.role}</span>
                </div>
            </div>
        </div>
    );
}

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Duplicate testimonials for seamless infinite scroll
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section id="testimonials" className={styles.testimonials} ref={ref}>
            <div className={styles.container}>
                {/* Section Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.sectionTag}>Testimonials</span>
                    <h2 className={styles.sectionTitle}>
                        What My <span>Clients Say</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        Feedback from amazing people I&apos;ve had the pleasure of working with
                    </p>
                </motion.div>
            </div>

            {/* Testimonials Carousel */}
            <motion.div
                className={styles.carouselWrapper}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <div className={styles.carousel}>
                    <div className={styles.carouselTrack}>
                        {duplicatedTestimonials.map((testimonial, index) => (
                            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
                        ))}
                    </div>
                </div>

                {/* Gradient Overlays */}
                <div className={styles.gradientLeft}></div>
                <div className={styles.gradientRight}></div>
            </motion.div>

            {/* Background Decorations */}
            <div className={styles.bgDecor}>
                <div className={styles.glowPurple}></div>
                <div className={styles.glowCyan}></div>
            </div>
        </section>
    );
}
