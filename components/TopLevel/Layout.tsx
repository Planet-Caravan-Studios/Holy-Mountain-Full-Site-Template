import Head from "next/head";
import DesktopNav from "@components/HolyMountain/Navigation/DesktopNav/DesktopNav";
import NavMenu from "@components/HolyMountain/Navigation/NavMenu/NavMenu";
import Footer from "@components/HolyMountain/Navigation/Footer/Footer";

import MasterCSS from "@components/HolyMountain/Layout/MasterCSS/MasterCSS";
import MasterJS from "@components/HolyMountain/Layout/MasterJS/MasterJS";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <div className="root">

            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="apple-touch-icon" href="/icon.png" />
                <meta name="theme-color" content="#fff" />
                <MasterCSS/>

            </Head>

            <nav>
                <NavMenu />
            </nav>

            <nav className="DesktopNav">
                <DesktopNav/>
            </nav>

            <main>
                {children}
            </main>

            <footer>
                <Footer/>
            </footer>
            <MasterJS/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.js" integrity="sha512-AsoAG+OFcSvtqlspW166UTUYg7F4GEu0yNhzTIRfOGysIQA8Dqk1WZwyoN4eX6mX4DaSk703Q1iM0M47rw25Kw=="></script>
            
        </div>
    );
}
