import React from "react";
import { TCategory } from "./category";
import { useGetAllProductsQuery } from "@/redux/rtk/user/productApi";
import ProductRow from "@/components/products/ProductRow";
import Modal from "@/components/products/Modal";

type Props = {};

export type TProduct = {
  _id: number;
  name: string;
  price: number;
  status: string;
  description: string;
  category: TCategory;
};

const Products = (props: Props) => {
  const { data: Products } = useGetAllProductsQuery({});

  const addref = React.useRef<any>(null);

  return (
    <div>
      <div className=" text-xl flex justify-between px-5 font-semibold text-gray-700 my-6">
        <div>Products</div>
        <button
          onClick={() => addref.current?.showModal()}
          className=" btn btn-sm h-[40px] btn-success text-white px-4"
        >
          <span className=" text-xl">+</span>Add
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-lg">
          {/* head */}
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Products &&
              Products?.products?.map((product: TProduct) => (
                <ProductRow key={product._id} product={product} />
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

export default Products;
