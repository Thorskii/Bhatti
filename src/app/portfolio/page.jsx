"use client";
import { motion } from "framer-motion";
import Image from 'next/image';


const images = [
  '/1.jpeg',
  '/2.png',
  '/3.png',
  '/4.jpeg',
  '/5.png',
  '/7.png',
  '/8.jpeg',
];

const captions = [
  '202 12th ST Ogden, UT',
  '150 UINTA DR. Green River, WY',
  '152 West US Highway40, Vernal, UT',
  '1977 Dewar Dr. Rock Springs, WY',
  '3612 W 4700 S WVC, UT',
  '101 Gateway BLVD Rock Springs, WY',
  '4212 W Cactus Rd Phoenix, AZ',
];

const secondLines = [
  'SOLD 2024',
  'SOLD 2024',
  'SOLD 2024',
  'SOLD 2023',
  'SOLD 2020',
  'SOLD 2023',
  'SOLD 2023',
];

const PortfolioPage = () => {
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

export default PortfolioPage