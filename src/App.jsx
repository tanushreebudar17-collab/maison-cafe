import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BookingBar from "./components/BookingBar";
import AboutCafe from "./components/AboutCafe";
import SignatureMenu from "./components/SignatureMenu";
import BestSellers from "./components/BestSellers";
import CoffeeExperience from "./components/CoffeExperience";
import SpecialOffers from "./components/SpecialOffers";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import MeetOurTeam from "./components/MeetOurTeam";
import Testimonials from "./components/Testimonials";
import Reservation from "./components/Reservation";
import Location from "./components/Location";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BookingBar />
      <AboutCafe />
      <SignatureMenu />
      <BestSellers/>
      <CoffeeExperience/>
      <SpecialOffers/>
      <WhyChooseUs/>
      <Gallery/>
      <MeetOurTeam/>
      <Testimonials/>
      <Reservation/>
      <Location/>
      <Newsletter/>
      <Footer/>
    </>
  );
}

export default App;