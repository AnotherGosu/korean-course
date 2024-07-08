import styles from "styles/App.module.scss";
import Head from "next/head";

import Navigation from "components/common/Navigation";
import ModalMenu from "components/common/ModalMenu/ModalMenu";

import Home from "components/sections/Home";
import Reason from "components/sections/Reason";
import Benefits from "components/sections/Benefits";
import Included from "components/sections/Included";
import Levels from "components/sections/Levels";
import Price from "components/sections/Price";
import Join from "components/sections/Join";
import Reviews from "components/sections/Reviews";
import Contacts from "components/sections/Contacts";
import Footer from "components/sections/Footer";

export default function App() {
  return (
    <>
      <Head>
        <title>Korean Course</title>
        <meta name="description" content="Курс корейского языка" />
        <link rel="icon" href="/flag.png" />
      </Head>
      <div className={styles.appContainer}>
        <ModalMenu />

        <div className={styles.contentWrapper}>
          <div className={styles.spacer} />
          <main className={styles.main}>
            <Home />
            <Reason />
            <Benefits />
            <Included />
            <Levels />
            <Price />
            <Join />
            <Reviews />
            <Contacts />
            <Footer />
          </main>
          <div className={styles.navWrapper}>
            <Navigation />
          </div>
        </div>
      </div>
    </>
  );
}
