import React from "react";

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] flex justify-center items-center'>
          <div className='pb-8 pl-4 mt-24'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Qui suis-je ?
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>
              Bonjour, je m'appelle Djaffar Rayane et je suis ravi de vous
              rencontrer. N'hésitez pas à jeter un coup d'œil.
            </p>
          </div>
          <div>
            <p className='pt-2'>
              Je suis passionné par la création d'applications web qui
              améliorent la vie de ceux qui m'entourent. Je suis spécialisé dans
              la création d'applications et sites web respponsive pour des
              clients allant des particuliers et des petites entreprises
              jusqu'aux jusqu'aux grandes entreprises. Que feriez-vous si vous
              aviez d'un expert web à portée de main ?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
