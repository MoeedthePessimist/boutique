import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer>
      <div className="flex justify-around p-10 bg-primary mt-10">
        <div className="flex flex-col items-start">
          <p>Home</p>
          <p>Store</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <div className="flex flex-col items-start">
          <p>810, Bay Area, San Fransisco, CA, USA</p>
          <p>Phone: +1 234 567 890</p>
          <p>Email: test@test.com</p>
        </div>
        <div className="flex flex-col items-start">
          <p>Shipping & Returns</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>FAQ</p>
        </div>
        <div className="flex flex-col items-start">
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
