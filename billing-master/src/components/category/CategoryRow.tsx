import React, { useRef } from "react";
import { LuEdit } from "react-icons/lu";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Modal from "./Modal";
import DeleteModal from "../common/DeleteModal";
import { TCategory } from "@/pages/shop/category";
import { mutationHandler } from "@/utils/mutationHandler";
import { useDeleteCategoryMutation } from "@/redux/rtk/user/categoryApi";

type Props = {
  category: TCategory;
};

const CategoryRow = ({ category }: Props) => {
  const { description, name, status, _id } = category;
  const editref = useRef<any>(null);
  const deleteref = useRef<any>(null);
  const openmodal = (ref: any) => {
    ref.current?.showModal();
  };

  const [deleteCategory] = useDeleteCategoryMutation();
  const deleteHandler = async () => {
    await mutationHandler(deleteCategory, category._id);
  };

  return (
    <tr className="hover">
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <span className={status === "active" ? "active" : "inactive"}>
          {status}
        </span>
      </td>
      <td>
        <div className=" flex gap-2 ">
          <button
            onClick={() => openmodal(editref)}
            className="btn btn-sm  btn-circle btn-warning"
          >
            <LuEdit className="text-white" />
          </button>
          <dialog ref={deleteref} id="my_modal_1" className="modal">
            <DeleteModal delteHandler={deleteHandler} />
          </dialog>
          <button
            onClick={() => openmodal(deleteref)}
            className="btn btn-sm btn-circle btn-error "
          >
            <MdOutlineDeleteOutline className="text-white" />
          </button>
          <dialog ref={editref} id="my_modal_1" className="modal">
            <Modal category={category} />
          </dialog>
        </div>
      </td>
    </tr>
  );
};

export default CategoryRow;
