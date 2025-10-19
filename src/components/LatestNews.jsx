import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-3 bg-base-200 p-3 ">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee pauseOnHover={true} gradient={false} speed={50}>
        🚀 Welcome to My Website — Latest Projects — Cool Animations — Keep
        Scrolling 🚀
      </Marquee>
    </div>
  );
};

export default LatestNews;
