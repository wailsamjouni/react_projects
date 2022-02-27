import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.scss';
import Hero from '../components/Hero';
import ScrollToTop from '../components/ScrollToTop';
import Contact from '../components/Contact';
import { useWindowScroll } from 'react-use';
import { DataProvider } from '../context/DataContext';

export default function Home() {

  const {y: pageYOffset} = useWindowScroll();
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
