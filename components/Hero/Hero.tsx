"use client"

import React from "react";
import GoogleLoginButton from "./GoogleLoginButton";


const HeroSection = () => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-primary">
            {/* Floating ingredients */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-[20%] right-[25%] animate-float opacity-70" style={{ animationDelay: "0.5s" }}>
                    <img src="/tomato.png" alt="Tomato" className="w-16 h-16" />
                </div>
                <div className="absolute top-[30%] right-[35%] animate-float opacity-70" style={{ animationDelay: "1.2s" }}>
                    <img src="/basil.png" alt="Basil" className="w-12 h-12" />
                </div>
                <div className="absolute top-[40%] right-[30%] animate-float opacity-70" style={{ animationDelay: "0.8s" }}>
                    <img src="/olive.png" alt="Olive" className="w-10 h-10" />
                </div>
                <div className="absolute top-[35%] right-[20%] animate-float opacity-70" style={{ animationDelay: "1.5s" }}>
                    <img src="/oregano.png" alt="Oregano" className="w-8 h-8" />
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
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans tracking-tighter font-bold text-white leading-tight mb-6 animate-fade-in">
                            Where
                            {" "}
                            <span className="text-yellow-400">
                                Flavor
                            </span>
                            <br />
                            Takes the Wheel
                        </h2>

                        <p className="text-lg text-white/90 mb-8 animate-fade-in-delay-1 max-w-md font-sans">
                            Say Goodbye to Bland, Say Hello to Sizzle Fold Hand Crafted Pizzas Made with Love, One Delicious Bite at a Time
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
                            <GoogleLoginButton className="w-full sm:w-auto" />
                        </div>

                        <div className="mt-12 hidden md:block">
                            <img src="/arrow-curve.png" alt="Arrow curve" className="h-16 w-auto transform -rotate-45" />
                        </div>
                    </div>

                    <div className="relative animate-float">
                        <img
                            src="/pizza-slice.png"
                            alt="Pizza slice with floating ingredients"
                            className="w-full h-auto max-w-md mx-auto"
                        />
                    </div>
                </div>


            </div>

            {/* Bottom curve */}
            <div className="absolute bottom-0 left-0 right-0 z-0 h-16 bg-yellow-400 rounded-t-[50%] w-full">
                <p className="text-center font-sans font-medium text-black pt-5">© 2025 Sizzle 🍕</p>
            </div>
        </div>
    );
};

export default HeroSection;
