import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
import "swiper/css/bundle";
import { Header, PPCFooter, PPCHeader } from '../components/components';
import FooterNew from '../components/layout/footer/FooterNew';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../styles/compareSlider.css";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  const canonicalUrl = (`https://carrumdownsdental.com.au` + (router.asPath === "/" ? "" : router.asPath)).split("?")[0];

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="jT613v_6huP5m9TPQAwkZI-Iehyg2TBmgOnavXJAeeA" />
        <link rel="canonical" href={canonicalUrl} />

          {/* <link
            href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Open+Sans:wght@300&family=Poppins:wght@300&display=swap"
            rel="stylesheet"
          /> */}
        <script type="application/ld+json">
          {
            JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Carrum Downs Dental Group",
              "image": "https://d3kk1vdl9fuovr.cloudfront.net/wp-content/uploads/2016/06/CD_logo_lanscape.png",
              "@id": "",
              "url": "https://carrumdownsdental.com.au/",
              "telephone": "0397821200",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1095 Frankston-Dandenong Rd",
                "addressLocality": "Carrum Downs",
                "addressRegion": "VIC",
                "postalCode": "3201",
                "addressCountry": "AU"
              },
              "aggregateRating":
              {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "80"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -38.0886367,
                "longitude": 145.1825171
              },
              "openingHoursSpecification": [{
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }, {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:30",
                "closes": "17:00"
              }],
              "sameAs": [
                "https://www.facebook.com/CarrumDownsDental/",
                "https://twitter.com/CarrumDownsGrp",
                "https://www.instagram.com/cddentalgroup/",
                "https://www.youtube.com/channel/UCqG1nDBsBULhWGi00Twe7rg",
                "https://www.pinterest.com/CarrumDownsGrp/"
              ]
            })
          }
        </script>
      </Head>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {
          `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5CWG7SV');`
        }
      </Script>

      <noscript dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5CWG7SV"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} />

      <Script strategy="lazyOnload" data-he-id="62595" data-alignment="left" data-he-fixed="true" data-background-color="#003a4c" src="https://healthengine.com.au/webplugin/appointments.js"></Script>

      <Script strategy="lazyOnload" defer="defer" src="https://connect.podium.com/widget.js#API_TOKEN=b8ee9d3e-a23b-46a1-a5b7-b87931927e1f" id="podium-widget" data-api-token="b8ee9d3e-a23b-46a1-a5b7-b87931927e1f"></Script>

      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-VXEKMPR9H4"
        strategy="lazyOnload"
      ></Script>
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          const gaCode = 'G-VXEKMPR9H4';

          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', gaCode, {
            linker: { domains: ["healthengine.com.au"] }
          });

          function postData(node) {
            gtag('get', gaCode, 'client_id', client_id => {
              gtag('get', gaCode, 'session_id', session_id => {
                node.contentWindow.postMessage(
                  { 'clientId': client_id, 'sessionId': session_id },
                  "https://healthengine.com.au/"
                );
              });
            });
          }

          var observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
              if (mutation.type !== 'childList') return;

              for (var i = 0; i < mutation.addedNodes.length; i++) {
                var node = mutation.addedNodes[0];

                // exclude non-elements (nodes without className or id)
                if (node.nodeType !== 1) { return; }

                var className = node.getAttribute('class');

                if ((className !== null && className.includes('he-webplugin-popup-')) || node.id.includes('he-webplugin-')) {
                  const iframe = node.querySelector('iframe');

                  if (iframe !== undefined && iframe !== null) {
                    iframe.onload = () => postData(iframe);
                  }
                }
              }
            });
          });

          observer.observe(document, { childList: true, subtree: true });
        `}
      </Script>
      {/* End Google Analytics */}
      {router.pathname !== '/dental-emergency' ? <Header /> : <PPCHeader />}
      <Component {...pageProps} />
      {router.pathname !== '/dental-emergency' ? <FooterNew /> : <PPCFooter />}
    </>
  )
}

export default MyApp