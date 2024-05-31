import React from 'react';
import Banner from '../../components/banner';
import ShowCase from '../showcase';
import Contact from '../contact';

const Home = () => {
  return (
    <div className="pt-16">
      <Banner />
      <ShowCase />
      <Contact />
    </div>
  );
};

export default Home;
