import React from "react";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <div className="main">
        <section className="bg-main bg-cover bg-center py-20 text-white font-bold">
          <div
            className="global-px container aos-init aos-animate"
            data-aos="fade-up"
          >
            <div className="flex flex-col gap-6 w-[75%] lg:w-[50%] text-sm">
              <h2 className="text-4xl font-bold">Coffee House</h2>
              <p>The Perfect blend</p>
              <div className="mt-5 aos-init aos-animate " data-aos="fade-up">
                <Link
                  className="background px-6 py-4 text-[#6A4029] rounded-xl "
                  href={"/menu/"}
                >
                  Menu
                </Link>
              </div>
            </div>
            <section className="relative bg-white mt-20 mb-[-9rem] rounded-xl shadow-xl text-quartenary flex flex-row py-5 justify-center items-center text-center md:text-left">
              <aside className="flex-1 border-r-2 py-2 md:py-6 flex flex-col md:flex-row justify-center gap-3 md:gap-8 items-center">
                <div>
                  <div className="bg-secondary rounded-full p-2 w-10 aspect-square flex justify-center items-center">
                    <img src={"/"} alt="" />
                  </div>
                </div>
                <div>
                  <p className="text-md lg:text-xl">90+</p>
                  <p className="font-normal text-primary">Staff</p>
                </div>
              </aside>
              <aside className="flex-1 border-r-2 py-2 md:py-6 flex flex-col md:flex-row justify-center gap-3 md:gap-8 items-center">
                <div className="bg-secondary rounded-full p-2 w-10 aspect-square flex justify-center items-center">
                  <img src={"/"} alt="" />
                </div>
                <div>
                  <p className="text-md lg:text-xl">800+</p>
                  <p className="font-normal text-primary">Customers</p>
                </div>
              </aside>
              <aside className="flex-1 py-2 md:py-6 flex flex-col md:flex-row justify-center gap-3 md:gap-8 items-center">
                <div className="bg-secondary rounded-full p-2 w-10 aspect-square flex justify-center items-center">
                  <img src={"/"} alt="" />
                </div>
                <div>
                  <p className="text-md lg:text-xl">30+</p>
                  <p className="font-normal text-primary">Stores</p>
                </div>
              </aside>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
