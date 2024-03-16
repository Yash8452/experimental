"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import {
    IconSend,
} from "@tabler/icons-react";
import { Button, MovingBorder } from "./ui/moving-border";

function ContactSection() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <>
            <div className="h-[100vh] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

                <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
                    <h2 className="italic font-bold text-xl text-neutral-800 dark:text-neutral-200">
                        Hey,
                    </h2>
                    <p className="italic text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                        Whether you have questions, ideas, or just want to say hi, I'm all ears. Let's connect!
                    </p>

                    <form className="my-8" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                            <div>
                                <Label htmlFor="firstname">First name</Label>
                                <Input id="firstname" placeholder="Tyler" type="text" />
                            </div>
                            <div>
                                <Label htmlFor="lastname">Last name</Label>
                                <Input id="lastname" placeholder="Durden" type="text" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="message">Message</Label>
                            <Input className="h-[5rem]" id="message" placeholder="Let your words dance in this box..." type="text" />
                        </div>
                        <div className="flex justify-center md:justify-center">

                            <Button
                                className="bg-black"
                                type="submit"
                            >

                                Send

                            </Button>
                        </div>

                        <div className="bg-gradient-to-r from-transparent via-indigo-500 dark:via-sky-700 to-sky-500 my-8 h-[2.5px] w-full" />
                    </form>
                </div>


            </div>
        </>
    )
}

export default ContactSection