import Layout from "@/components/layouts/Layout";
import Head from "next/head";
import "../../public/css/commsult.css";
import "../../public/css/custom.css";
import "../../public/css/font-icons.css";
import "../../public/css/ion.rangeslider.css";
import "../../public/css/style.css";
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ontego Hardware Finder</title>
        <meta name="description" content="Mobilcomputer, mobile Scanner, Terminals und Handhelds von Zebra, Honeywell und Samsung für die mobile Datenerfassung." />
        <meta name="author" content="commsult AG" />
        <meta property="og:title" content="Mobile Hardware für meine Mitarbeiter finden" />
        <meta property="og:image" content="https://ontego.de/images/commsult/content/A.1.3/A.1.3_02_Hardware_Finder_og.jpg" />
        <meta property="og:description" content="Mobilcomputer, mobile Scanner, Terminals und Handhelds von Zebra, Honeywell und Samsung für die mobile Datenerfassung." />
        <meta property="og:url" content="https://ontego.de/sap_mobility/mobile-geraete" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
