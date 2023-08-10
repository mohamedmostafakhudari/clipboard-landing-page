import React from "react";
import FooterCTA from "../components/FooterCTA";
import Logo from "../components/Logo";
import Icon from "../components/Icon";
export default function Footer() {
  return (
    <footer>
      <FooterCTA />
      <div>
        <Logo />
        <ul>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Install Guide</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Press Kit</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <Icon type="facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon type="twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon type="instagram" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
