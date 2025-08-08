import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function About() {
    return (
        <section id="aboutme" className="">
            <div className="flex flex-row justify-between items-center mt-[3rem] mobile:text-[1.5rem] tablet:text-[1.5rem] laptop:text-[3rem] desktop:text-[3rem] font-bold w-full">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="inline"
                >
                    About me
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="h-[2px] w-1/2 tablet:w-2/3 laptop:w-4/5 inline-block bg-gray-300 dark:bg-[#174140]"
                ></motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 items-start">
                <div className="text-[1rem] space-y-4 leading-relaxed">
                    <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
                        Hello, I’m Jan — bridging software expertise with emerging AI-driven innovation. <br />
                        I&apos;m a results-oriented software developer with 
                        a proven track record of transforming concepts into functional, 
                        impactful digital solutions. 
                        My journey started with a deep curiosity for technology 
                        and a hands-on approach to learning. 
                        Over time, that curiosity evolved into a career built on creating websites, 
                        applications, and systems that are as intuitive as they are powerful.
                    </motion.p>

                    <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
                    With expertise in <span className="text-yellow-600 dark:text-yellow-400 font-bold">Next.js</span>, <span className="text-yellow-600 dark:text-yellow-400 font-bold">React.js</span> and <span className="text-yellow-600 dark:text-yellow-400 font-bold">Node.js</span>, 
                    and a strong grasp of backend development, 
                    I build solutions that balance performance, scalability, and user experience. 
                    </motion.p>

                    <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
                        My technical toolkit spans 
                        <span className="text-yellow-600 dark:text-yellow-400 font-bold"> JavaScript</span>, 
                        <span className="text-yellow-600 dark:text-yellow-400 font-bold"> TypeScript</span>, 
                        <span className="text-yellow-600 dark:text-yellow-400 font-bold"> Java</span>, 
                        <span className="text-yellow-600 dark:text-yellow-400 font-bold"> Python</span>, 
                        <span className="text-yellow-600 dark:text-yellow-400 font-bold"> SQL</span>, 
                        <span className="text-yellow-600 dark:text-yellow-400 font-bold"> PHP</span>, and the
                        <span className="text-yellow-600 dark:text-yellow-400 font-bold"> venerable ‘C’</span>,  
                        enabling me to adapt quickly to diverse project needs.
                    </motion.p>

                    <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 1 }} transition={{ duration: 0.5, delay: 0.7 }}>
                        Recently, I&apos;ve expanded my focus toward context engineering, prompt engineering, 
                        and AI-powered application development — 
                        blending my software background with next-generation capabilities 
                        that future-proof solutions and drive measurable results.
                    </motion.p>

                    <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 1 }} transition={{ duration: 0.5, delay: 0.7 }}>
                       I thrive in environments where innovation meets problem-solving, 
                       and I&apos;m committed to delivering value whether through team collaboration or independent projects. 
                       If you&apos;re seeking a developer who can code, innovate, and strategically adapt to the future of technology, 
                       I&apos;m ready to contribute from day one.
                       Let&apos;s connect and explore how I can help your team achieve its goals.
                    </motion.p>
                </div>

                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 1 }} transition={{ duration: 0.5, delay: 0.8 }} className="w-full py-10">
                    <div className="relative w-full max-w-md mx-auto" >
                        <Image
                            src="/About-me-mobile.jpeg"
                            alt="Image in the about section"
                            width={800}
                            height={1200}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                            className="w-full h-auto rounded-[8px] border border-white/20"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
