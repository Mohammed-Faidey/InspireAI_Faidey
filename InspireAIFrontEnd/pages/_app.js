'use client'
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "../context";
import Load_bot from "./bot";
import Head from 'next/head';
import dynamic from 'next/dynamic';



const WebChatContainer = dynamic(() => import('@ibm-watson/assistant-web-chat-react').then((mod) => mod.WebChatContainer), { ssr: false });



const webChatOptions = {
  integrationID: "cf134e1a-14b7-4d0c-b7c1-4684c9d5e536", // The ID of this integration.
  region: "eu-gb", // The region your integration is hosted in.
  serviceInstanceID: "dd8f0bab-351b-4c0d-bcfc-3ef8dcb5958c", // The ID 
  // subscriptionID: 'only on enterprise plans',
  // Note that there is no onLoad property here. The WebChatContainer component will override it.
  // Use the onBeforeRender or onAfterRender prop instead.
};

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Provider >
    <Head>
       <title>Inspire AI</title>
       <link rel="shortcut icon" href="https://cdn-icons-png.flaticon.com/512/5278/5278402.png" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
       <link
      href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap"
      rel="stylesheet"
    />
    
     </Head>

      <Component {...pageProps} />
    </Provider>
    <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    
    <div id="root"></div>
  </body>
    </>
  );

}

export default MyApp;
//<div> <WebChatContainer config={webChatOptions} />;</div>
