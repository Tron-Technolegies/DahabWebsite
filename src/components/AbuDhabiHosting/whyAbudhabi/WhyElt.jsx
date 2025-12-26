import React from "react";

export default function WhyElt({ title, content }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold text-[#07EAD3]">{title}</h3>
      <p className="text-sm font-semibold">{content}</p>
    </div>
  );
}
