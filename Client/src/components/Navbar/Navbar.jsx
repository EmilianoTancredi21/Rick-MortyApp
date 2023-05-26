import styles from "../Navbar/Navbar.module.css"
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import About from "../About/About";
import App from "../../App";

const Navbar = ({ onSearch }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
      <Link to="/home">
        <img src="https://res.cloudinary.com/dg8awhbvm/image/upload/v1683117757/Proyecto%20JS%20vanilla/desktop-wallpaper-rick-and-morty-logo-png-for-computer-supreme-rick-and-morty_njlnpm.jpg" alt="Logo" />
      </Link>
      </div>
      <div className={styles.navbarLinks}>
        <Link to="/home" element={<App/>} style={{ textDecoration: 'none' }}>Home</Link>
        <Link to="/about" element={<About/>} style={{ textDecoration: 'none' }}>About</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
      <div>
      <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}

export default Navbar