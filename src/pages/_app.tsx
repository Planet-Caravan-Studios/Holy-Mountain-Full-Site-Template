import "normalize.css";

//Swiper.JS
import 'swiper/swiper.scss';
import 'swiper/modules/a11y/a11y.scss';
import 'swiper/modules/controller/controller.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
import 'swiper/modules/thumbs/thumbs.scss';


import '@styles/style.scss';
import Theme from "@components/HolyMountain/Theme";
import Head from 'next/head'
import $ from 'jquery'; 


import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
/*import "../../public/styles/global.css"*/;
//import "../../public/styles/style.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}
