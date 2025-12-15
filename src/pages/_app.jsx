import Navbar from "../components/Navbar.jsx";
import styles from "../styles/navbar.module.scss"; 
import Quiz from "../components/Quiz.jsx";
import Services from "../components/services.jsx";

export default function App({ Component, pageProps }) {
  
    const getLayout = Component.getLayout || ((page) => page);
    return(
      <>
      <Navbar />
      <Component {...pageProps} />
      <Quiz />
      <Services />
      
      </>
    )
  
  
}
