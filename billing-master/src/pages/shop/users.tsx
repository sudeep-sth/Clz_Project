import React from "react";
import dynamic from "next/dynamic";
import { useGetAllUsersQuery } from "@/redux/rtk/user/userApi";
import Modal from "@/components/users/Modal";
type Props = {};
// import UsersRow from "@/components/users/UsersRow";
const UsersRow = dynamic(() => import("@/components/users/UsersRow"));
export type TUser = {
  _id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};

const Users = (props: Props) => {
  const { data: Users } = useGetAllUsersQuery({});
  const addref = React.useRef<any>(null);
  return (
    <div>
      <div className=" text-xl flex justify-between px-5 font-semibold text-gray-700 my-6">
        <div>Users</div>
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
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Users &&
              Users?.users?.map((user: TUser) => (
                <UsersRow key={user._id} user={user} />
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

export default Users;
