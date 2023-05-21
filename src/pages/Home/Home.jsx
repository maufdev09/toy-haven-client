import React from "react";
import Hero from "./Hero";
import GallerySection from "./GallerySection";
import ShopByCategory from "./ShopByCatagory";
import NewArrival from "./NewArrival";
import Timeline from "./Timeline";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <GallerySection></GallerySection>
      <ShopByCategory></ShopByCategory>
      <NewArrival></NewArrival>
      <Timeline></Timeline>
    </div>
  );
};

export default Home;
