"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div 
      className="h-full" 
      initial={{y:"-200vh"}} 
      animate={{y:"0%"}} 
      transition={{duration:1}}
    >
    <div className="h-full bg-[url('/slc.jpeg')] bg-no-repeat bg-center bg-cover">
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-auto items-center justify-center bg-white bg-opacity-70 dark:bg-slate-800 dark:bg-opacity-70">
          {/* IMAGE CONTAINER */}
          {/* <div className="lg:h-full lg:w-1/2 relative">
            <Image src="/gurpreet2.png" alt="" fill className="object-contain"/>
          </div> */}
          {/* TEXT CONTAINER */}
          <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center text-black dark:text-neutral-200">
            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-bold">Turning Dreams into Realty: Your Partner in Real Estate Excellence.</h1>
            {/* DESC */}
            <p className="md:text-xl">Military precision, engineering insight, and a passion for the outdoors converge in my commitment to guiding clients through their real estate journeys. From high-margin investments to properties tailored for active lifestyles, I leverage diverse experiences to ensure optimal returns. My motto: Precision, Passion, and Personalized Solutions – Making Your Realty Dreams a Reality!</p>
            {/* BUTTONS */}
            <div className="w-full flex gap-4 py-4">
              <button className="p-4 rounded-lg ring-1 ring-black dark:ring-neutral-200 bg-black dark:bg-slate-300 text-white dark:text-black"><Link href="/commercial">Portfolio</Link></button>
              <button className="p-4 rounded-lg ring-1 ring-black dark:ring-neutral-200 bg-white dark:bg-slate-700 bg-opacity-40 dark:bg-opacity-40"><Link href="/contact">Contact Me</Link></button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
)};

export default Homepage;
