import React, { useMemo, useRef } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { mutationHandler } from "@/utils/mutationHandler";
import { TOrder } from "@/pages/shop/orders";
import { FaCheck } from "react-icons/fa";
import {
  useDeleteOrderMutation,
  useUpdateOrderMutation,
} from "@/redux/rtk/user/orderApi";

type Props = {
  order: TOrder;
};

const OrderRequestRow = ({ order }: Props) => {
  const [updateOrder] = useUpdateOrderMutation();

  const gross = useMemo(() => {
    if (order) {
      //calculate total
      const total = order.orderdetails.reduce((acc, orderdetail) => {
        return acc + orderdetail.product.price * orderdetail.quantity;
      }, 0);
      return total;
    }
  }, [order]);

  const approveHandler = async () => {
    await mutationHandler(updateOrder, {
      id: order._id,
      body: {
        orderstatus: "Cooking",
      },
    });
  };

  const [deleteOrder] = useDeleteOrderMutation();

  const orderdeleteHadler = async () => {
    await mutationHandler(deleteOrder, order._id);
  };

  return (
    <tr className="hover">
      <td>{order.customername}</td>
      <td>
        <div>
          {order.orderdetails.map((orderdetail, index) => (
            <div className=" flex gap-1 font-semibold text-sm" key={index}>
              <div>{orderdetail.product.name}</div>
              <div>({orderdetail.quantity})</div>
            </div>
          ))}
        </div>
      </td>

      <td>
        <span className="">Rs.{gross && gross.toFixed(2)}</span>
      </td>

      <td>
        <span
          className={
            order.orderstatus === "Issued"
              ? "active"
              : order.orderstatus === "Cooking"
              ? " yellow"
              : "inactive"
          }
        >
          {order.orderstatus}
        </span>
      </td>

      <td>
        <div className=" flex gap-2">
          <button
            onClick={approveHandler}
            className="btn btn-xs text-xs btn-success lowercase"
          >
            <FaCheck className="text-white" />
          </button>
          <button
            onClick={orderdeleteHadler}
            className="btn btn-xs text-xs btn-error lowercase"
          >
            <MdOutlineDeleteOutline className="text-white text-lg" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default OrderRequestRow;
