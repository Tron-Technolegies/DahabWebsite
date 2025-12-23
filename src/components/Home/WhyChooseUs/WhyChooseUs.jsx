import WhyChooseCard from "./WhyChooseCard";
import { handleChatClick } from "../../../utils/whatsapp";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
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
      viewport={{ once: false, amount: 0.3 }}
      variants={sectionVariants}
      className="main-bg px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-20 flex flex-col md:flex-row md:justify-around gap-10 items-center relative z-[1]"
    >
      {/* Background Circle (Only on md+) */}
      <div className="bg-[#020b25] w-[650px] h-[650px] absolute xl:left-0 lg:-left-[10%] -left-[30%] rounded-e-full hidden md:block z-0"></div>

      {/* Decorative Arrows (Only on md+) */}
      <img
        src="/home/arrow-1.png"
        alt="Bitcoin Mining in Dubai"
        className="absolute bottom-[10%] left-[20%] hidden md:block"
      />
      <img
        src="/home/arrow-2.png"
        alt="Bitcoin Mining in Dubai"
        className="absolute top-[10%] right-[50%] hidden md:block"
      />

      {/* Left: Cards */}
      <motion.div
        initial={{ rotate: 50, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="grid grid-cols-2 md:grid-cols-2 md:grid-rows-5 gap-3 md:gap-x-9 w-full max-w-[420px] h-auto md:h-[580px] z-[1] place-items-center"
      >
        <WhyChooseCard
          icon={"/home/c-3.png"}
          content={"Seamless Mining Setup"}
          position={"col-start-1 col-end-2 row-start-1 row-end-3"}
        />
        <WhyChooseCard
          icon={"/home/c-4.png"}
          content={"Cost-Effective Hosting"}
          position={"col-start-2 col-end-3 row-start-2 row-end-4"}
        />
        <WhyChooseCard
          icon={"/home/c-1.png"}
          content={"100% Earnings, No Cuts"}
          position={"col-start-1 col-end-2 row-start-3 row-end-5"}
        />
        <WhyChooseCard
          icon={"/home/c-2.png"}
          content={"Optimized Performance"}
          position={"col-start-2 col-end-3 row-start-4 row-end-6"}
        />
      </motion.div>

      {/* Right: Text Content */}
      <div className="flex flex-col md:items-start items-center gap-5 text-center md:text-left max-w-[350px] z-[1]">
        <h3 className="text-2xl md:text-3xl font-semibold gradient-heading">
          Why DAHAB Miners Is Your Trusted Mining Partner
        </h3>
        <p className="text-sm text-white w-[400px] text-start">
          Dahab Miners provides end-to-end crypto mining solutions designed
          around performance and uptime. With hands-on operational experience
          and purpose-built systems, we support miners with stable
          infrastructure, responsive support, and optimized mining operations.
        </p>
        <button
          className="btn-bg px-5 py-2 rounded-lg text-white"
          onClick={handleChatClick}
        >
          Contact Us
        </button>
      </div>
    </motion.section>
  );
}
