import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css';
import Hero from '../components/Hero';
import ScrollToTop from '../components/ScrollToTop';
import Contact from '../components/Contact';
import { useWindowScroll } from 'react-use';

export default function Home() {

  const {y: pageYOffset} = useWindowScroll();
  console.log(pageYOffset);
  const scrollTop = () => {
    window.scroll({top: 0, behavior: 'smooth'})
  }

  return (
    <div className={styles.container}>
      <Hero />
      <Contact />
      {pageYOffset > 300 && <ScrollToTop scrollTop={scrollTop}/>}
    </div>
  )
}
