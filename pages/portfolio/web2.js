import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";

import { TbBrandNextjs } from 'react-icons/tb';
import { SiBootstrap, SiFigma } from 'react-icons/si';  

import { useState, useEffect } from 'react';
import portfolioCardData from '../../data/portfolioCardData';
import Footer from '../components/Footer';


export default function Web2 (props) {
  const { id } = props;

  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const project = portfolioCardData.find(item => item.id === 2);
      setProject(project);
    };
    fetchData();
  }, [id]);



  if (!project) return "null";
  const { title, video, image, description_detail, code, live } = project;
  console.log("Web1 is working");

  return (
    <div>
      <Head>
        <title>Web1</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white px-10 md:px-20 lg:px-40">
        <section >
          <nav className="flex items-center justify-between py-10 mb-12">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity }}
            >
              <Image src="/logo3.png" alt="logo" width={100} height={100} objectFit="cover" />
            </motion.div>
            <Link className=" bg-gradient-to-r from-orange-600 to-purple-800  text-white px-4 py-2 rounded-md" href="/" style={{ height: '40px', width: '80px' }}>Home</Link>
          </nav>
        </section>
        <section className="flex flex-col items-center justify-center my-10 max-w-5xl mx-auto">

          <h2 className="text-2xl mb-10 md:text-3xl">{title}</h2>
          <Image src={image} width={800} height={500} alt={title} className="rounded-lg mb-8" />

          <p className="text-medium py-5 leading-8   text-gray-800 md:text-xl max-w-3xl mx-auto dark:text-gray-200">{description_detail}</p>

          <div className="text-4xl flex justify-center gap-10 pb-10 text-purple-700 md:text-5xl dark:text-gray-200">
            <TbBrandNextjs />
            <SiBootstrap />
            <SiFigma />
          </div>

          <div className="flex items-center justify-center gap-10 mb-20">
            <button className="bg-purple-500 text-white px-4 py-2 rounded-md mt-4"><Link href={code}>View Code</Link></button>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-md mt-4"><Link href={live}>Live version</Link></button>
          </div>


          <video controls className="h-auto md:max-w-3xl" >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>



        </section>
      </main>
      <Footer />

    </div>


  );
}


