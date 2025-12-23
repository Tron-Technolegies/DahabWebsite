import { motion } from "framer-motion";
import FacilityCard from "./FacilityCard";

export default function MiningFacilitiesSection() {
  const sectionVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <section className="main-bg px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10">
      <div className=" p-10 flex flex-col gap-10 items-center rounded-lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // Triggers when 20% of the section is visible
          variants={sectionVariants}
          className="flex flex-col gap-3 items-center"
        >
          <h2 className="md:text-4xl text-3xl font-semibold gradient-heading text-center pb-5">
            Bitcoin & Crypto Mining Hosting Solutions
          </h2>
          <p className="text-white text-sm max-w-[500px] text-center">
            Effortless hosting and reliable repairs, managed end-to-end so you
            can focus on mining performance.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // Triggers when 20% of the section is visible
          variants={sectionVariants}
          className="flex lg:flex-row flex-col items-center gap-5 justify-between w-full"
        >
          <FacilityCard
            title={"Global Crypto Mining Hosting Facilities"}
            content={
              "We operate secure, high-performance mining facilities across multiple energy-rich regions, including the UAE, Ethiopia, Russia, Tanzania, and Paraguay, offering flexible hosting options based on availability, scale, and operational requirements."
            }
            image={"/1.jpg"}
          />
          <FacilityCard
            title={"ASIC Repair & Maintenance Services"}
            content={
              "Our expert repair team provides board-level diagnostics, chip replacement, firmware optimization, and preventive maintenance to minimize downtime and extend the lifespan of your mining hardware."
            }
            image={"/7-sm.webp"}
          />
        </motion.div>
      </div>
    </section>
  );
}
