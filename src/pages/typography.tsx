import Head from "next/head";

/* Base Level Components */
    import Layout from "@components/HolyMountain/Layout/Layout/Layout";
    import Container from "@components/HolyMountain/Layout/Container";

    import BasicMeta from "../components/meta/BasicMeta";
    import OpenGraphMeta from "../components/meta/OpenGraphMeta";
    import TwitterCardMeta from "../components/meta/TwitterCardMeta";

/* Design Level Components */
    import HeroSection from "@components/HolyMountain/HeroSection";
    import FixedSplit from "@components/HolyMountain/FixedSplit";
    import BannerSection from "@components/HolyMountain/BannerSection";
    import CellGrid from "@components/HolyMountain/Cells/CellGrid";
    import Cell from "@components/HolyMountain/Cells/Cell";
    import ContentCardSmall from "@components/HolyMountain/ContentCards/ContentCardSmall";



export default function Index() {
    return (
        <Layout>
            <Head>
                <title>Holy Mountain | Home</title>
            </Head>

            <BasicMeta url={"/"} />
            <OpenGraphMeta url={"/"} />
            <TwitterCardMeta url={"/"} />

            <HeroSection key="HeroSection"
                background="/images/hm-hero-img.jpg"
                headline="The Holy Mountain" 
                subhead="Frontend Framework"
                body={['\
                    The philosophy behind the Holy Mountain framework is\
                    simple: everything should be straightforward, easy to\
                    understand, and easy to use. Or in the words of William S.\
                    Buroughs: "Do Easy".  \
                    Before you do something, simply take\
                    a moment to work out the easiest, most direct way to do\
                    said thing.  The result is code that you can easily build\
                    on top of, while having the framework take care of most of\
                    your basic frontend needs.' ]}
                ctaLink="#" 
                ctaText="Read More"
            />     

            <BannerSection key="Banner-1"
                heading="Framework Demo" 
                body={['\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\
                    ' ]}
                ctaLink="#" 
                ctaText="Read More"
            />            

            <section>
                <Container>
                    <CellGrid key="CellGrid-1">
                        
                        <Cell cellOuterWidth="33.3%">
                            <ContentCardSmall
                                key="ContentCardSmall_1"
                                backgroundColor="#fafafa"
                                heading="Heading"
                                ctaLink="#"
                                ctaText="READ MORE"
                            />
                        </Cell>

                        <Cell cellOuterWidth="33.3%" >
                            <ContentCardSmall
                                key="ContentCardSmall_2"
                                backgroundColor="#fafafa"
                                heading="Heading"
                                ctaLink="#"
                                ctaText="READ MORE"
                            />
                        </Cell>

                        <Cell cellOuterWidth="33.3%" >
                            <ContentCardSmall
                                key="ContentCardSmall_3"
                                backgroundColor="#fafafa"
                                heading="Heading"
                                ctaLink="#"
                                ctaText="READ MORE"
                            />
                        </Cell>

                        <Cell cellOuterWidth="50%" >
                            <ContentCardSmall
                                key="ContentCardSmall_4"
                                backgroundColor="#fafafa"
                                heading="Heading"
                                ctaLink="#"
                                ctaText="READ MORE"
                            />
                        </Cell>

                        <Cell cellOuterWidth="25%" >
                            <ContentCardSmall
                                key="ContentCardSmall_5"
                                backgroundColor="#fafafa"
                                heading="Heading"
                                ctaLink="#"
                                ctaText="READ MORE"
                            />
                        </Cell>

                        <Cell cellOuterWidth="25%" >
                            <ContentCardSmall
                                key="ContentCardSmall_6"
                                backgroundColor="#fafafa"
                                heading="Heading"
                                ctaLink="#"
                                ctaText="READ MORE"
                            />
                        </Cell>
                        
                    </CellGrid>
                </Container>
                
            </section>

            

        </Layout>
    );
}
