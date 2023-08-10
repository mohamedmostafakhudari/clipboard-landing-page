import React from "react";
import { Logo } from "../assets";
import { Button } from "./";
import { styles } from "../styles";
export default function Header() {
  return (
    <header
      className={`bg-pattern-mobile md:bg-pattern-desktop bg-no-repeat bg-cover bg-right-top ${styles.paddingY}`}
    >
      <div
        className={`container mx-auto grid grid-cols-1 grid-rows-[200px_1fr] gap-4 ${styles.paddingX} max-w-xl`}
      >
        <div className="grid place-items-center">
          <img src={Logo} alt="logo" />
        </div>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1>A history of everything you copy</h1>
            <p>
              Clipboard allows you to track and organize everything you copy.
              Instantly access your clipboard on all your devices.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 sm:justify-center">
            <Button type={"primary"} label={"Download for iOS"} />
            <Button type={"secondary"} label={"Download for Mac"} />
          </div>
        </div>
      </div>
    </header>
  );
}
