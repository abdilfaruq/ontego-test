import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="canonical" href="https://ontego.de/sap_mobility/mobile-geraete.html" />
        <link rel="icon" href="/images/icon/ontego_business_mobility.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script async src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
        <script async src="/js/rangeslider.min.js"></script>
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/js/ion.rangeSlider.min.js"></script>
      </body>
    </Html>
  );
}
