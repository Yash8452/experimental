import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TypewriterEffect, TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Button } from "./ui/moving-border";



function HeroSection() {
    const words = [

        {
            text: "I,m"
        },
        {
            text: "Yash_Gharat",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];

    return (<>
        <div className="h-[100vh] max-w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div
                className="h-[100vh] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
            >
                <div className="h-[90vh] flex flex-col items-center justify-center text-center space-y-0  w-full" >



                    <TextGenerateEffect className=" md:mt-0 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                        words={"Hello,"} />

                    <TypewriterEffect className=" md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                        words={words} />

                    <TextGenerateEffect className="md:mt-0 animate-pulse text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400" words={"WEB DEVELOPER"} />;
                    <div className="mt-4">
                        <Link href={"https://drive.google.com/file/d/15l38Pk5HDFgQa-ipN4kpXle3EO3ssyXp/view"} target="_blank">
                            <Button borderRadius="1.75rem"
                                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
                                RESUME
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-transparent via-indigo-500 dark:via-sky-700 to-sky-500 mb-1 h-[4px] w-[70%]" />
            </div>
        </div>

    </>)
}
export default HeroSection;



