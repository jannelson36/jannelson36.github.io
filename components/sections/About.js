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
                        Hello there!  <br />
                        I&apos;m Jan, a passionate software developer with a lifelong fascination for technology. 
                        My journey began in my youth, where I immersed myself in software exploration and innovation. 
                        Today, I&apos;ve evolved into a software developer extraordinaire, 
                        dedicated to crafting ingenious solutions.
                    </motion.p>

                    <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
                        My expertise lies in designing cutting-edge websites and applications that not only dazzle with their aesthetics but also deliver seamless user experiences. 
                        Leveraging frameworks like <span className="text-yellow-600 dark:text-yellow-400 font-bold">Next.js</span>, <span className="text-yellow-600 dark:text-yellow-400 font-bold">React.js</span> and <span className="text-yellow-600 dark:text-yellow-400 font-bold">Node.js</span>, I transform ideas into elegant and efficient digital realities.
                    </motion.p>

                    <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
                        My skills extend beyond the frontend, as I tackle complex backend challenges and optimize performance, consistently delivering code that exceeds expectations.
                    </motion.p>

                    <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 1 }} transition={{ duration: 0.5, delay: 0.7 }}>
                        As a versatile developer, I am fluent in various programming languages, including 
                        <span className="text-yellow-600 dark:text-yellow-400 font-bold"> JavaScript</span>, 
                        <span className="text-yellow-600 dark:text-yellow-400 font-bold"> TypeScript</span>, 
                        <span className="text-yellow-600 dark:text-yellow-400 font-bold"> Java</span>, 
                        <span className="text-yellow-600 dark:text-yellow-400 font-bold"> Python</span>, 
                        <span className="text-yellow-600 dark:text-yellow-400 font-bold"> SQL</span>, 
                        <span className="text-yellow-600 dark:text-yellow-400 font-bold"> PHP</span>, and the
                        <span className="text-yellow-600 dark:text-yellow-400 font-bold"> venerable ‘C’</span>. 
                        This breadth of knowledge empowers me to tackle diverse projects with confidence and precision.
                    </motion.p>

                    <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 1 }} transition={{ duration: 0.5, delay: 0.7 }}>
                        If you&apos;re looking for a dedicated and skilled software developer to enhance your team or collaborate on a project, I&apos;m here, ready to make a significant impact. 
                        Let&apos;s transform your concepts into remarkable creations together—reach out, and let&apos;s connect!
                    </motion.p>
                </div>

                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 1 }} transition={{ duration: 0.5, delay: 0.8 }} className="w-full">
                    <div className="relative w-full max-w-md mx-auto">
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
