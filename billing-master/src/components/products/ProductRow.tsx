import { TProduct } from "@/pages/shop/products";
import React from "react";
import { LuEdit } from "react-icons/lu";
import DeleteModal from "../common/DeleteModal";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Modal from "./Modal";
import { useDeleteProductMutation } from "@/redux/rtk/user/productApi";
import { mutationHandler } from "@/utils/mutationHandler";

type Props = {
  product: TProduct;
};

const ProductRow = ({ product }: Props) => {
  const editref = React.useRef<any>(null);
  const deleteref = React.useRef<any>(null);
  const [deleteProduct] = useDeleteProductMutation();
  const deleteHandler = async () => {
    await mutationHandler(deleteProduct, product._id);
  };
  return (
    <tr className="hover">
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.category.name}</td>
      <td>{product.description}</td>
      <td><span className={product.status==="active"?"active":"inactive"}>{product.status}</span></td>
      <td>
        <div className=" flex gap-2 ">
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
          <dialog ref={editref} id="my_modal_1" className="modal">
            <Modal product={product} />
          </dialog>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
