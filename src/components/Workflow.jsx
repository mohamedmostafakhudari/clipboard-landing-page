import React from "react";
import { workflow } from "../constants";
import { styles } from "../styles";
export default function Workflow() {
  return (
    <section id="workflow" className={`${styles.paddingY}`}>
      <div className={`${styles.paddingX}`}>
        <div className="mx-auto space-y-4 text-center max-w-xl">
          <h2>{workflow.title}</h2>
          <p className="mx-auto">{workflow.text}</p>
        </div>
        <ul className="flex flex-col md:flex-row justify-between gap-12 md:gap-0 mt-24 items-center md:items-baseline max-w-5xl mx-auto">
          {workflow.points.map(({ icon, title, text }) => (
            <li
              key={title}
              className="flex flex-col gap-10 items-center text-center"
            >
              <img src={icon} alt="" />
              <div className="space-y-4">
                <h3>{title}</h3>
                <p className="max-w-[30ch] mx-auto">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
