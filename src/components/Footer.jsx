import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} AlcoTalks. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
