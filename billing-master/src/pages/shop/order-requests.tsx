import React from "react";
import dynamic from "next/dynamic";
import { useGetAllUsersQuery } from "@/redux/rtk/user/userApi";
import { TProduct } from "./products";
import { useGetAllOrderRequestQuery, useGetAllOrdersQuery } from "@/redux/rtk/user/orderApi";
import OrderRow from "@/components/orders/OrderRow";
import Modal from "@/components/orders/Modal";
import OrderRequestRow from "@/components/orders/OrderRequestRow";
type Props = {};
// import UsersRow from "@/components/users/UsersRow";
// const UsersRow = dynamic(() => import("@/components/users/UsersRow"));

export type TOrder = {
  _id: number;
  orderdetails: {
    product: TProduct;
    quantity: number;
  }[];
  customername: string;
  orderstatus: string;
};

const Orderrequests = (props: Props) => {
  const { data: Orders } = useGetAllOrderRequestQuery({});
  const addref = React.useRef<any>(null);
  return (
    <div>
      <div className=" text-xl flex justify-between px-5 font-semibold text-gray-700 my-6">
        <div>Order Requests</div>
        {/* <button
          onClick={() => addref.current?.showModal()}
          className=" btn btn-sm h-[40px] btn-success text-white px-4"
        >
          <span className=" text-xl">+</span>Make Order
        </button> */}
      </div>
      <div className="overflow-x-auto">
        <table className="table table-lg">
          {/* head */}
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Order Details</th>
              <th>Gross Amount</th>
              <th>Order Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {Users &&
              Users?.users?.map((user: TUser) => (
                <UsersRow key={user._id} user={user} />
              ))} */}

            {Orders &&
              Orders?.orders?.map((order: TOrder) => (
                <OrderRequestRow order={order} key={order._id} />
              ))}
          </tbody>
        </table>
      </div>

      <dialog ref={addref} id="my_modal_1" className="modal">
        <Modal />
      </dialog>
    </div>
  );
};

export default Orderrequests;
