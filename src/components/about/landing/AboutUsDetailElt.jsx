import React from "react";

export default function AboutUsDetailElt({ stat, content, style }) {
  return (
    <div
      className={`flex flex-col gap-3 items-center justify-center text-[#8EADB0] p-10 bg-[#08112C] ${style}`}
    >
      <p className="text-4xl font-semibold">{stat}</p>
      <p className="text-sm text-center">{content}</p>
    </div>
  );
}
