import React, { useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Searchdata from "../components/Searchdata";
import Profilecards from "../components/Profilecards";
import Work from "../components/Work";
import Reviews from "../components/Reviews";
import FaqSection from "../components/FaqSection";
import Calltoaction from "../components/Calltoaction";
import Footer from "../components/Footer";

import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to section if state or hash is present
    let sectionId = location.state?.scrollTo;
    if (!sectionId && window.location.hash) {
      sectionId = window.location.hash.replace("#", "");
    }
    if (sectionId) {
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div>
      <Header />
      <HeroSection />
      <Searchdata />
      <Profilecards />
      <Work />
      <Reviews />
      <FaqSection />
      <Calltoaction />
      <Footer />
    </div>
  );
};

export default Home;
