import Navbar from "../components/Navbar.jsx";
import styles from "../styles/navbar.module.scss"; 
import Quiz from "../components/Quiz.jsx";
import Services from "../components/services.jsx";
import '../styles/globals.css';
import WhyHomeMassage from "@/components/WhyHomeMassage.jsx";
import About from "../components/About.jsx";

export default function App({ Component, pageProps }) {
  
    const getLayout = Component.getLayout || ((page) => page);
    return(
      <>
      <Navbar />
      <Component {...pageProps} />
      <WhyHomeMassage />
      <Services />
      <About />
      
      </>
    )
  
  
}
