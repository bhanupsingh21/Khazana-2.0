import React from 'react';
import Hero from '../components/Hero';
import ThemeSong from '../components/ThemeSong';
import Founders from '../components/Founders';
import About from '../components/About';
import Jury from '../components/Jury';
import Partners from '../components/Partners';

const Home = ({ onOpenModal }) => {
  return (
    <>
      <Hero />
      <Founders />
      <ThemeSong onOpenModal={onOpenModal} />
      <About />
      <Jury />
      <Partners />
    </>
  );
};

export default Home;
