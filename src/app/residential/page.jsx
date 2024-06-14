"use client";
import { motion } from "framer-motion";
import Image from 'next/image';


const images = [
];

const captions = [
];

const secondLines = [
];

const Residential = () => {
    return (
        <motion.div 
        className="h-full" 
        initial={{ y:"-200vh" }} 
        animate={{ y:"0%" }} 
        transition={{ duration:1 }}
      >
      <div className="h-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 place-items-center overflow-auto">
      {images.map((imageUrl, index) => (
        <div key={index} className="relative h-64 w-96">
          <Image
            src={imageUrl}
            alt={`Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <p className="absolute bottom-0 left-0 bg-white/70 p-2 text-center w-full rounded-b">
            {captions[index]}
            <br />
            {secondLines[index]}
          </p>
        </div>
      ))}
    </div>
    </motion.div>
    )
}

export default Residential