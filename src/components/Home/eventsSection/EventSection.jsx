import { motion, useInView } from "framer-motion";
import Slider from "react-slick";
import EventCard from "./EventCard";
import { useEffect, useRef } from "react";
import { useGetAllEvents } from "../../../hooks/events/useEvents";
import SkeletonLoading from "../../Skeleton";

const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  swipeToSlide: true,
  touchMove: true,
  draggable: true,
  touchThreshold: 10,
  swipe: true,
  useCSS: true,
  useTransform: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        infinite: true,
        swipeToSlide: true,
        touchMove: true,
        draggable: true,
        swipe: true,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        infinite: true,
        swipeToSlide: true,
        touchMove: true,
        draggable: true,
        swipe: true,
        variableWidth: false,
        touchThreshold: 5,
      },
    },
  ],
};

export default function EventSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });
  const { isError, isLoading, data } = useGetAllEvents({ inView: isInView });
  useEffect(() => {
    import("slick-carousel/slick/slick.css");
    import("slick-carousel/slick/slick-theme.css");
  }, []);
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
      ref={sectionRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Triggers when 20% of the section is visible
      variants={sectionVariants}
      className="main-bg px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col gap-5 items-center"
    >
      <h3 className="gradient-heading md:text-4xl text-3xl font-semibold pb-2">
        Industry Events & Community
      </h3>
      <p className="text-sm text-center max-w-[650px]">
        Our participation in industry events reflects our active role in the
        global Bitcoin mining ecosystem, connecting with miners, infrastructure
        partners, and industry stakeholders across key mining regions.
      </p>

      {/* Mobile: Show scroll hint */}
      {/* <div className="block md:hidden text-xs text-[#A1D3F8] mb-2">
        ← Swipe to explore events →
      </div> */}
      {isLoading ? (
        <SkeletonLoading />
      ) : (
        <div className="my-10 w-full [&_.slick-list]:mx-0 [&_.slick-slide]:px-2 [&_.slick-dots]:bottom-[-50px] [&_.slick-dots_li_button:before]:text-[#0194FE] [&_.slick-dots_li_button:before]:text-xs [&_.slick-dots_li.slick-active_button:before]:text-[#48E5E1] [&_.slick-track]:flex [&_.slick-track]:items-center [&_.slick-slide]:transition-transform [&_.slick-slide]:duration-300 [&_.slick-slide:active]:scale-[0.98]">
          <Slider {...settings}>
            {data?.map((x) => (
              <div key={x._id} className="px-2 focus:outline-none">
                <EventCard
                  img={x.smallImage ? x.smallImage.url : x.mainImage.url}
                  title={x.title}
                  date={new Date(x.date).toLocaleDateString("en-US")}
                  location={x.location}
                  id={x._id}
                  slug={x.slug}
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </motion.section>
  );
}
