import React from "react";
import { snippet } from "../constants";
import { styles } from "../styles";
export default function Snippet() {
  return (
    <section id="snippet" className={`${styles.paddingY} max-w-7xl mx-auto`}>
      <div className={`${styles.paddingX} space-y-16`}>
        <div className="space-y-4 text-center mx-auto max-w-xl">
          <h2>{snippet.title}</h2>
          <p>{snippet.text}</p>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-16 max-w-5xl">
          <div className="flex-1">
            <img
              src={snippet.img}
              alt="computer"
              className="md:relative md:-left-8"
            />
          </div>
          <ul className="space-y-12 flex-1">
            {snippet.points.map(({ title, text }) => (
              <li key={title} className="space-y-2 text-center md:text-left">
                <h3>{title}</h3>
                <p className="">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
