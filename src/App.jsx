import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
//import { Gallery } from "./components/gallery";
import {Carrousel} from "./components/carrouser"
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Submit from "./components/submit"

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Carrousel data={landingPageData.Galleria}  />

      {/* <Gallery /> */}
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Submit data={landingPageData.Contact}  />

      {/* <Contact data={landingPageData.Contact} /> */}
    </div>
  );
};

export default App;
