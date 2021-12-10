import Head from "next/head";
import Layout from "@components/HolyMountain/Layout/Layout/Layout";
import HeroSection from "@components/HolyMountain/HeroSection/HeroSection";

import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function Index() {
    return (
        <Layout>
            <Head>
                <title>Holy Mountain | Home</title>
            </Head>

            <BasicMeta url={"/"} />
            <OpenGraphMeta url={"/"} />
            <TwitterCardMeta url={"/"} />

            <HeroSection>
                <h1>Holy Mountain Blog Template</h1>
                <p>
                    Blog/Main Site Template for Holy Mountain Framework.  Uses Next.js and Netlify.  
                    <br/><br/>
                    Original Next.js template: <span className="handle">@nextjs-netlify-blog</span>
                </p>
            </HeroSection>

            <section className="heroSection">
                <div className="heroInner container">

                    <div className="heroContent">
                        
                    </div>

                </div>
            </section>

            

            <section>
                <div className="container">
                    
                </div>
            </section>

        </Layout>
    );
}
