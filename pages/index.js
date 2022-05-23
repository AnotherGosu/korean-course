import styles from "styles/App.module.scss";
import Head from "next/head";

import Footer from "components/common/Footer";
import Navigation from "components/common/Navigation";

import Home from "components/sections/Home";
import Reason from "components/sections/Reason";
import Benefits from "components/sections/Benefits";
import Included from "components/sections/Included";
import Audience from "components/sections/Audience";
import Price from "components/sections/Price";
import Join from "components/sections/Join";
import Reviews from "components/sections/Reviews";
import Contacts from "components/sections/Contacts";

export default function App() {
  return (
    <>
      <Head>
        <title>Maryoonseul</title>
        <meta name="description" content="Korean language course" />
        <link rel="icon" href="/flag.png" />
      </Head>

      <div className={styles.contentWrapper}>
        <div />
        <main className={styles.main}>
          <Home />
          <Reason />
          <Benefits />
          <Included />
          <Audience />
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
    </>
  );
}
