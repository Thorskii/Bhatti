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
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 text-black dark:text-neutral-200">
            {/* TEXT CONTAINER */}
            <div className="">
                {/* BIOGRAPHY CONTAINER */}
                <div className="flex flex-col gap-12 justify-center">
                    {/* BIOGRAPHY TITLE */}
                    <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                    {/* BIOGRAPHY DESC */}
                    <p className="text-lg">
                        Hello! My name is Gurpreet Bhatti, and I am a dedicated real estate agent with a passion for helping clients achieve their goals. With a diverse background and a commitment to excellence, I bring a unique perspective to the real estate industry.
                        After retiring from the military and pursuing degrees in mechanical engineering and structural engineering, I embarked on a new adventure in real estate. Leveraging my experience running successful retail businesses, including smoke shops, gas stations, and warehouses, I developed a deep understanding of the market and a keen eye for high-margin investments.
                        My expertise extends to various property types, from gas stations and strip plazas to hotels/motels, smoke shops, and commercial/residential lands. I excel at evaluating investment opportunities, analyzing cap rates, and ensuring optimal returns. Negotiation is a skill I pride myself on, always striving to secure the best outcomes for my clients.
                        <br/>Beyond my professional life, I'm an avid lover of the outdoors. Whether it's camping, hunting, fishing, boating, running, or cycling, I find joy and inspiration in nature. In the summer, you'll often spot me cruising on my motorcycle, and during the winter, I'm out carving slopes on my snowboard. This personal passion for adventure allows me to connect with clients on a deeper level and understand their desires for properties that complement their active lifestyles.
                        With a strong focus on delivering exceptional service, attention to detail, and utilizing my engineering background, I offer clients a well-rounded approach to real estate. I take pride in guiding my clients through every step of the process, ensuring a smooth and successful transaction.
                        <br/>Whether you're a first-time buyer, a seasoned investor, or looking to sell your property, I'm here to provide expert guidance and personalized solutions. Let's work together, and with my expertise and dedication, we'll make your real estate dreams a reality!
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
                    <div className="flex gap-4">
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white dark:text-black dark:bg-slate-300 hover:bg-white hover:text-black">Realtor</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white dark:text-black dark:bg-slate-300 hover:bg-white hover:text-black">Veteran</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white dark:text-black dark:bg-slate-300 hover:bg-white hover:text-black">Entrepreneur</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white dark:text-black dark:bg-slate-300 hover:bg-white hover:text-black">Father</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white dark:text-black dark:bg-slate-300 hover:bg-white hover:text-black">Investor</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white dark:text-black dark:bg-slate-300 hover:bg-white hover:text-black">Engineer</div>
                    </div>
                    <div className=""></div>
                </div>
                {/* EXPERIENCE CONTAINER */}
                <div className="font-bold text-2xl">EXPERIENCE</div>
            </div>
            {/* SVG CONTAINER */}
            <div className="hidden"></div>
        </div>
    </motion.div>
    )
}

export default AboutPage