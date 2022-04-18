import styles from './styles.module.scss'
import styled from "styled-components";
import Container from "@components/HolyMountain/Layout/Container";


export default function ArticleBody({ 
  //props
  children,
  heroImage,
  headline,
}) {
  return (
    <div className={styles.outer} >
        <Container >
          <section className={styles.inner}>
            <p className={styles.indent}>
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

          </section>
        </Container>
    </div>
  )
}
