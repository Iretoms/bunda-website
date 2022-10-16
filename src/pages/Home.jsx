import BAboutUs from "../components/BAboutUs";
import BHero from "../components/BHero";
import ContactUs from "../components/ContactUs";
import Testimony from "../components/Testimony";


const Home = () => {
    return (
        <>
           <BHero/> 
           <BAboutUs/>
           <Testimony/>
           <ContactUs/>
        </>
    );
};

export default Home;