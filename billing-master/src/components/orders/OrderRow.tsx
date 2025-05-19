import React, { useMemo, useRef } from "react";
import { LuEdit } from "react-icons/lu";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Modal from "./Modal";
import DeleteModal from "../common/DeleteModal";
import { mutationHandler } from "@/utils/mutationHandler";
import { TOrder } from "@/pages/shop/orders";
import { BsCurrencyDollar } from "react-icons/bs";
import { useDeleteOrderMutation } from "@/redux/rtk/user/orderApi";
import PaymentModal from "./PaymentModal";

type Props = {
  order: TOrder;
};

const OrderRow = ({ order }: Props) => {
  const editref = useRef<any>(null);
  const deleteref = useRef<any>(null);
  const paymentref = useRef<any>(null);

  const [deleteOrder] = useDeleteOrderMutation();

  const deleteHandler = async () => {
    await mutationHandler(deleteOrder, order._id);
  };

  const gross = useMemo(() => {
    if (order) {
      //calculate total
      const total = order.orderdetails.reduce((acc, orderdetail) => {
        return acc + orderdetail.product.price * orderdetail.quantity;
      }, 0);
      return total;
    }
  }, [order]);

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
      {/* <td>{user.email}</td>
      <td>{user.role}</td> */}
      <td>
        <div className=" flex gap-2 ">
          {order.orderstatus === "Completed" ? (
            <button
              onClick={() => paymentref.current?.showModal()}
              className="btn btn-sm btn-circle btn-warning "
            >
              <BsCurrencyDollar className="text-white text-lg" />
            </button>
          ) : (
            <>
              <button
                onClick={() => editref.current?.showModal()}
                className="btn btn-sm  btn-circle btn-warning"
              >
                <LuEdit className="text-white" />
              </button>
              <dialog ref={deleteref} id="my_modal_1" className="modal">
                <DeleteModal delteHandler={deleteHandler} />
              </dialog>
              <button
                onClick={() => deleteref.current?.showModal()}
                className="btn btn-sm btn-circle btn-error "
              >
                <MdOutlineDeleteOutline className="text-white" />
              </button>
            </>
          )}

          <dialog ref={editref} id="my_modal_1" className="modal">
            <Modal order={order} />
          </dialog>
          <dialog ref={paymentref} className="modal">
            <PaymentModal orderid={order._id} gross={gross} />
          </dialog>
        </div>
      </td>
    </tr>
  );
};

export default OrderRow;
