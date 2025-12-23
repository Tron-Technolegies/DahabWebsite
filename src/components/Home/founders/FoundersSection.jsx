import { motion } from "framer-motion";

import FounderCard from "./FounderCard";

const data = [
  {
    id: 1,
    img: "/home/founder1.webp",
    name: "Rizwan Kamarudheen",
    role: "Co-Founder & Chief Executive Officer",
    about:
      "Born and raised in the UAE, Rizwan has been active in the Bitcoin and crypto mining industry since 2020. With hands-on experience in mining operations, power strategy, and infrastructure, he has built streamlined solutions tailored to the UAE and emerging markets. Prior to Dahab Miners, he held leadership roles at firms including GreenGate and Tron Digital, contributing to energy-focused projects that shaped Dahab’s operational efficiency and sustainable growth.",
    fb: "#",
    inst: "https://www.instagram.com/kf_rizwan?igsh=b2Y2bG95cGg1MXlw",
    link: "https://www.linkedin.com/in/rizwan-kamar-ab117a172/",
    alt: "Rizwan Kamarudheen Co-Founder & Chief Executive Officer",
  },
  {
    id: 2,
    img: "/home/founder2.webp",
    name: "Ahmed Rameez",
    role: "Co-Founder & Executive Director",
    about:
      "Also born and raised in the UAE, Ahmed has been involved in the Bitcoin and crypto mining ecosystem alongside Rizwan since 2020. With a strong business background and experience across F&B, FMCG, and real estate, he brings a practical, execution-focused approach to scaling mining operations. His cross-industry leadership supports Dahab Miners’ strategic growth across the UAE, Ethiopia, and other mining regions.",
    fb: "#",
    inst: "https://www.instagram.com/ah_rameez?igsh=eHE2cnpvcHhpMzEw",
    link: "#",
    alt: "Ahmed Rameez Co-Founder & Executive Director",
  },
  // {
  //   id: 3,
  //   img: "/home/review-3.png",
  //   name: "Name",
  //   role: "Founder & CEO",
  //   about:
  //     "Mohamed is the visionary behind Dahab Miners. With a pioneering spirit and a strong foundation in blockchain technology, he founded the company to empower miners with scalable, secure, and future-ready crypto mining solutions.",
  //   fb: "#",
  //   inst: "#",
  //   link: "#",
  // },
];

export default function FoundersSection() {
  const sectionVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }} // Triggers when 20% of the section is visible
      variants={sectionVariants}
      className="main-bg px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col gap-5 items-center"
    >
      <h2 className="gradient-heading md:text-4xl text-3xl font-semibold pb-5">
        Meet the Founders Behind Dahab Miners
      </h2>
      <p className="text-sm text-center max-w-[450px]">
        The visionaries behind Dahab Miners, driving innovation and operational
        excellence in the global crypto mining industry.
      </p>
      <div className="grid md:grid-cols-2 gap-9 my-5">
        {data.map((item) => (
          <FounderCard
            key={item.id}
            name={item.name}
            img={item.img}
            role={item.role}
            about={item.about}
            fb={item.fb}
            inst={item.inst}
            link={item.link}
            alt={item.alt}
          />
        ))}
      </div>
    </motion.section>
  );
}
