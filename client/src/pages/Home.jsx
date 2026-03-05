import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedSections from '../components/FeaturedSection';
import TrailersSection from '../components/TrailersSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedSections />
      <TrailersSection />
    </>
  );
};

export default Home;
