import styles from "../Footer/Footer.module.css"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
      <footer className={styles.footerDistributed}>
        <div className={styles.footerLeft}>
          <h3>Sagar<span>Developer</span></h3>
          <p className={styles.footerLinks}>
            <Link to="#">Home</Link>
            |
            <Link to="#">About</Link>
            |
            <Link to="#">Contact</Link>
            |
            <Link to="#">Blog</Link>
          </p>
          <p className={styles.footerCompanyName}>
            Copyright © 2021 <strong>SagarDeveloper</strong> All rights reserved
          </p>
        </div>
        <div className={styles.footerCenter}>
          <div>
            <i className="fa fa-map-marker"></i>
            <p><span>Ghaziabad</span> Delhi</p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p>+91 74**9**258</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p><a href="mailto:sagar00001.co@gmail.com">xyz@gmail.com</a></p>
          </div>
        </div>
        <div className={styles.footerRight}>
          <p className={styles.footerCompanyAbout}>
            <span>About the company</span>
            <strong>Sagar Developer</strong> is a Youtube channel where you can find more creative CSS Animations and Effects along with HTML, JavaScript and Projects using C/C++.
          </p>
          <div className={styles.footerIcons}>
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-youtube"></i></a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;


// import styles from "../Footer/Footer.module.css"
// import { Link } from "react-router-dom"

// const Footer = () => {
//   return (
//     <div className={styles.footer}>
//       <div className={styles.footerLogo}>
//         <h1>EmiDev</h1>
//       </div>
//       <div className={styles.footerLinks}>
//         <Link to="/home" className="link">Facebook</Link>
//         <Link to="/home" className="link">Instagram</Link>
//         <Link to="/home" className="link">Twitter</Link>
//       </div>
//     </div>
//   )
// }

// export default Footer