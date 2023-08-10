import React from "react";
import { clipboard } from "../constants";
import { styles } from "../styles";
export default function Clipboard() {
  return (
    <section id="clipboard" className={`${styles.paddingY}`}>
      <div className={`space-y-16 ${styles.paddingX}`}>
        <div className="mx-auto space-y-4 text-center max-w-xl">
          <h2>{clipboard.title}</h2>
          <p className="">{clipboard.text}</p>
        </div>
        <div className="max-w-5xl mx-auto">
          <img src={clipboard.img} alt="devices" />
        </div>
      </div>
    </section>
  );
}
