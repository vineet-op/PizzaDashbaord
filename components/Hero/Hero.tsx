"use client"

import React from "react";
import GoogleLoginButton from "./GoogleLoginButton";
import Image from "next/image";
import { motion } from "motion/react"

const HeroSection = () => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-primary">
            {/* Floating ingredients */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-16 flex justify-center right-[10%]">
                    <Image src="/pizzaop.jpg" alt="pizza" width={500} height={500} className="w-full h-[38rem] rounded-2xl" />
                </div>
            </div>

            {/* Header/Navigation */}
            <header className="relative z-10 container mx-auto px-4 py-6">
                <div className="flex  items-center justify-center">
                    <h1 className="text-2xl font-bold text-white font-sans">Sizzle 🍕 </h1>
                </div>
            </header>

            {/* Main content */}
            <div className="relative z-10 container mx-auto px-4 mt-16 md:mt-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="md:pr-8 pl-5">
                        <motion.h2
                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 0.3, ease: 'ease' }}
                            className="text-5xl md:text-6xl lg:text-7xl font-sans tracking-tighter font-bold text-white leading-tight mb-6 animate-fade-in"
                        >
                            Where
                            {" "}
                            <span className="text-yellow-400">
                                Flavor
                            </span>
                            <br />
                            Takes the Wheel
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 0.3, ease: 'ease' }}
                            className="text-lg text-white/90 mb-8 animate-fade-in-delay-1 max-w-md font-sans"
                        >
                            Say Goodbye to Bland, Say Hello to Sizzle Fold Hand Crafted Pizzas Made with Love, One Delicious Bite at a Time
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 0.3, ease: 'ease' }}
                            className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2 "
                        >
                            <GoogleLoginButton
                                className="w-full sm:w-auto transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                            />
                        </motion.div>

                        <div className="mt-12 hidden md:block">
                            <img src="/arrow-curve.png" alt="Arrow curve" className="h-16 w-auto transform -rotate-45" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom curve */}
            <div className="absolute bottom-0 left-0 right-0 z-0 h-16 bg-yellow-400 rounded-t-[50%] w-full">
                <p className="text-center font-sans font-medium text-black pt-5">© 2025 Sizzle 🍕</p>
            </div>
        </div >
    );
};

export default HeroSection;
