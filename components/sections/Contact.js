import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <section id="getintouch">
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
                        delay: 0.4,
                    }}
                    className="h-[2px] w-[30%] inline-block bg-[#226160]"
                ></motion.div>
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
                        delay: 0.1,
                    }}
                    className="inline"
                >
                    Get in touch
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
                        delay: 0.4,
                    }}
                    className="h-[2px] w-[30%] inline-block bg-[#226160]"
                ></motion.div>
            </div>
            <div className="flex flex-col justify-center items-center mobile:mt-[2rem] tablet:mt-[2rem] laptop:mt-[5rem] desktop:mt-[5rem] gap-10">
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
                        I&apos;m all ears and eager to hear from you! 
                        Whether it&apos;s a thrilling new opportunity or a captivating project collaboration, 
                        I&apos;m ready to dive in headfirst. 
                        Don&apos;t hesitate to reach out and ping me with your questions 
                        or simply to say hi. 
                        I promise to go above and beyond to ensure I get back to you as soon as possible. 
                        Let&apos;s embark on an exciting journey together and make magic happen!
                    </motion.p>
                </div>
                <div className="flex justify-evenly items-start rounded-[5px] flex-wrap relative gap-4 mobile:flex-col tablet:flex-col laptop:flex-row desktop:flex-row bg-[#113030] w-full p-5 mobile:text-[1.5rem] tablet:text-[1.5rem] laptop:text-[1rem] desktop:text-[1rem]">
                    <div className="flex flex-col justify-start gap-5 mobile:items-start tablet:items-start laptop:items-center desktop:items-center">
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
                                    duration: 1,
                                    delay: 0.3,
                                    type: "spring",
                                }} className="font-bold">Let&apos;s talk</motion.div>
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
                                duration: 1,
                                delay: 0.5,
                                type: "spring",
                            }}
                            className="gap-3 flex flex-row justify-center items-center px-[1rem] py-[0.50rem] bg-[#226160] rounded-[8px] text-[1rem] font-bold hover:cursor-pointer"
                        >
                                <div>
                                    <MailIcon/>
                                </div>
                            <Link href={"mailto:jannelson36@gmail.com"}>
                                Get in touch
                            </Link>
                        </motion.div>
                    </div>
                    <div className="flex flex-col justify-start gap-5 mobile:items-start tablet:items-start laptop:items-center desktop:items-center">
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
                                    duration: 1,
                                    delay: 0.3,
                                    type: "spring",
                                }} className="font-bold">Follow</motion.div>
                        <div className="flex flex-col justify-start items-start gap-3">
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
                                    duration: 1,
                                    delay: 0.7,
                                    type: "spring",
                                }}
                            >
                                <Link
                                    target="_blank"
                                    href={
                                        "https://linkedin.com/in/jan-nelson"
                                    }
                                >
                                    <div className="gap-3 flex flex-row justify-center items-center px-[1rem] py-[0.50rem] bg-[#226160] rounded-[8px] text-[1rem] font-bold">
                                        <div>
                                            <LinkedInIcon />
                                        </div>
                                        <div>Jan Nelson</div>
                                    </div>
                                </Link>
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
                                    duration: 1,
                                    delay: 0.8,
                                    type: "spring",
                                }}
                            >
                                <Link
                                    target="_blank"
                                    href={"https://github.com/jannelson36"}
                                >
                                    <div className="gap-3 flex flex-row justify-center items-center px-[1rem] py-[0.50rem] bg-[#226160] rounded-[8px] text-[1rem] font-bold">
                                        <div>
                                            <GitHubIcon />
                                        </div>
                                        <div>jannelson36</div>
                                    </div>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
