import React from 'react';
import Hero from '../components/Hero';
import ProductBanners from '../components/ProductBanners';
import Services from '../components/Services';
import FeaturedProducts from '../components/FeaturedProducts';
import Stats from '../components/Stats';

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductBanners />
      <Services />
      <FeaturedProducts />
      <Stats />
    </div>
  );
};

export default Home;