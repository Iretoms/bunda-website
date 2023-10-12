import BAboutUs from "../components/BAboutUs";
import BHero from "../components/BHero";
import ContactUs from "../components/ContactUs";
import Testimony from "../components/Testimony";
import Footer from "../components/Footer";



const Home = () => {
    return (
        <>
           <BHero/> 
           <BAboutUs/>
           <Testimony/>
           <ContactUs/>
           <Footer/>
        </>
    );
};

export default Home;