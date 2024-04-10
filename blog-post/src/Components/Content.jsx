import { Link } from "react-router-dom";
import { contentLinks } from "../constants";
const Content = () => {
  return (
    <div className="py-2">
      <div className="px-2 py-4">
        <h6 className="text-xs text-gray-500 uppercase font-roboto font-semibold ">
          Pilhan Editor
        </h6>
      </div>

      <div className="px-4 grid grid-cols-2 md:grid-cols-4 border">
        {contentLinks.map((items) => (
          <Link to={`/blog/${items.id}`} className="px-2" key={items.id}>
            <img
              src={items.img}
              alt="content pix "
              className="object-fill w-full h-48  rounded-md "
            />
            <h5 className="text-lg font-semibold text-start">
              <span className="">
                <p className="italic text-sm py-2 text-gray-500">
                  April 6, 2024.
                </p>
              </span>
              {items.title}
            </h5>
            <p className="text-start text-sm   lg:visible hidden">
              {items.content}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Content;
