import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Bonjour, je m'appelle</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          DJAFFAR RAYANE
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Je suis développeur web full-stack.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Je suis un développeur web full-stack spécialisé dans la construction
          (et occasionnellement dans la conception) d'expériences numériques
          exceptionnelles. Actuellement, je me concentre sur la création
          d'applications web responsive.
        </p>
        <div>
          <Link
            to='work'
            smooth={true}
            duration={500}
            className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 w-52'>
            Voir mes projets
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
