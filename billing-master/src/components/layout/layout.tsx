/* eslint-disable @next/next/no-img-element */
import React from "react";
// RxDashboard, FiUsers, MdOutlineSoupKitchen, MdTableBar, MdTableRestaurant, BsGraphUp, TbReport
import { PiBowlFoodFill } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import { MdOutlineSoupKitchen } from "react-icons/md";
import { MdTableBar } from "react-icons/md";
import { MdTableRestaurant } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import Cookies from "js-cookie";
type Props = {
  children: React.ReactNode;
};

// random changes

const randomImage =
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
const route = [
  {
    name: "Dashboard",
    path: "/shop/dashboard",
    icon: <RxDashboard />,
  },
  {
    name: "Users",
    path: "/shop/users",
    icon: <FiUsers />,
  },
  {
    name: "Product Categories",
    path: "/shop/category",
    icon: <MdOutlineSoupKitchen />,
  },
  {
    name: "Products",
    path: "/shop/products",
    icon: <PiBowlFoodFill />,
  },
  {
    name: "Order Requests",
    path: "/shop/order-requests",
    icon: <MdTableRestaurant />,
  },
  {
    name: "Active Orders",
    path: "/shop/orders",
    icon: <MdTableBar />,
  },
  {
    name: "Sales",
    path: "/shop/sales",
    icon: <BsGraphUp />,
  },
  // {
  //   name: "Daily Sales Report",
  //   path: "/shop/daily-sales-report",
  //   icon: <TbReport />,
  // },
];

const Layout = (props: Props) => {
  const router = useRouter();
  const logouthandler = () => {
    Cookies.remove("auth_token");
    window.location.href = "/";
  };
  return (
    <div>
      {router && router.pathname.split("/")[1] === "shop" ? (
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <div className="navbar px-4 bg-gray-100">
              <div className="flex-1 flex gap-2 ">
                <label
                  htmlFor="my-drawer-2"
                  className="btn drawer-button lg:hidden"
                >
                  <GiHamburgerMenu className="text-xl" />
                </label>
                <a className=" font-semibold text-xl">Billing Software</a>
              </div>
              <div className="flex-none">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={randomImage} alt="profile_image" />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li onClick={logouthandler}>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* end */}
            <div className="p-4">{props.children}</div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu  flex flex-col justify-around  w-72 min-h-full bg-[#0E86D4] text-base-content">
              {/* <!-- Sidebar content here --> */}

              <div className=" flex flex-col gap-1">
                {route.map((item, index) => {
                  return (
                    <Link
                      href={item.path}
                      key={index}
                      className={`
              flex items-center p-4 mx-2 rounded-md font-semibold hover:bg-[#055C9D] text-white cursor-pointer duration-300 ${
                item.path === router.pathname ? "bg-[#055C9D]" : ""
              }
              `}
                    >
                      <div className="mr-4 text-xl">{item.icon}</div>
                      <div className="">{item.name}</div>
                    </Link>
                  );
                })}
              </div>
              <div></div>
            </ul>
          </div>
        </div>
      ) : (
        <div>{props.children}</div>
      )}
    </div>
  );
};

export default Layout;

// <div className=" h-screen w-full flex">
//   <div className=" w-72 h-full flex flex-col justify-around bg-[#0E86D4] ">
//   <div className=" flex flex-col gap-1">
//       {route.map((item, index) => {
//         return (
//           <Link
//             href={item.path}
//             key={index}
//             className={`
//             flex items-center p-4 mx-2 rounded-md font-semibold hover:bg-[#055C9D] text-white cursor-pointer duration-300 ${
//               item.path === router.pathname ? "bg-[#055C9D]" : ""
//             }
//             `}
//           >
//             <div className="mr-4 text-xl">{item.icon}</div>
//             <div>{item.name}</div>
//           </Link>
//         );
//       })}
//     </div>
//     <div></div>
//   </div>
//   <div className=" flex-1">{props.children}</div>
// </div>
