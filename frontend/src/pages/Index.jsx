import Navbar from '../components/navbar/Navbar';
import HeroSlider from '../components/index/HeroSlider';
import Reservation from '../components/index/Reservation';
import AboutUs from '../components/index/AboutUs';
import Explore from '../components/index/Explore';
import Why from '../components/index/Why';
import RoomServices from '../components/index/RoomServices';
import Other from '../components/index/Other';
import Footer from '../components/index/Footer';

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <Reservation/>
      <AboutUs/>
      <Explore/>
      <Why/>
      <RoomServices/>
      <Other/>
      <Footer/>
    </>
  );
};

export default Index;
