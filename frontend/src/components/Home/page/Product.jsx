import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import { Link } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/product", {
          headers: { "Content-Type": "application/json" },
        });
        // Filter products to only include those with "Nike"
        const nikeProducts = response.data.filter((product) =>
          product.brand.toLowerCase().includes("nike")
        );
        setProducts(Array.isArray(nikeProducts) ? nikeProducts : []);
      } catch (error) {
        console.error("Error fetching products:", error.response);
      }
    };
    fetchProducts();
  }, []); // Run only on component mount

  return (
    <div className="px-[50px]  ">
      <h2 className="text-8xl text-center font-black font-[Anton] py-[100px] ">
        OUR BAST SELLERS
      </h2>
      {/* sm */}
      <div className=" sm:block md:hidden lg:hidden xl:hidden ">
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper  "
        >
          {products.map((product, i) => (
            <SwiperSlide key={i}>
              <Link>
                <img
                  src={`http://127.0.0.1:8000/storage/${product.image}`}
                  alt={product.name}
                />
                <h2>{product.name}</h2>
                <p>{product.price}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* md */}
      <div className="hidden sm:hidden md:block lg:hidden xl:hidden ">
        <Swiper
          loop={true}
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper  "
        >
          {products.map((product, i) => (
            <SwiperSlide key={i}>
              <Link>
                <img
                  src={`http://127.0.0.1:8000/storage/${product.image}`}
                  alt={product.name}
                />
                <h2>{product.name}</h2>
                <p>{product.price}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* lg */}
      <div className="hidden sm:hidden md:hidden lg:block xl:hidden ">
        <Swiper
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper  "
        >
          {products.map((product, i) => (
            <SwiperSlide key={i}>
              <Link>
                <img
                  src={`http://127.0.0.1:8000/storage/${product.image}`}
                  alt={product.name}
                />
                <h2>{product.name}</h2>
                <p>{product.price}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* xl */}
      <div className="hidden sm:hidden md:hidden lg:hidden xl:block  ">
        <Swiper
          loop={true}
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper  "
        >
          {products.map((product, i) => (
            <SwiperSlide key={i}>
              <Link>
                <img
                  src={`http://127.0.0.1:8000/storage/${product.image}`}
                  alt={product.name}
                />
                <h2>{product.name}</h2>
                <p>{product.price}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Product;
