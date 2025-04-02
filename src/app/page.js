import styles from "./page.module.css";
import Navbar from "./navbar/page";
import Hero from "./hero/page";
import Service from "./servizi/page";
import About from "./about/page";
import Info from "./info/page";
import Footer from "./footer/page";
import Feedback from "./feedback/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navbar />
        <Hero />
        <About />
        <Info />
        <Service />
        <Feedback />
      </main>
      <Footer />
    </div>
  );
}
