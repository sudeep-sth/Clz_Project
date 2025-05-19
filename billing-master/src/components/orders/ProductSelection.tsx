import React from "react";
import { RiAddLine } from "react-icons/ri";

type Props = {
  register: any;
  orderdetails: any;
  setOrderdetails: any;
  Products: any;
};

const ProductSelection = ({
  Products,
  orderdetails,
  register,
  setOrderdetails,
}: Props) => {
  return (
    <div className="flex gap-2">
      <select
        {...register("product", { required: true })}
        className="select select-sm !h-[40px] select-bordered focus:!outline-none w-full max-w-xs"
      >
        {/* <option value="">Select Product</option>
              <option value="">1</option>
              <option value="">2</option> */}

        {Products?.products?.map((product: any) => (
          <option key={product._id} value={product._id}>
            {product.name}
          </option>
        ))}
      </select>
      <input
        {...register("quantity", { required: true })}
        type="number"
        placeholder="Quantity"
        className="input input-bordered focus:border-gray-600 input-sm !h-[40px] focus:!outline-none w-full max-w-xs"
      />

      <button
        onClick={() => {
          setOrderdetails([
            ...orderdetails,
            {
              product: "",
              quantity: 0,
            },
          ]);
        }}
        className="btn btn-sm btn-circle btn-error "
      >
        <RiAddLine className="text-white" />
      </button>
    </div>
  );
};

export default ProductSelection;
