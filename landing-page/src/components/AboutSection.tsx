"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export default function AboutSection() {
    return (
        <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="h-[100vh] text-white  w-full flex flex-col items-center justify-around  overflow-hidden rounded-md">
                <h1 className="md:mt-0 text-xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    ABOUT
                </h1>
                {/* <div className="bg-gradient-to-r from-transparent via-indigo-500 dark:via-sky-700 to-sky-500 mb-1 h-[4px] w-[70%]" /> */}

                <div className="p-4 md:px-36">

                    <h2 className="mb-4 italic text-xl md:text-2xl text-center text-neutral-300 ">I'am Yash Gharat</h2>
                    <p className="italic font-light text-lg md:mt-0  md:text-2xl text-center mb-4">
                        A eager, flexible learner who aspires to be a full-stack web developer skilled with the MERN stack. I'm
                        eager to push boundaries, use my skills to their fullest potential, and advance as a developer. I'm excited
                        to make a meaningful contribution to the field of web development.

                    </p>



                </div>
                <div className="bg-gradient-to-r from-transparent via-indigo-500 dark:via-sky-700 to-sky-500 mb-1 h-[4px] w-[70%]" />
            </div>

        </div>
    );
}
