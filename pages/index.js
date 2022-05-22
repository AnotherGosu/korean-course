import Head from "next/head";

import Home from "../components/sections/Home";
import Reason from "../components/sections/Reason";
import Benefits from "../components/sections/Benefits";
import Audience from "../components/sections/Audience";
import Price from "../components/sections/Price";
import Included from "../components/sections/Included";
import Reviews from "../components/sections/Reviews";
import Join from "../components/sections/Join";
import Contacts from "../components/sections/Contacts";

import Footer from "../components/common/Footer";

export default function App() {
  return (
    <>
      <Head>
        <title>Maryoonseul</title>
        <meta name="description" content="Korean language course" />
        <link rel="icon" href="/flag.png" />
      </Head>

      <main>
        <Home />
        <Reason />
        <Benefits />
        <Audience />
        <Price />
        <Included />
        <Reviews />
        <Join />
        <Contacts />
        <Footer />
      </main>
    </>
  );
}
