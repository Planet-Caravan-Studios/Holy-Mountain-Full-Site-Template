import Head from "next/head";
import Layout from "@components/HolyMountain/Layout/Layout/Layout";
import HeroSection from "@components/HolyMountain/HeroSection";

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

            <HeroSection 
                background="/images/hm-hero-img.png"
                headline="The Holy Mountain" 
                subhead="Frontend Framework"
                body="
                    The philosophy behind the Holy Mountain framework is
                    simple: everything should be straightforward, easy to
                    understand, and easy to use. Or in the words of William S.
                    Buroughs: &quot;Do Easy&quot;.  Before you do something, simply take
                    a moment to work out the easiest, most direct way to do
                    said thing.  The result is code that you can easily build
                    on top of, while having the framework take care of most of
                    your basic frontend needs." 
                ctaLink="#" 
                ctaText="Read More"
            />            

            <section>
                <div className="container">
                    
                </div>
            </section>

        </Layout>
    );
}
