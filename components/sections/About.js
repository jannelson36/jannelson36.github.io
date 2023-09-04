import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function About() {
    return (
        <section id="aboutme">
            <div className="flex flex-row justify-between items-center mt-[7rem] mobile:text-[1.5rem] tablet:text-[1.5rem] laptop:text-[3rem] desktop:text-[3rem] font-bold w-[100%]">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 1,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.9,
                    }}
                    className="inline"
                >
                    About me
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 1,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 1,
                    }}
                    className="h-[2px] mobile:w-[60%] tablet:w-[80%] laptop:w-[80%] desktop:w-[80%] inline-block bg-[#174140]"
                ></motion.div>
            </div>
            <div className="flex justify-between items-start mobile:mt-[2rem] tablet:mt-[2rem] laptop:mt-[5rem] desktop:mt-[5rem] mobile:flex-col tablet:flex-col laptop:flex-row desktop:flex-row">
                <div className="mobile:w-[100%] tablet:w-[100%] laptop:w-[50%] desktop:w-[50%] text-[1rem]">
                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 1,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.6,
                        }}
                    >
                        Hello there!  <br />
                        I&apos;m Jan, a passionate software developer with a lifelong fascination for technology. 
                        My journey began in my youth, where I immersed myself in software exploration and innovation. 
                        Today, I&apos;ve evolved into a software developer extraordinaire, 
                        dedicated to crafting ingenious solutions.{" "}
                    </motion.p>
                    <br />
                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 1,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.6,
                        }}
                    >
                        My expertise lies in designing cutting-edge websites 
                        and applications that not only dazzle with their aesthetics 
                        but also deliver seamless user experiences. 
                         Leveraging frameworks like{" "}
                        <span className="text-[#EBB700] font-bold">Next.js</span>,{" "}
                        <span className="text-[#EBB700] font-bold">React.js</span> and{" "}
                        <span className="text-[#EBB700] font-bold">Node.js</span>, I transform ideas 
                        into elegant and efficient digital realities.{" "}
                    </motion.p>
                    <br />
                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 1,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.6,
                        }}
                    >
                        My skills extend beyond the frontend, 
                        as I tackle complex backend challenges and optimize performance, 
                        consistently delivering code that exceeds expectations.{" "}
                    </motion.p>
                    <br />
                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 1,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.7,
                        }}
                    >
                        As a versatile developer, 
                        I am fluent in various programming languages, including{" "}
                        <span className="text-[#EBB700] font-bold">JavaScript</span>,{" "}
                        <span className="text-[#EBB700] font-bold">TypeScript</span>,{" "}
                        <span className="text-[#EBB700] font-bold">Java</span>,{" "}
                        <span className="text-[#EBB700] font-bold">Python</span>,{" "}
                        <span className="text-[#EBB700] font-bold">SQL</span>,{" "}
                        <span className="text-[#EBB700] font-bold">PHP</span>, and the{" "}
                        <span className="text-[#EBB700] font-bold">venerable &lsquo;C&rsquo;</span>.{" "}This 
                        breadth of knowledge empowers me to tackle diverse projects 
                        with confidence and precision.
                        
                        
                        
                        As a versatile developer fluent in {" "}
                        <span className="text-[#EBB700] font-bold">JavaScript</span>,{" "}
                        <span className="text-[#EBB700] font-bold">TypeScript</span>,{" "}
                        <span className="text-[#EBB700] font-bold">Java</span>,{" "}
                        <span className="text-[#EBB700] font-bold">Python</span>,{" "}
                        <span className="text-[#EBB700] font-bold">SQL</span>,{" "}
                        <span className="text-[#EBB700] font-bold">PHP</span>, and the{" "}
                        <span className="text-[#EBB700] font-bold">venerable &lsquo;C&rsquo; language</span>.{" "} 
                        I possess the breadth of knowledge needed to confidently handle diverse projects.{" "}
                    </motion.p>
                    <br />
                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 1,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.7,
                        }}
                    >
                        If you&apos;re looking for a dedicated and skilled software developer 
                        to enhance your team or collaborate on a project, I&apos;m here, 
                        ready to make a significant impact. 
                        Let&apos;s transform your concepts into remarkable creations together—reach out, 
                        and let&apos;s connect!
                    </motion.p>
                </div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 1,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.8,
                    }}
                >
                    {/* <Image
                        src="/About-me.jpg"
                        alt="Image in the about section"
                        width={400}
                        height={600}
                        priority
                        className="w-[50%] border-[2px] border-solid border-white rounded-[5px] mobile:hidden tablet:hidden laptop:block desktop:block"
                    /> */}
                    <Image
                        src="/About-me-mobile.jpeg"
                        alt="Image in the about section"
                        width={400}
                        height={600}
                        priority
                        className="w-[100%] border-[2px] mt-5 border-solid border-white rounded-[5px]"
                        // className="w-[100%] border-[2px] mt-5 border-solid border-white rounded-[5px] mobile:block tablet:block laptop:hidden desktop:hidden"
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default About;
