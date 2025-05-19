import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TOrder } from "@/pages/shop/orders";
import { RiAddLine, RiCloseLine } from "react-icons/ri";
import { useGetAllProductsQuery } from "@/redux/rtk/user/productApi";
import { v4 as uuidv4 } from "uuid";
import Input from "../common/Input";
import { mutationHandler } from "@/utils/mutationHandler";
import {
  useCreateOrderMutation,
  useUpdateOrderMutation,
} from "@/redux/rtk/user/orderApi";
import toast from "react-hot-toast";

type Props = {
  order?: TOrder;
};

const Modal = ({ order }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const [createOrder] = useCreateOrderMutation({});
  const [updateOrder] = useUpdateOrderMutation({});

  const { data: Products } = useGetAllProductsQuery({});
  const [orderdetails, setOrderdetails] = React.useState<any>([]);

  useEffect(() => {
    Products &&
      orderdetails.length === 0 &&
      setOrderdetails([
        {
          id: uuidv4(),
          product: Products.products[0]._id,
          quantity: 0,
        },
      ]);
  }, [Products]);

  const submithandler = async (data: any) => {
    const orderdetailsTemp = orderdetails
      .filter((orderdetail: any) => {
        return orderdetail.quantity !== 0;
      })
      .map((orderdetail: any) => {
        return {
          product: orderdetail.product,
          quantity: orderdetail.quantity,
        };
      });

    if (orderdetailsTemp.length === 0) {
      return toast.error("Please add atleast one product");
    }
    if (order) {
      await mutationHandler(updateOrder, {
        id: order._id,
        body: {
          ...data,
          orderdetails: orderdetailsTemp,
        },
      });
    } else {
      await mutationHandler(createOrder, {
        ...data,
        orderdetails: orderdetailsTemp,
      });
    }
  };

  useEffect(() => {
    if (order) {
      setValue("customername", order.customername);
      setValue("orderstatus", order.orderstatus);
      const preparingOrderDetails = order.orderdetails.map(
        (orderdetail: any) => {
          return {
            id: uuidv4(),
            product: orderdetail.product._id,
            quantity: orderdetail.quantity,
          };
        }
      );
      setOrderdetails(preparingOrderDetails);
    }
  }, [order]);
  const quantitychangehandler = (event: any, id: any) => {
    const neworderdetails = orderdetails.map((orderdetail: any) => {
      if (orderdetail.id === id) {
        return {
          ...orderdetail,
          quantity: event.target.value,
        };
      }
      return orderdetail;
    });
    setOrderdetails(neworderdetails);
  };

  const productchangehandler = (event: any, id: any) => {
    const neworderdetails = orderdetails.map((orderdetail: any) => {
      if (orderdetail.id === id) {
        return {
          ...orderdetail,
          product: event.target.value,
        };
      }
      return orderdetail;
    });
    setOrderdetails(neworderdetails);
  };

  const removeorderdetailhandler = (event: any, id: any) => {
    const tempdata = [...orderdetails];
    const neworderdetails = tempdata.filter((orderdetail: any) => {
      return orderdetail.id !== id;
    });
    setOrderdetails(neworderdetails);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(submithandler)}
        method="dialog"
        className="modal-box   max-w-sm"
      >
        <h3 className="font-bold text-lg">Make Order</h3>
        <label className="label">
          <span className="label-text font-semibold text-sm text-gray-700">
            Product
          </span>
        </label>

        <div className="flex flex-col gap-2 ">
          {orderdetails.map((orderdetail: any, index: number) => (
            <div key={index} className="flex gap-2">
              <select
                value={orderdetail.product}
                onChange={(event) =>
                  productchangehandler(event, orderdetail.id)
                }
                className="select select-sm !h-[40px] select-bordered focus:!outline-none w-full max-w-xs"
              >
                {Products?.products?.map((product: any) => (
                  <option key={product._id} value={product._id}>
                    {product.name}
                  </option>
                ))}
              </select>
              <input
                value={orderdetail.quantity}
                onChange={(event) =>
                  quantitychangehandler(event, orderdetail.id)
                }
                type="number"
                placeholder="Quantity"
                className="input input-bordered focus:border-gray-600 input-sm !h-[40px] focus:!outline-none w-full max-w-xs"
              />

              {index + 1 === orderdetails.length && (
                <button
                  onClick={() => {
                    setOrderdetails([
                      ...orderdetails,
                      {
                        id: uuidv4(),
                        product: Products.products[0]._id,
                        quantity: 0,
                      },
                    ]);
                  }}
                  type="button"
                  className="btn btn-sm btn-circle btn-success "
                >
                  <RiAddLine className="text-white" />
                </button>
              )}

              {index + 1 !== orderdetails.length && (
                <button
                  onClick={(event) =>
                    removeorderdetailhandler(event, orderdetail.id)
                  }
                  type="button"
                  className="btn btn-sm btn-circle btn-error "
                >
                  <RiCloseLine className="text-white" />
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="">
          <Input
            label="Customer Name"
            name="customername"
            placeholder="Customer Name"
            register={register}
            errors={errors}
            validation={{
              required: {
                value: true,
                message: "Customer Name is required",
              },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Customer should only contain alphabets",
              },
            }}
            type="text"
          />
        </div>

        <div>
          <Input
            label="Order Status"
            name="orderstatus"
            placeholder=""
            register={register}
            errors={errors}
            type="selection"
            validation={{
              required: "Order Status is required",
            }}
            options={[
              {
                label: "Issued",
                value: "Issued",
              },
              {
                label: "Cooking",
                value: "Cooking",
              },
              {
                label: "Completed",
                value: "Completed",
              },
            ]}
          />
        </div>

        <div className="modal-action">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button id="close">close</button>
      </form>
    </>
  );
};

export default Modal;
