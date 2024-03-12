import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";



function HeroSection() {
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
                <div className="p-4 relative z-10 w-full text-center" >
                    <h1
                        className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                    >Master the art of music</h1>
                    <p
                        className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg italic mx-auto"
                    >Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
                    <div className="mt-4">
                        <Link href={"/courses"}>
                            {/* <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        Explore courses
                    </Button> */}
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    </>)
}
export default HeroSection