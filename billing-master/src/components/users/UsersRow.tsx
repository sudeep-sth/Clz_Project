import { TUser } from "@/pages/shop/users";
import React, { use, useRef } from "react";
import { LuEdit } from "react-icons/lu";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Modal from "./Modal";
import DeleteModal from "../common/DeleteModal";
import { useDeleteUserMutation } from "@/redux/rtk/user/userApi";
import { mutationHandler } from "@/utils/mutationHandler";

type Props = {
  user: TUser;
};

const UsersRow = ({ user }: Props) => {
  const editref = useRef<any>(null);
  const deleteref = useRef<any>(null);
  const openmodal = (ref: any) => {
    ref.current?.showModal();
  };

  const [deleteeUser] = useDeleteUserMutation();

  const deleteHandler = async () => {
    await mutationHandler(deleteeUser, user._id);
  };
  return (
    <tr className="hover">
      <td>{user.username}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
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
            <Modal user={user} />
          </dialog>
        </div>
      </td>
    </tr>
  );
};

export default UsersRow;
