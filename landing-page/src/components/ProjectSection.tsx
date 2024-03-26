import Card from "./Card";
import { PinContainer } from "./ui/3d-pin";
import { SparklesCore } from "./ui/sparkles";

export default function ProjectSection() {
    return (<>
        <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="h-[100vh]  md:mt-0 text-white w-full flex flex-col items-center justify-around rounded-md">

                <h2 className="font-bold mt-20 text-2xl md:text-4xl text-center text-neutral-300 ">PROJECTS</h2>

                <div className=" flex flex-wrap  md:gap-y-8 overflow-y-auto md:overflow-hidden item-center justify-center">
                    <Card name={`LinkUp`} description={`A platform designed to connect people`} link={`https://github.com/yash8452/linkup`} image={`https://res.cloudinary.com/dpz01giqq/image/upload/v1709302266/LinkUp_i3foq1.png`} />
                    <Card name={`Website-MockUp-Generator`} description={`Generates mockups of the website`} link={`https://github.com/Yash8452/Website-MockUp-Generator/`} image={`https://res.cloudinary.com/dpz01giqq/image/upload/c_fill,w_1920,h_1080,g_auto/v1711440280/web_cruwlr.png`} />
                    <Card name={`Dashboard Visualization`} description={`Analyis the given json data`} link={`https://github.com/Yash8452/dashboard/`} image={`https://res.cloudinary.com/dpz01giqq/image/upload/c_fill,w_1920,h_1080,g_auto/v1710706093/darkdashboard_djvpe7.png`} />
                </div>

                <div className="bg-gradient-to-r from-transparent via-indigo-500 dark:via-sky-700 to-sky-500 mb-1 h-[4px] w-[70%]" />


            </div>

        </div>
    </>)
}