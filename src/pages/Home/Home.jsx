import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./Hero";
import GallerySection from "./GallerySection";
import ShopByCategory from "./ShopByCatagory";
import NewArrival from "./NewArrival";
import Timeline from "./Timeline";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div data-aos="fade-up">
        <Hero />
      </div>
      <div data-aos="fade-up">
        <GallerySection />
      </div>
      <div data-aos="fade-up">
        <ShopByCategory />
      </div>
      <div data-aos="fade-up">
        <NewArrival />
      </div>
      <div data-aos="fade-up">
        <Timeline />
      </div>
    </div>
  );
};

export default Home;
