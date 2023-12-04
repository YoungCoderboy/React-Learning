import Navli from "./Navli";
import Links from "./Links";
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        <Navli class_name="footer-link" />
      </ul>
      <Links class_name2="footer-icons" class_name1="footer-icon" />

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
