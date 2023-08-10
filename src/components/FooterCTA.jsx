import React from "react";
import Button from "./Button";
import { styles } from "../styles";
export default function FooterCTA() {
  return (
    <section className={`${styles.paddingY} pb-48`}>
      <div
        className={`max-w-xl mx-auto text-center space-y-12 ${styles.paddingX}`}
      >
        <div className="space-y-4">
          <h2>Clipboard for IOS and Mac OS</h2>
          <p>
            Available for free on the App Store. Download for Mac or IOS, sync
            with ICloud and you&apos;re ready to start adding to your clipboard.
          </p>
        </div>
        <div className="flex flex-col justify-center md:flex-row gap-6">
          <Button type={"primary"} label={"Download for IOS"} />
          <Button type={"secondary"} label={"Download for Mac"} />
        </div>
      </div>
    </section>
  );
}
