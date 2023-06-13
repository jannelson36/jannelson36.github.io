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
                        I'm Jan, a software developer extraordinaire driven by an 
                        insatiable passion for creating innovative solutions. 
                        From a young age, I was captivated by the world of technology, 
                        constantly exploring and tinkering with software. 
                        My creative spirit has evolved into a digital realm, 
                        where I thrive in the world of software development.{" "}
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
                        Over the years, my love for design 
                        and problem-solving led me down the path of software development. 
                        I specialize in crafting cutting-edge websites 
                        and applications that not only boast visually stunning interfaces 
                        but also deliver seamless user experiences. 
                        With my expertise in frameworks like{" "}
                        <span className="text-[#EBB700] font-bold">Next.js</span>,{" "}
                        <span className="text-[#EBB700] font-bold">React.js</span> and{" "}
                        <span className="text-[#EBB700] font-bold">Node.js</span>, I bring ideas to life 
                         with elegance and efficiency.{" "}
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
                        But my skills go beyond just the front-end. 
                        I have a firm grasp of the intricacies of {" "}
                        <span className="text-[#EBB700] font-bold">
                            object-oriented programming
                        </span>
                        ,{" "}
                        <span className="text-[#EBB700] font-bold">
                            data structures </span> and {" "}
                        <span className="text-[#EBB700] font-bold">
                            alogrithms
                        </span>,{" "}
                        allowing me to architect robust and scalable software solutions. 
                        Whether it's tackling complex backend tasks or optimizing performance, 
                        I thrive in delivering top-notch code that exceeds expectations.{" "}
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
                        <span className="text-[#EBB700] font-bold">Mighty Language &lsquo;C&rsquo;</span>.{" "}This 
                        breadth of knowledge empowers me to tackle diverse projects 
                        with confidence and precision.{" "}
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
                        Thank you for taking the time to explore my profile. 
                        If you're seeking a dedicated and talented software developer 
                        to join your team or collaborate on a project, 
                        I'm here and ready to make a significant impact. 
                        Let's turn your ideas into reality 
                        and build something truly remarkable together. 
                        Don't hesitate to reach out—I&apos;m excited to connect with you!
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
