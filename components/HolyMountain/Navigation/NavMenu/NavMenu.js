import styles from './styles.module.scss'
import styled from "styled-components";

const Menu = styled.div`
  z-index: 100;
  &.active{
    right: 0px ;
    &:before{
     opacity: 1;
     pointer-events: auto;
    }
  }
`;

const Backdrop = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(7, 5, 4, 0.5);
  pointer-events: none;
  opacity: 0;
  &.active{
    opacity: 1;
    pointer-events: auto;
  }
`;

export default function NavMenu({ 
  //props
}) {
  return (
    <>
    <Backdrop id="NavMenuBackdrop" className=" navMenu_close"></Backdrop>
    <Menu id="NavMenu" className={styles.NavMenu} >
    <div className={styles.inner}>

      <div className={styles.buttonSection}>
        <div className={styles.modalClose + " navMenu_close"}>
          &#10005;
        </div>
      </div>

      <div className={styles.logoSection}>
        <a className={styles.logoLink} href="/" >
          <img src="/images/hm-logo-small.png" alt="Logo"/>
        </a>
      </div>

      <div className={styles.linkSection}>
        <ul className="nolist vertical">
          <li className={styles.linkCell}>
            <a href="/">Home</a>
          </li>
          <li className={styles.linkCell}>
            <a href="/">Articles</a>
          </li>
          <li className={styles.linkCell}>
            <a href="/">News</a>
          </li>
          <li className={styles.linkCell}>
            <a href="">About</a>
          </li>
        </ul>
      </div>

      <div className={styles.socialSection}>
        <ul className="nolist">
          <li className={styles.linkCell}>
            <a href="#"><i className="fab fa-facebook"></i></a>
          </li>
          <li className={styles.linkCell}>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </li>
          <li className={styles.linkCell}>
            <a href="#"><i className="fas fa-code"></i></a>
          </li>
          <li className={styles.linkCell}>
            <a href="#"><i className="fab fa-github"></i></a>
          </li>
        </ul>
      </div>

    </div>
    </Menu>
    </>
  )
}
