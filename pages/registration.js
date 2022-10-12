import React, { useEffect, useState } from "react";
import styles from "../components/home/resgister.module.css";
import classnames from "classnames";
import Image from "next/image";
import Header from "../components/navBar";
import Link from "next/link";
import Nav from "../components/layout/header/nav";
import { toast } from 'react-toastify';

function resgister() {

  const [loader, setLoader] = useState(false);
  const [countryListData, setCountryListData] = useState([]);
  const [userRegistrationData, setUserRegistrationData] = useState({
    name: "",
    mobile_no: "",
    email: "",
    country: "",
    city: "",
    address: ""
  });

  useEffect(() => {
    getCountryList();
  }, [])

  const getCountryList = async () => {
    try {
      await fetch('https://rarestsociety-apis.dtengg.com/v1/thirdparty/getcountrylist')
        .then((response) => response.json())
        .then((data) => {
          if (data.country_list) {
            setCountryListData(data.country_list)
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    setUserRegistrationData({
      ...userRegistrationData,
      [e.target.name]: e.target.value
    })
  }

  const handleRegistration = async (userData) => {
    setLoader(true)
    try {
      await fetch("https://rarestsociety-apis.dtengg.com/v1/auth/register", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(res => res.json())

        .then(response => {
          if (response.code === 400) {
            toast.error(`${response.message}`)
          } else {
            document.location.href = "/";
            toast.success(`${response.message}`)
          }
          setLoader(false)
        });
    } catch (err) {
      console.log(err);
      setLoader(false)
    }
  }


  return (
    <>
      <div className={classnames(styles.registration_Main_section)} style={{ height: "100%" }}>
        {/* <Header /> */}
        <Nav />
        <div className="">
          <div className={classnames(styles.registration_Main_section, "flex flex-row")} style={{ height: "100%" }}>
            <div className={styles.arrow}>
              <Link href={"/"}>
                <svg
                  width="17"
                  height="26"
                  viewBox="0 0 17 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 1L2 13L16 25" stroke="#F3AA93" strokeWidth="2" />
                </svg>
              </Link>
            </div>

            <div className={classnames(styles.registration_from_section, "columns-[1020px] xl:columns-[1300px]")}>
              <div className="justify-start">
                <form style={{ marginTop: "70px" }}>
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className={classnames(styles.form_Main_section, "px-4 py-5 sm:p-6")}>
                      <div className="grid grid-cols-6 gap-6 sm:mb-[69px]">
                        <div className={classnames(styles.main_title, "col-span-6 sm:col-span-6")}>
                          <div className="text-[#F4CBBE] text-[40px] capitalize">
                            <h2>acceptance of invite</h2>
                          </div>
                          <div className={classnames(styles.frist_prah, "text-white text-sm w-[350px]")}>
                            <p> Welcome back to The Macallan Society, please sign in
                              with your email address and password.
                            </p>
                          </div>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-[#F3AA93]"
                          >
                            NAME
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="first-name"
                            onChange={handleChange}
                            autoComplete="given-name"
                            className="mt-1 focus:ring-white-500 focus:border-white-500 block w-full bg-slate-300 shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-[#F3AA93]"
                          >
                            CITY
                          </label>
                          <input
                            type="text"
                            name="city"
                            id="first-name"
                            onChange={handleChange}
                            autoComplete="given-name"
                            className="mt-1 focus:ring-white-500 focus:border-white-500 block w-full bg-slate-300 shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-[#F3AA93]"
                          >
                            COUNTRY/LOCATION*
                          </label>
                          <select
                            id="country"
                            name="country"
                            onChange={handleChange}
                            autoComplete="country-name"
                            className="mt-1 block w-full bg-slate-300 py-2 px-3 border border-gray-300  rounded-md shadow-sm   sm:text-sm"
                          >
                            <option></option>
                            {
                              countryListData.map((item, index) => {
                                return (
                                  <option key={index}>{item}</option>
                                )
                              })
                            }
                            {/* <option>Canada</option>
                            <option>Mexico</option> */}
                          </select>
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-[#F3AA93]"
                          >
                            ADDRESS
                          </label>
                          <input
                            type="text"
                            name="address"
                            id="first-name"
                            onChange={handleChange}
                            autoComplete="given-name"
                            className="mt-1 focus:ring-white-500 focus:border-white-500 block w-full bg-slate-300 shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-[#F3AA93]"
                          >
                            PHONE NO.
                          </label>
                          <input
                            type="text"
                            name="mobile_no"
                            id="email-address"
                            onChange={handleChange}
                            autoComplete="email"
                            className="mt-1   block w-full bg-slate-300 shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-[#F3AA93]"
                          >
                            EMAIL
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="first-name"
                            onChange={handleChange}
                            autoComplete="given-name"
                            className="mt-1 focus:ring-white-500 focus:border-white-500 block w-full bg-slate-300 shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={classnames(styles.form_Main_section, "px-4 py-3  sm:px-6 justify-start")}>
                      <button
                        type="button"
                        className="bg-[#F3AA93] text-black py-2 font-bold px-4 rounded-full w-[150px]"
                        onClick={() => handleRegistration(userRegistrationData)}
                      >
                        {
                          loader ?
                            <div className="flex justify-center items-center border-black">
                              <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full border-x-black border-t-black border-b-[#F3AA93]" role="status">
                                <span className="visually-hidden bg-transparent"></span>
                              </div>
                            </div>
                            :
                            'Submit'
                        }
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className={classnames(styles.registration_right_section, "columns-auto justify-end items-end pr-[1.5rem]")}>
              <div className="text-center mt-[15px]">
                <Image
                  className="justify-center"
                  src="/assets/images/Vector-55.png"
                  width={5}
                  height={150}
                />
              </div>
              <div className="text-center my-[25px]">
                <Image
                  src="/assets/images/resgiter-right-img.png"
                  width={256}
                  height={461}
                />
              </div>
              <div className="text-center">
                <Image
                  className="justify-center"
                  src="/assets/images/Vector-56.png"
                  width={5}
                  height={150}
                />
              </div>
            </div>
          </div>
          <div className={classnames(styles.registration_bottom_section, "py-[120px] flex flex-col items-center")}>
            <div>
              <hr className="w-[842px]"></hr>
            </div>
            <div className={classnames(styles.frist_prah, "w-[831px] text-[#D1C7BB] justify-center text-center pt-[26px]")}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default resgister;
