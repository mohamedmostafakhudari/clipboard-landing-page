import React from "react";
import { FooterCTA } from "../components";
import { footer } from "../constants";
import { ReactSVG } from "react-svg";
export default function Footer() {
  return (
    <footer>
      <FooterCTA />
      <section className="py-12 bg-neutral-100">
        <div
          className="grid grid-cols-1 md:grid-cols-[200px_repeat(2,1fr)] items-center 
          text-center gap-8"
        >
          <div className="grid place-items-center">
            <img src={footer.logo} alt="logo" className="w-12 object-contain" />
          </div>
          <ul className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-x-6">
            {footer.links.map((link, i) => (
              <li key={i} className="group">
                <a
                  href={`#${link.toLowerCase().replace(/\s+/, "_")}`}
                  className="text-neutral-dark duration-200 ease-in-out group-hover:text-primary"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex justify-center items-center gap-8">
            {footer.socials.map((social, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-neutral-dark duration-200 ease-in-out hover:text-primary"
                >
                  <ReactSVG src={social} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </footer>
  );
}
