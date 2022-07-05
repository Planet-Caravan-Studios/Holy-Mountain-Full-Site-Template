import Head from "next/head";

/* Top Level Components */
    import Layout from "@components/HolyMountain/Layout/Layout/Layout";
    import Container from "@components/HolyMountain/Layout/Container";

    import BasicMeta from "../components/meta/BasicMeta";
    import OpenGraphMeta from "../components/meta/OpenGraphMeta";
    import TwitterCardMeta from "../components/meta/TwitterCardMeta";

/* Design Level Components */
    import ArticleHero from "@components/HolyMountain/Articles/ArticleHero";
    import ArticleBody from "@components/HolyMountain/Articles/ArticleBody";
    import Headline from "@components/HolyMountain/Typography/Headline";
    import Button1 from "@components/HolyMountain/Buttons/Button1";

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
                    headline="Modals, Pop-ups, &amp; Lightboxes" 
                    subhead="Style Guide Series"
                />     

                <ArticleBody id="articleBody">

                    <Headline>
                        Headline Text
                    </Headline>

                    
                    <Button1 className="modal_open" modal="DefaultModal">
                        Modal
                    </Button1>

                </ArticleBody>

            </article>

            

            

        </Layout>
    );
}
