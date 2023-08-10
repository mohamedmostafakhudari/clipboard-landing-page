import React from "react";
import Benefits from "./Benefits";
import Titles from "./Titles";
export default function Main() {
  return (
    <main>
      <div className="container mx-auto px-6 md:px-0">
        <Benefits />
        <Titles />
      </div>
    </main>
  );
}
