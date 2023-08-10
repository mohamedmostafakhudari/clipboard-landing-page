import React from "react";

export default function Button({ type, label }) {
  if (type === "primary") {
    return (
      <button className="rounded-full bg-primary py-3 px-6 text-white font-bold shadow-primaryShadow relative overflow-hidden group">
        <div className="absolute inset-0 bg-white opacity-0 duration-200 ease-in-out group-hover:opacity-25"></div>
        {label}
      </button>
    );
  } else if (type === "secondary") {
    return (
      <button className="rounded-full bg-secondary py-3 px-6 text-white font-bold shadow-secondaryShadow relative overflow-hidden group">
        <div className="absolute inset-0 bg-white opacity-0 duration-200 ease-in-out group-hover:opacity-25"></div>
        {label}
      </button>
    );
  }
}
