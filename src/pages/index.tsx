import Head from "next/head";
import Layout from "@components/HolyMountain/Layout/Layout/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
    return (
        <Layout>
            <Head>
                <title>Necro Cult Zine | Home</title>
            </Head>

            <BasicMeta url={"/"} />
            <OpenGraphMeta url={"/"} />
            <TwitterCardMeta url={"/"} />

            <section className="heroSection">
                <div className="heroInner container">

                    <div className="heroContent">
                        <h1>Necro Cult Zine Blog Template</h1>
                        <p>
                            Blog/Main Site Template for Necro Cult Zine.  Uses Next.js and Netlify.  
                            <br/><br/>
                            Original Next.js template: <span className="handle">@nextjs-netlify-blog</span>
                        </p>

                    </div>

                </div>
            </section>

            

            <section>
                <div className="homeArticles container">
                    


                    <div className="main">
                        
                        {/*Article Preview*/}
                        <div className="articlePreview">
                            <div className="inner">
                                <div className="image"></div>
                                
                                <div className="copy">
                                    <div className="headline">
                                        <headline>Tales From the Basement: Morbid</headline>
                                    </div>
                                    
                                    <div className="preview"> 
                                        <article> 
                                            It has only been a
                                            few hours since I've translated and spoke aloud
                                            the first of the demon resurrection passages
                                            from the Book of the Dead 
                                        </article> 
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="secondary">
                        
                        {/*Article Preview*/}
                        <div className="articlePreview">
                            <div className="inner">
                                <div className="image"></div>
                                
                                <div className="copy">
                                    <div className="headline">
                                        <headline>Tales From the Basement: Morbid</headline>
                                    </div>
                                    
                                    <div className="preview"> 
                                        <article> 
                                            It has only been a
                                            few hours since I've translated and spoke aloud
                                            the first of the demon resurrection passages
                                            from the Book of the Dead 
                                        </article> 
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/*Article Preview*/}
                        <div className="articlePreview">
                            <div className="inner">
                                <div className="image"></div>
                                
                                <div className="copy">
                                    <div className="headline">
                                        <headline>Tales From the Basement: Morbid</headline>
                                    </div>
                                    
                                    <div className="preview"> 
                                        <article> 
                                            It has only been a
                                            few hours since I've translated and spoke aloud
                                            the first of the demon resurrection passages
                                            from the Book of the Dead 
                                        </article> 
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/*Article Preview*/}
                        <div className="articlePreview">
                            <div className="inner">
                                <div className="image"></div>
                                
                                <div className="copy">
                                    <div className="headline">
                                        <headline>Tales From the Basement: Morbid</headline>
                                    </div>
                                    
                                    <div className="preview"> 
                                        <article> 
                                            It has only been a
                                            few hours since I've translated and spoke aloud
                                            the first of the demon resurrection passages
                                            from the Book of the Dead 
                                        </article> 
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>

        </Layout>
    );
}
