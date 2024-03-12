"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export default function AboutSection() {
    return (
        <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="h-[40rem] border-red-500 text-white  w-full flex flex-col items-center justify-around overflow-hidden rounded-md">
                <h1 className="mt-20 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    About
                </h1>
                <div className="p-2">

                    <h2 className="mb-4 italic text-xl md:text-2xl text-center text-neutral-300 ">I'am Yash Gharat</h2>
                    <p className="font-light pl-5 pr-5 text-sm md:p-1 text-center md:text-lg italic text-neutral-300 max-w-lg mx-auto">
                        A eager, flexible learner who aspires to be a full-stack web developer skilled with the MERN stack. I'm
                        eager to push boundaries, use my skills to their fullest potential, and advance as a developer. I'm excited
                        to make a meaningful contribution to the field of web development.

                    </p>
                    <p className="text-white">
                    </p>
                    <br />


                    <div className="w-[40rem] h-40 relative">
                        {/* Gradients */}
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />


                    </div>
                </div>
            </div>
        </div>
    );
}
