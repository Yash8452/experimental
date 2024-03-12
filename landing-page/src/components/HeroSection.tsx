import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";



function HeroSection() {
    const word = [
        {
            text: "Build",
        },
        {
            text: "awesome",
        },
        {
            text: "apps",
        },
        {
            text: "with",
        },
        {
            text: "Aceternity.",
        },
    ]
    return (<>
        <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div
                className="h-[100vh] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
            >
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <div className="h-[90vh] p-4 flex flex-col items-center justify-center text-center space-y-0  w-full" >



                    <TextGenerateEffect className=" md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                        words={"Hello,"} />

                    <TextGenerateEffect className=" md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                        words={"I'm Yash Gharat"} />

                    <TextGenerateEffect className="md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400" words={"A passionate  Developer"} />;
                    <div className="mt-4">
                        <Link href={"/"}>
                            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                RESUME
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-transparent via-indigo-500 dark:via-sky-700 to-sky-500 mb-1 h-[4px] w-[70%]" />
            </div>
        </div>

    </>)
}
export default HeroSection;



