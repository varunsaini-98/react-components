import "./footer.css";
const Footer = ({
  email = "mymail@example.com",
  phone = "9876543210",
  company = "React Reusable Components",
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="section">
        <h3>Contact Us</h3>

        <p>Email: {email}</p>
        <p>Phone: {phone}</p>

        <p>
          © {currentYear} {company}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
