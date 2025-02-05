import React from "react";
import { DataBrand } from "../../data/DataBrand";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div className="">
      <h2 className="text-8xl text-center font-black font-[Anton] py-[100px] ">
        THE BRAND OUR <br /> PRODUCTS
      </h2>
      <div className="grid md:grid-cols-2">
        {DataBrand.map((e, i) => (
          <div key={i} className="relative">
            <img
              className="w-full h-[90vh] object-cover "
              src={e.link}
              alt=""
            />
            <div className="absolute bottom-16 left-[50px]">
              <h3 className="text-4xl text-[#fff]">{e.name}</h3>
              <div className="my-[10px] text-sm  font-semibold    ">
                <Link className="hover:bg-[rgba(255,255,255,0.7)] bg-[#fff]  py-[5px] px-[20px] rounded-4xl">
                  More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-8xl text-center font-black font-[Anton] py-[100px] ">
        QIAODAN
      </h2>
      <Link>
        <img
          className="object-cover h-screen"
          src="/src/assets/Brand/brandqiqodan.jpg"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Brand;
