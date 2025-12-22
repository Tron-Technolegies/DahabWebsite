import React, { useState } from "react";
import FAQCard from "./FAQCard";

export default function ProductFaqSection({ product }) {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold text-white mb-5">
        Frequently Asked Questions
      </h2>

      <div className="grid gap-4">
        {product?.productFaq?.map((faq, index) => (
          <FAQCard
            key={index}
            count={index + 1}
            question={faq.question}
            answer={faq.answer}
            active={active}
            setActive={setActive}
          />
        ))}
      </div>
    </div>
  );
}
