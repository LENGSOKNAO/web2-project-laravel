import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { HiBars4 } from "react-icons/hi2";
import { DataSearch } from "../../data/DataSearch";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Nav = () => {
  const [search, setSearch] = useState(false);
  const [nav, setNav] = useState(false);
  const [nike, setNike] = useState(false);
  const [anta, setAnta] = useState(false);
  const [salomon, setSalomon] = useState(false);
  const [newBalance, setNewBalance] = useState(false);
  const [qiaodan, setQiaodan] = useState(false);

  return (
    <nav className=" bg-[rgba(255,255,255,0.7)] z-40 sticky top-0">
      {/* screen md */}
      <div className="lg:hidden xl:hidden">
        <div className="flex-between py-2">
          <Link>
            <img className="w-[100px]" src="/src/assets/logo.png" alt="" />
          </Link>
          <div className="">
            <ul className="flex-center gap-1.5 text-3xl">
              <li>
                {" "}
                <Link onClick={() => setSearch((s) => !s)}>
                  <CiSearch />
                </Link>{" "}
                {search && (
                  <div
                    data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500"
                    className="absolute inset-0 h-screen bg-[#fff] px-[20px] py-[10px] "
                  >
                    <div className="flex-between">
                      <div className="flex-center  bg-hover btn-color  rounded-4xl  ">
                        <CiSearch className="btn-color cursor-pointer bg-hover p-0.5 text-3xl rounded-4xl" />
                        <input
                          className="w-[65vw]  outline-none border-none text-lg"
                          type="text"
                          placeholder="Search"
                        />
                      </div>
                      <span
                        className="text-lg text-hover cursor-pointer "
                        onClick={() => setSearch((s) => !s)}
                      >
                        Cancel
                      </span>
                    </div>
                    <div className="py-5"></div>
                    <h2 className="text-lg font-medium py-[10px] text-color ">
                      Pupour Search
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {DataSearch.slice(0, 7).map((e, i) => (
                        <div key={i} className="">
                          <p
                            data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="700"
                            data-aos-duration="500"
                            className="text-sm cursor-pointer  font-black w-full btn-color bg-hover text-center rounded-4xl py-2 px-[20px]  "
                          >
                            {e.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
              <li>
                {" "}
                <Link>
                  <CiHeart />
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link>
                  <CiShoppingCart />
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link onClick={() => setNav((nav) => !nav)}>
                  <HiBars4 />
                </Link>{" "}
                {nav && (
                  <div className="">
                    <div className="absolute inset-0 h-[200vh] bg-[rgba(0,0,0,0.1)] "></div>
                    <div
                      data-aos="fade-left"
                      data-aos-anchor="#example-anchor"
                      data-aos-offset="500"
                      data-aos-duration="500"
                      className="bg-listnav"
                    >
                      <div
                        className="cursor-pointer   flex justify-end items-center py-[10px] px-1.5 "
                        onClick={() => setNav((nav) => !nav)}
                      >
                        <span className=" bg-hover text-xl  flex-center rounded-4xl w-[35px] h-[35px]  ">
                          X
                        </span>
                      </div>
                      <div className="">
                        <ul className="text-xl font-normal px-[20px]">
                          <li className="py-1">
                            <Link
                              className="flex-between text-hover"
                              onClick={() => setNike((nike) => !nike)}
                            >
                              Nike <BsChevronCompactRight />
                            </Link>
                            {nike && (
                              <div
                                data-aos="fade-left"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                                className="bg-listnav"
                              >
                                <div className="">
                                  <div className="flex-between p-[10px]  ">
                                    <span
                                      className="text-lg text-hover  cursor-pointer flex items-center"
                                      onClick={() => setNike((nike) => !nike)}
                                    >
                                      <BsChevronCompactLeft /> All
                                    </span>
                                    <div
                                      className="cursor-pointer    "
                                      onClick={() => setNav((nav) => !nav)}
                                    >
                                      <span className=" bg-hover text-xl  flex-center rounded-4xl w-[35px] h-[35px]  ">
                                        X
                                      </span>
                                    </div>
                                  </div>
                                  <div className="item-nav">
                                    <h2 className="py-4">New</h2>
                                    <ul className="item-list">
                                      <li>
                                        <Link className="text-hover">
                                          New Arrivals
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sellers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Latest Drops
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="item-nav">
                                    <h2 className="py-4">Man</h2>
                                    <ul className="item-list">
                                      <li>
                                        <Link className="text-hover">
                                          New Arrivals
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sellers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Shoes
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Clothing
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sport
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Latest Drops
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="item-nav">
                                    <h2 className="py-4">Women</h2>
                                    <ul className="item-list">
                                      <li>
                                        <Link className="text-hover">
                                          New Arrivals
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sellers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Shoes
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Clothing
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sport
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Latest Drops
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="item-nav">
                                    <h2 className="py-4">Kids</h2>
                                    <ul className="item-list">
                                      <li>
                                        <Link className="text-hover">
                                          New Arrivals
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sellers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Shoes by Age
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Clothing by Age
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sport by Age
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Latest Drops
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            )}
                          </li>
                          <li className="py-1">
                            <Link
                              onClick={() => setAnta((anta) => !anta)}
                              className="flex-between text-hover"
                            >
                              Anta <BsChevronCompactRight />
                            </Link>
                            {anta && (
                              <div
                                data-aos="fade-left"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                                className="bg-listnav"
                              >
                                <div className="">
                                  <div className="flex-between p-[10px]  ">
                                    <span
                                      className="text-lg text-hover  cursor-pointer flex items-center"
                                      onClick={() => setAnta((anta) => !anta)}
                                    >
                                      <BsChevronCompactLeft /> All
                                    </span>
                                    <div
                                      className="cursor-pointer    "
                                      onClick={() => setAnta((anta) => !anta)}
                                    >
                                      <span className=" bg-hover text-xl  flex-center rounded-4xl w-[35px] h-[35px]  ">
                                        X
                                      </span>
                                    </div>
                                  </div>
                                  <div className="item-nav">
                                    <h2 className="py-4">New</h2>
                                    <ul className="item-list">
                                      <li>
                                        <Link className="text-hover">
                                          New Arrivals
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sellers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Latest Drops
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="item-nav">
                                    <h2 className="py-4">Man</h2>
                                    <ul className="item-list">
                                      <li>
                                        <Link className="text-hover">
                                          New Arrivals
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sellers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Shoes
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Clothing
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sport
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Latest Drops
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="item-nav">
                                    <h2 className="py-4">Women</h2>
                                    <ul className="item-list">
                                      <li>
                                        <Link className="text-hover">
                                          New Arrivals
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sellers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Shoes
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Clothing
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sport
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Latest Drops
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="item-nav">
                                    <h2 className="py-4">Kids</h2>
                                    <ul className="item-list">
                                      <li>
                                        <Link className="text-hover">
                                          New Arrivals
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sellers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Shoes by Age
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Clothing by Age
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sport by Age
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Latest Drops
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            )}
                          </li>
                          <li className="py-1">
                            <Link
                              onClick={() => setSalomon((salomon) => !salomon)}
                              className="flex-between text-hover"
                            >
                              Salomon <BsChevronCompactRight />
                            </Link>
                            {salomon && (
                              <div
                                data-aos="fade-left"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                                className="bg-listnav"
                              >
                                <div className="">
                                  <div className="flex-between p-[10px]  ">
                                    <span
                                      className="text-lg text-hover  cursor-pointer flex items-center"
                                      onClick={() =>
                                        setSalomon((salomon) => !salomon)
                                      }
                                    >
                                      <BsChevronCompactLeft /> All
                                    </span>
                                    <div
                                      className="cursor-pointer    "
                                      onClick={() =>
                                        setSalomon((salomon) => !salomon)
                                      }
                                    >
                                      <span className=" bg-hover text-xl  flex-center rounded-4xl w-[35px] h-[35px]  ">
                                        X
                                      </span>
                                    </div>
                                  </div>
                                  <div className="item-nav">
                                    <h2 className="py-4">New</h2>
                                    <ul className="item-list">
                                      <li>
                                        <Link className="text-hover">
                                          New Arrivals
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sellers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Latest Drops
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="item-nav">
                                    <h2 className="py-4">Man</h2>
                                    <ul className="item-list">
                                      <li>
                                        <Link className="text-hover">
                                          New Arrivals
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sellers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Shoes
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Clothing
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sport
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Latest Drops
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="item-nav">
                                    <h2 className="py-4">Women</h2>
                                    <ul className="item-list">
                                      <li>
                                        <Link className="text-hover">
                                          New Arrivals
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sellers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Shoes
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Clothing
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sport
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Latest Drops
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="item-nav">
                                    <h2 className="py-4">Kids</h2>
                                    <ul className="item-list">
                                      <li>
                                        <Link className="text-hover">
                                          New Arrivals
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sellers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Shoes by Age
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Clothing by Age
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sport by Age
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Latest Drops
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            )}
                          </li>
                          <li className="py-1">
                            <Link
                              onClick={() =>
                                setNewBalance((newBalance) => !newBalance)
                              }
                              className="flex-between text-hover"
                            >
                              NewBalance <BsChevronCompactRight />
                            </Link>
                            {newBalance && (
                              <div
                                data-aos="fade-left"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                                className="bg-listnav"
                              >
                                <div className="">
                                  <div className="flex-between p-[10px]  ">
                                    <span
                                      className="text-lg text-hover  cursor-pointer flex items-center"
                                      onClick={() =>
                                        setNewBalance(
                                          (newBalance) => !newBalance
                                        )
                                      }
                                    >
                                      <BsChevronCompactLeft /> All
                                    </span>
                                    <div
                                      className="cursor-pointer    "
                                      onClick={() =>
                                        setNewBalance(
                                          (newBalance) => !newBalance
                                        )
                                      }
                                    >
                                      <span className=" bg-hover text-xl  flex-center rounded-4xl w-[35px] h-[35px]  ">
                                        X
                                      </span>
                                    </div>
                                  </div>
                                  <div className="item-nav">
                                    <h2 className="py-4">New</h2>
                                    <ul className="item-list">
                                      <li>
                                        <Link className="text-hover">
                                          New Arrivals
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sellers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Latest Drops
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="item-nav">
                                    <h2 className="py-4">Man</h2>
                                    <ul className="item-list">
                                      <li>
                                        <Link className="text-hover">
                                          New Arrivals
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sellers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Shoes
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Clothing
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sport
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Latest Drops
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="item-nav">
                                    <h2 className="py-4">Women</h2>
                                    <ul className="item-list">
                                      <li>
                                        <Link className="text-hover">
                                          New Arrivals
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sellers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Shoes
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Clothing
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sport
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Latest Drops
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="item-nav">
                                    <h2 className="py-4">Kids</h2>
                                    <ul className="item-list">
                                      <li>
                                        <Link className="text-hover">
                                          New Arrivals
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sellers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Shoes by Age
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Clothing by Age
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sport by Age
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Latest Drops
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            )}
                          </li>
                          <li className="py-1">
                            <Link
                              onClick={() => setQiaodan((qiaodan) => !qiaodan)}
                              className="flex-between text-hover"
                            >
                              Qiaodan <BsChevronCompactRight />
                            </Link>
                            {qiaodan && (
                              <div
                                data-aos="fade-left"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                                className="bg-listnav"
                              >
                                <div className="">
                                  <div className="flex-between p-[10px]  ">
                                    <span
                                      className="text-lg text-hover  cursor-pointer flex items-center"
                                      onClick={() =>
                                        setQiaodan((qiaodan) => !qiaodan)
                                      }
                                    >
                                      <BsChevronCompactLeft /> All
                                    </span>
                                    <div
                                      className="cursor-pointer    "
                                      onClick={() =>
                                        setQiaodan((qiaodan) => !qiaodan)
                                      }
                                    >
                                      <span className=" bg-hover text-xl  flex-center rounded-4xl w-[35px] h-[35px]  ">
                                        X
                                      </span>
                                    </div>
                                  </div>
                                  <div className="item-nav">
                                    <h2 className="py-4">New</h2>
                                    <ul className="item-list">
                                      <li>
                                        <Link className="text-hover">
                                          New Arrivals
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sellers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Latest Drops
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="item-nav">
                                    <h2 className="py-4">Man</h2>
                                    <ul className="item-list">
                                      <li>
                                        <Link className="text-hover">
                                          New Arrivals
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sellers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Shoes
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Clothing
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sport
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Latest Drops
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="item-nav">
                                    <h2 className="py-4">Women</h2>
                                    <ul className="item-list">
                                      <li>
                                        <Link className="text-hover">
                                          New Arrivals
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sellers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Shoes
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Clothing
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sport
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Latest Drops
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="item-nav">
                                    <h2 className="py-4">Kids</h2>
                                    <ul className="item-list">
                                      <li>
                                        <Link className="text-hover">
                                          New Arrivals
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sellers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Shoes by Age
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Clothing by Age
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Bast Sport by Age
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="text-hover">
                                          Latest Drops
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* screen md */}
      <div className="hidden md:hidden lg:block">
        <div className="flex-between px-[100px] py-[20px] ">
          <Link to="/" className="">
            <img className="w-[120px]" src="/src/assets/logo.png" alt="" />
          </Link>
          <div className="z-50">
            <ul className="flex-center gap-10 text-[17px] font-medium   ">
              <li
                onMouseEnter={() => setNike(true)}
                onMouseLeave={() => setNike(false)}
              >
                <Link to="/nike">Nike</Link>
                {nike && (
                  <div
                    data-aos="zoom-in-down"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500"
                    className="list-nav-full-screen"
                  >
                    <div className="flex justify-center gap-[100px] ">
                      <div className="item-nav">
                        <h2 className="py-4 t ">New</h2>
                        <ul className="item-list">
                          <li>
                            <Link className="text-hover">New Arrivals</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sellers</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Latest Drops</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="item-nav">
                        <h2 className="py-4 t ">Man</h2>
                        <ul className="item-list">
                          <li>
                            <Link className="text-hover">New Arrivals</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sellers</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Shoes</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Clothing</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sport</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Latest Drops</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="item-nav">
                        <h2 className="py-4 t ">Women</h2>
                        <ul className="item-list">
                          <li>
                            <Link className="text-hover">New Arrivals</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sellers</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Shoes</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Clothing</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sport</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Latest Drops</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="item-nav">
                        <h2 className="py-4 t ">Kids</h2>
                        <ul className="item-list">
                          <li>
                            <Link className="text-hover">New Arrivals</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sellers</Link>
                          </li>
                          <li>
                            <Link className="text-hover">
                              Bast Shoes by Age
                            </Link>
                          </li>
                          <li>
                            <Link className="text-hover">
                              Bast Clothing by Age
                            </Link>
                          </li>
                          <li>
                            <Link className="text-hover">
                              Bast Sport by Age
                            </Link>
                          </li>
                          <li>
                            <Link className="text-hover">Latest Drops</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li
                onMouseEnter={() => setAnta(true)}
                onMouseLeave={() => setAnta(false)}
              >
                <Link>Anta</Link>
                {anta && (
                  <div
                    data-aos="zoom-in-down"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500"
                    className="list-nav-full-screen"
                  >
                    <div className="flex justify-center gap-[100px] ">
                      <div className="item-nav">
                        <h2 className="py-4 t ">New</h2>
                        <ul className="item-list">
                          <li>
                            <Link className="text-hover">New Arrivals</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sellers</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Latest Drops</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="item-nav">
                        <h2 className="py-4 t ">Man</h2>
                        <ul className="item-list">
                          <li>
                            <Link className="text-hover">New Arrivals</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sellers</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Shoes</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Clothing</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sport</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Latest Drops</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="item-nav">
                        <h2 className="py-4 t ">Women</h2>
                        <ul className="item-list">
                          <li>
                            <Link className="text-hover">New Arrivals</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sellers</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Shoes</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Clothing</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sport</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Latest Drops</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="item-nav">
                        <h2 className="py-4 t ">Kids</h2>
                        <ul className="item-list">
                          <li>
                            <Link className="text-hover">New Arrivals</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sellers</Link>
                          </li>
                          <li>
                            <Link className="text-hover">
                              Bast Shoes by Age
                            </Link>
                          </li>
                          <li>
                            <Link className="text-hover">
                              Bast Clothing by Age
                            </Link>
                          </li>
                          <li>
                            <Link className="text-hover">
                              Bast Sport by Age
                            </Link>
                          </li>
                          <li>
                            <Link className="text-hover">Latest Drops</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li
                onMouseEnter={() => setSalomon(true)}
                onMouseLeave={() => setSalomon(false)}
              >
                <Link>Salomon</Link>
                {salomon && (
                  <div
                    data-aos="zoom-in-down"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500"
                    className="list-nav-full-screen"
                  >
                    <div className="flex justify-center gap-[100px] ">
                      <div className="item-nav">
                        <h2 className="py-4 t ">New</h2>
                        <ul className="item-list">
                          <li>
                            <Link className="text-hover">New Arrivals</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sellers</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Latest Drops</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="item-nav">
                        <h2 className="py-4 t ">Man</h2>
                        <ul className="item-list">
                          <li>
                            <Link className="text-hover">New Arrivals</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sellers</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Shoes</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Clothing</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sport</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Latest Drops</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="item-nav">
                        <h2 className="py-4 t ">Women</h2>
                        <ul className="item-list">
                          <li>
                            <Link className="text-hover">New Arrivals</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sellers</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Shoes</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Clothing</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sport</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Latest Drops</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="item-nav">
                        <h2 className="py-4 t ">Kids</h2>
                        <ul className="item-list">
                          <li>
                            <Link className="text-hover">New Arrivals</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sellers</Link>
                          </li>
                          <li>
                            <Link className="text-hover">
                              Bast Shoes by Age
                            </Link>
                          </li>
                          <li>
                            <Link className="text-hover">
                              Bast Clothing by Age
                            </Link>
                          </li>
                          <li>
                            <Link className="text-hover">
                              Bast Sport by Age
                            </Link>
                          </li>
                          <li>
                            <Link className="text-hover">Latest Drops</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li
                onMouseEnter={() => setNewBalance(true)}
                onMouseLeave={() => setNewBalance(false)}
              >
                <Link>NewBalance</Link>
                {newBalance && (
                  <div
                    data-aos="zoom-in-down"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500"
                    className="list-nav-full-screen"
                  >
                    <div className="flex justify-center gap-[100px] ">
                      <div className="item-nav">
                        <h2 className="py-4 t ">New</h2>
                        <ul className="item-list">
                          <li>
                            <Link className="text-hover">New Arrivals</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sellers</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Latest Drops</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="item-nav">
                        <h2 className="py-4 t ">Man</h2>
                        <ul className="item-list">
                          <li>
                            <Link className="text-hover">New Arrivals</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sellers</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Shoes</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Clothing</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sport</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Latest Drops</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="item-nav">
                        <h2 className="py-4 t ">Women</h2>
                        <ul className="item-list">
                          <li>
                            <Link className="text-hover">New Arrivals</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sellers</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Shoes</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Clothing</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sport</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Latest Drops</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="item-nav">
                        <h2 className="py-4 t ">Kids</h2>
                        <ul className="item-list">
                          <li>
                            <Link className="text-hover">New Arrivals</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sellers</Link>
                          </li>
                          <li>
                            <Link className="text-hover">
                              Bast Shoes by Age
                            </Link>
                          </li>
                          <li>
                            <Link className="text-hover">
                              Bast Clothing by Age
                            </Link>
                          </li>
                          <li>
                            <Link className="text-hover">
                              Bast Sport by Age
                            </Link>
                          </li>
                          <li>
                            <Link className="text-hover">Latest Drops</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li
                onMouseEnter={() => setQiaodan(true)}
                onMouseLeave={() => setQiaodan(false)}
              >
                <Link>Qiaodan</Link>
                {qiaodan && (
                  <div
                    data-aos="zoom-in-down"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500"
                    className="list-nav-full-screen"
                  >
                    <div className="flex justify-center gap-[100px] ">
                      <div className="item-nav">
                        <h2 className="py-4 t ">New</h2>
                        <ul className="item-list">
                          <li>
                            <Link className="text-hover">New Arrivals</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sellers</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Latest Drops</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="item-nav">
                        <h2 className="py-4 t ">Man</h2>
                        <ul className="item-list">
                          <li>
                            <Link className="text-hover">New Arrivals</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sellers</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Shoes</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Clothing</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sport</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Latest Drops</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="item-nav">
                        <h2 className="py-4 t ">Women</h2>
                        <ul className="item-list">
                          <li>
                            <Link className="text-hover">New Arrivals</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sellers</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Shoes</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Clothing</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sport</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Latest Drops</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="item-nav">
                        <h2 className="py-4 t ">Kids</h2>
                        <ul className="item-list">
                          <li>
                            <Link className="text-hover">New Arrivals</Link>
                          </li>
                          <li>
                            <Link className="text-hover">Bast Sellers</Link>
                          </li>
                          <li>
                            <Link className="text-hover">
                              Bast Shoes by Age
                            </Link>
                          </li>
                          <li>
                            <Link className="text-hover">
                              Bast Clothing by Age
                            </Link>
                          </li>
                          <li>
                            <Link className="text-hover">
                              Bast Sport by Age
                            </Link>
                          </li>
                          <li>
                            <Link className="text-hover">Latest Drops</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
          <div className="z-50">
            <ul className="flex-center gap-2 text-4xl">
              <li>
                <Link onClick={() => setSearch((search) => !search)}>
                  <CiSearch />
                </Link>
                {search && (
                  <div
                    data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500"
                    className="absolute inset-0 h-screen bg-[#fff] px-[50px] py-[20px] "
                  >
                    <div className="flex-between">
                      <Link className="">
                        <img
                          className="w-[120px]   "
                          src="/src/assets/logo.png"
                          alt=""
                        />
                      </Link>
                      <div className="flex-center  bg-hover btn-color  rounded-4xl  ">
                        <CiSearch className="btn-color cursor-pointer bg-hover p-0.5 text-3xl rounded-4xl" />
                        <input
                          className="w-[65vw]  outline-none border-none text-lg"
                          type="text"
                          placeholder="Search"
                        />
                      </div>
                      <span
                        className="text-lg text-hover cursor-pointer "
                        onClick={() => setSearch((s) => !s)}
                      >
                        Cancel
                      </span>
                    </div>
                    <div className="py-5"></div>
                    <h2 className="text-lg font-medium py-[10px] text-color ">
                      Pupour Search
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {DataSearch.slice(0, 7).map((e, i) => (
                        <div key={i} className="">
                          <p
                            data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="700"
                            data-aos-duration="500"
                            className="text-sm cursor-pointer  font-black w-full btn-color bg-hover text-center rounded-4xl py-2 px-[20px]  "
                          >
                            {e.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
              <li>
                <Link>
                  <CiHeart />
                </Link>
              </li>
              <li>
                <Link>
                  <CiShoppingCart />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
