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
    import NeonText from "@components/HolyMountain/Typography/NeonText";
    import Headline from "@components/HolyMountain/Typography/Headline";



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

                    <Headline>
                        Headline Text
                    </Headline>
                    
                    <p >
                      Vastness is bearable only through love corpus callosum
                      quasar tendrils of gossamer clouds radio telescope hundreds of thousands.
                      Encyclopaedia galactica cosmic ocean stirred by starlight cosmic ocean star
                      stuff harvesting star light <a href="#">intelligent</a> beings. Stirred by starlight
                      emerged into consciousness citizens of distant epochs two ghostly white
                      figures in coveralls and helmets are softly dancing network of wormholes
                      made in the interiors of collapsing stars. Apollonius of Perga the carbon
                      in our apple pies paroxysm of global death concept of the number one
                      circumnavigated great turbulent clouds and billions upon billions upon
                      billions upon billions upon billions upon billions upon billions.            
                    </p>

                    <Headline>
                        <NeonText>
                            Neon Text
                        </NeonText>
                    </Headline>

                    <p>
                       Dispassionate extraterrestrial observer rogue quasar Cambrian explosion
                       great turbulent clouds rich in heavy atoms. Preserve and cherish that pale
                       blue dot a still more glorious dawn awaits encyclopaedia galactica hearts
                       of the stars encyclopaedia galactica cosmic ocean. Descended from
                       astronomers Tunguska event invent the universe with pretty stories for
                       which there's little good evidence vanquish the impossible Tunguska event?
                       Network of wormholes across the centuries across the centuries dream of the
                       mind's eye shores of the cosmic ocean a mote of dust suspended in a
                       sunbeam.
                    </p>

                    <img 
                      className=""
                      src="/images/placeholders/dog-2.jpg" 
                      alt="a fluffy shiba dog" 
                    />

                    <p>
                       Dispassionate extraterrestrial observer rogue quasar Cambrian explosion
                       great turbulent clouds rich in heavy atoms. Preserve and cherish that pale
                       blue dot a still more glorious dawn awaits encyclopaedia galactica hearts
                       of the stars encyclopaedia galactica cosmic ocean. Descended from
                       astronomers Tunguska event invent the universe with pretty stories for
                       which there's little good evidence vanquish the impossible Tunguska event?
                       Network of wormholes across the centuries across the centuries dream of the
                       mind's eye shores of the cosmic ocean a mote of dust suspended in a
                       sunbeam.
                    </p>

                </ArticleBody>

            </article>

            

            

        </Layout>
    );
}
