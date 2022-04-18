import Head from "next/head";

/* Base Level Components */
    import Layout from "@components/HolyMountain/Layout/Layout/Layout";
    import Container from "@components/HolyMountain/Layout/Container";

    import BasicMeta from "../components/meta/BasicMeta";
    import OpenGraphMeta from "../components/meta/OpenGraphMeta";
    import TwitterCardMeta from "../components/meta/TwitterCardMeta";

/* Design Level Components */
    import ArticleHero from "@components/HolyMountain/Articles/ArticleHero";
    import ArticleBody from "@components/HolyMountain/ArticleS/ArticleBody";



export default function Index() {
    return (
        <Layout>
            <Head>
                <title>Holy Mountain | Home</title>
            </Head>

            <BasicMeta url={"/"} />
            <OpenGraphMeta url={"/"} />
            <TwitterCardMeta url={"/"} />

            <article>
                <ArticleHero key="ArticleHero"
                    background="/images/hm-hero-img.jpg"
                    headline="Typography &amp; Type Effects" 
                    subhead="Style Guide Series"
                />     

                <ArticleBody id="articleBody">
                    
                </ArticleBody>

            </article>

            

            

        </Layout>
    );
}
