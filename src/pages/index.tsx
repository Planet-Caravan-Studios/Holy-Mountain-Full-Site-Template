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
                <FixedSplit key="FixedSplit-1"                    
                    fixedRight
                    fixedWidth="850px"
                    backgroundLeft="url('/images/hm-hero-img.jpg')"
                    contentRight
                    headingRight="Coding Style"
                    bodyRight={["\
                        The Holy Mountain Frontend Framework is built with Frontend Devs\
                        in mind.  It's meant to be an easy to use starting point for\
                        building sites, while providing you with a plethora of features\
                        and layouts that are commonly used.  It's also designed to easily\
                        sit on top of other, existing sites and frameworks, which can\
                        quickly bring old sites up to speed with modern standards and\
                        give you new tools to work with. \
                        ", <><br/> <br/></> ,"\
                        Holy Mountain's starter project, the thing you're looking at right now, is meant\
                        to be unopinionated and easy to customize.  Just like you, we\
                        hate clearing out a bunch of code that we don't want or need, so\
                        we try to keep things as clean and lightwieght as possible. We're\
                        only using a handful of colors, the fonts are mostly generic\
                        (besides our personal favorite, Computerfont),  and the filler\
                        content we're using doubles as documentation.  It provides an\
                        easy reference to copy and paste code from.\
                    "]}
                    ctaLinkRight="#"
                    ctaTextRight="READ MORE"
                />
            </section>

            <section>
                <Container>
                    <CellGrid key="CellGrid-1">
                        
                        <Cell cellOuterWidth="33.3%">
                            <ContentCardSmall
                                key="ContentCardSmall_1"
                                backgroundColor="#fafafa"
                                heading="Heading"
                                body={["\
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
                                    sed do eiusmod tempor incididunt ut labore et dolore \
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud \
                                    exercitation ullamco laboris nisi ut aliquip ex ea \
                                    commodo consequat.\
                                    ", <><br/> <br/></> ,"\
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
                                    sed do eiusmod tempor incididunt ut labore et dolore \
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud \
                                    exercitation ullamco laboris nisi ut aliquip ex ea \
                                    commodo consequat.\
                                "]}
                                ctaLink="#"
                                ctaText="READ MORE"
                            />
                        </Cell>

                        <Cell cellOuterWidth="66.6%" >
                            <ContentCardSmall
                                key="ContentCardSmall_2"
                                image="/images/hm-hero-img.jpg"
                                backgroundColor="#fafafa"
                                heading="Heading"
                                ctaLink="#"
                                ctaText="READ MORE"
                            />
                        </Cell>

                        <Cell cellOuterWidth="50%" >
                            <ContentCardSmall
                                key="ContentCardSmall_2"
                                backgroundColor="#fafafa"
                                heading="Heading"
                                body="
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore 
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                    exercitation ullamco laboris nisi ut aliquip ex ea 
                                    commodo consequat.
                                "
                                ctaLink="#"
                                ctaText="READ MORE"
                            />
                        </Cell>

                        <Cell cellOuterWidth="25%" >
                            <ContentCardSmall
                                key="ContentCardSmall_2"
                                backgroundColor="#fafafa"
                                heading="Heading"
                                body="
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore 
                                    magna aliqua.
                                "
                                ctaLink="#"
                                ctaText="READ MORE"
                            />
                        </Cell>

                        <Cell cellOuterWidth="25%" >
                            <ContentCardSmall
                                key="ContentCardSmall_2"
                                backgroundColor="#fafafa"
                                heading="Heading"
                                body="
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore 
                                    magna aliqua. 
                                "
                                ctaLink="#"
                                ctaText="READ MORE"
                            />
                        </Cell>
                        
                    </CellGrid>
                </Container>
                
            </section>

            <section>
                <FixedSplit
                    key="FixedSplit_2"
                    fixedLeft
                    contentLeft
                    fixedWidth="850px"
                    backgroundRight="url('/images/hm-hero-img.jpg')"
                    backgroundLeft="#FAFAFA"
                    headingLeft="FixedWidth Component"
                    bodyLeft={[
                       /* <ul className='listFix'>
                            <li>List Item 1</li>
                            <li>List Item 2</li>
                            <li>List Item 3</li>
                        </ul>*/
                    ]}
                    ctaLinkLeft="#"
                    ctaTextLeft="READ MORE"
                />
            </section>

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
