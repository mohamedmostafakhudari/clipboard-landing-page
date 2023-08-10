import React from "react";
import { clients } from "../constants";
import { styles } from "../styles";
export default function Clients() {
  return (
    <section id="clients" className={`${styles.paddingY}`}>
      <div
        className={`max-w-5xl flex flex-col items-center gap-16 md:gap-0 md:justify-between md:flex-row md:flex-wrap mx-auto ${styles.paddingX}`}
      >
        {clients.logos.map((logo, i) => (
          <img key={i} src={logo} alt="" className="" />
        ))}
      </div>
    </section>
  );
}
