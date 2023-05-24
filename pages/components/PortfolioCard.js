import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import useSound from "use-sound";
import bounceSound2 from "../../public/bounceSound2.mp3"

export default function PortfolioECard (props) {
  const { id, title, image, description } = props
  const [playBounceSound2] = useSound(bounceSound2);

  return (
    <div>
      <div id="portfolio-card" className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1 max-auto flex flex-col justify-center items-center">

        <Image src={image} width={550} height={500} alt={title}  className="rounded-lg" />
        <h3 className="text-lg font-medium pt-8 pb-2  ">
          {title}
        </h3>
        <p className="py-2">
          {description}
        </p>
        
        <motion.div
          whileHover={{ y: -10 }}
          whileTap={{ scale: 0.9 }}
          onClick={playBounceSound2}
        >
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md my-4"><Link href={`/portfolio/web${id}`}>View More</Link></button>

        </motion.div>
        

      </div>
    </div>
  )
}

 