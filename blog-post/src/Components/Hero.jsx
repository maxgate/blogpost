import { Link } from "react-router-dom";
import { herobag } from "../assets";
import { heroLinks } from "../constants/index.js";

const Hero = () => {
  let date = new Date();
  return (
    <div className="md:grid grid-cols-2 bg-black border-t border-gray-900 py-8  shadow-lg ">
      <div
        className=" text-white px-2 md:px-12 w-full 
    "
      >
        <Link to={"/page1"}>
          <img
            src={herobag}
            alt="herobag"
            className="object-cover w-full h-72 cursor-pointer"
          />

          <h6 className="py-3 italic font-semibold text-xs">{` ${date.toLocaleString(
            "en-US",
            { month: "long" }
          )} ${date.getDay()},  ${date.getFullYear()}.`}</h6>
          <h2 className="text-lg font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            reiciendis!
          </h2>

          <p className="py-2 text-sm text-gray-500 pb-8 cursor-pointer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            corporis! Iure beatae dolorem magnam esse asperiores? Optio
            inventore laborum architecto nihil harum, corrupti molestias
            aspernatur aliquam tempore odit, officiis tempora.
          </p>
        </Link>
      </div>
      <div className="md:divide-y divide-gray-900">
        {heroLinks.map((items) => (
          <Link to={`/blog/${items.id}`} key={items.id}>
            <div className="small md:hidden">
              <p className="w-full h-48 text-start overflow-clip py-2">
                <span className="italic text-xs text-gray-400 ">
                  April 5, 2024.
                </span>
                {items.post}
              </p>
              <img
                src={items.img}
                alt="guy with bag"
                className="w-full h-48 object-cover rounded-sm cursor-pointer "
              />
            </div>
            {/*  */}
            <div className="hidden md:large" key={heroLinks.id}>
              <img
                src={items.img}
                alt="guy with bag"
                className="w-full h-32 object-cover rounded-sm cursor-pointer "
              />
              <p className="w-full h-36 text-start cursor-pointer md:overflow-hidden py-2 ">
                <span className="italic text-xs text-gray-400">
                  April 5, 2024.
                </span>
                {items.post}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hero;
