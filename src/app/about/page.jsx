"use client"
import { motion } from "framer-motion";

const AboutPage = () => {
    return (
        <motion.div 
        className="h-full" 
        initial={{ y:"-200vh" }} 
        animate={{ y:"0%" }} 
        transition={{ duration:1 }}
      >
        {/* CONTAINER */}
        <div className="h-full bg-[url('/usa.jpeg')] bg-no-repeat bg-center bg-cover">
        <div className="h-full overflow-auto lg:flex px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 text-black dark:text-neutral-200 bg-white bg-opacity-90 dark:bg-slate-800 dark:bg-opacity-70">
            {/* TEXT CONTAINER */}
            <div className="">
                {/* BIOGRAPHY CONTAINER */}
                <div className="flex flex-col gap-12 justify-center pt-16">
                    {/* BIOGRAPHY TITLE */}
                    <h1 className="font-bold text-2xl py-4">BIOGRAPHY</h1>
                    {/* BIOGRAPHY DESC */}
                    <p className="text-md lg:text-lg">
                    I’m Gurpreet Bhatti and my passion lies in helping clients achieve their goals using both my
                    military and engineering perspective. After retiring from the military and earning degrees in
                    mechanical and structural engineering, I embarked on an exciting journey in real estate. My
                    experience started long before my real estate journey while running successful retail
                    businesses, including smoke shops, gas stations, and warehouses. After gaining a deep
                    understanding of the market and a sharp eye for high-margin investments I realized I could help
                    others also achieve their investment goals by becoming their realtor. So it’s residential or
                    commercial (gas stations, strip plazas to hotels/motels and commercial/residential lands), I
                    specialize in evaluating opportunities, analyzing cap rates, and ensuring optimal returns.
                    Negotiation is my forte—I always strive for the best financial outcomes for my clients.
                    Beyond my professional life, I’m an outdoor enthusiast. Whether it’s camping, hunting, fishing,
                    boating, running, or cycling, nature fuels my spirit. In summer, you’ll find me camping with my
                    family and friends while in the winter, I’m carving slopes on my snowboard. Whether we share
                    the same personal passions or they differ, it would be my pleasure to serve you in achieving
                    your real estate goals.
                    Whether you’re a first-time buyer, seasoned investor, or selling your property, I’m here with
                    expert guidance and personalized solutions. Guiding clients through every step, I ensure
                    smooth, successful transactions. Let’s turn your real estate dreams into reality!
                    </p>
                    {/* BIOGRAPHY QUOTE */}
                    <span className="italic">Turning Dreams into Realty: Your Partner in Real Estate Excellence.</span>
                    {/* BIOGRAPHY SIGN SVG*/}
                    <div className=""></div>
                </div>
                {/* SKILLS CONTAINER */}
                <div className="flex flex-col gap-12 justify-center">
                    {/* SKILL TITLE */}
                    <h1 className="font-bold text-2xl">SKILLS</h1>
                    <div className="flex flex-wrap gap-4">
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white dark:text-black dark:bg-slate-300 hover:bg-white hover:text-black">Engineer</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white dark:text-black dark:bg-slate-300 hover:bg-white hover:text-black">Entrepreneur</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white dark:text-black dark:bg-slate-300 hover:bg-white hover:text-black">Father</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white dark:text-black dark:bg-slate-300 hover:bg-white hover:text-black">Investor</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white dark:text-black dark:bg-slate-300 hover:bg-white hover:text-black">Realtor</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white dark:text-black dark:bg-slate-300 hover:bg-white hover:text-black">Veteran</div>
                    </div>
                    <div className=""></div>
                </div>
                {/* EXPERIENCE CONTAINER */}
                {/* <div className="flex flex-col gap-12 justify-center">
                    <h1 className="font-bold text-2xl">EXPERIENCE</h1>
                    <p></p>
                </div> */}

            </div>
            </div>
            {/* SVG CONTAINER */}
            <div className="hidden"></div>
        </div>
    </motion.div>
    )
}

export default AboutPage