import React, { useEffect } from "react";
import BlogList from "../../components/blogs/BlogList";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function BlogPage() {
  const location = useLocation();
  const fullUrl = window.location.origin + location.pathname + location.search;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <link
          rel="canonical"
          href={fullUrl || "https://dahabminers.com/blogs"}
        />
        <title>Bitcoin & Crypto Mining Blogs | Dahab Miners</title>
        <meta
          name="description"
          content="Read expert articles on Bitcoin mining, ASIC hardware, hosting, repairs, mining economics, and blockchain infrastructure from Dahab Miners."
        />
        <meta
          name="keywords"
          content="bitcoin mining blog, crypto mining blog, ASIC miner guides, bitcoin mining insights, crypto mining insights, crypto mining UAE, bitcoin mining Ethiopia"
        />
      </Helmet>

      <BlogList />
    </div>
  );
}
