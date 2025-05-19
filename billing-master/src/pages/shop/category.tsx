import React from "react";
import dynamic from "next/dynamic";
import { useGetAllCategoriesQuery } from "@/redux/rtk/user/categoryApi";
import Modal from "@/components/category/Modal";
import { useGetDailysalesQuery } from "@/redux/rtk/user/salesApi";

const CategoryRow = dynamic(
  () => import("../../components/category/CategoryRow"),
  { ssr: false }
);

type Props = {};

export type TCategory = {
  _id: number;
  name: string;
  description: string;
  status: string;
};

const Category = (props: Props) => {
  const { data } = useGetAllCategoriesQuery({});
  const addcategoryref = React.useRef<any>(null);
  const {data:nepal} = useGetDailysalesQuery({})
  console.log(nepal)
  return (
    <div>
       <div className=" text-xl flex justify-between px-5 font-semibold text-gray-700 my-6">
        <div>Category</div>
        <button
          onClick={() => addcategoryref.current?.showModal()}
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
              <th>Category Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.categories.map((category: TCategory) => (
                <CategoryRow key={category._id} category={category} />
              ))}
          </tbody>
        </table>
      </div>
      <dialog ref={addcategoryref} id="my_modal_1" className="modal">
        <Modal />
      </dialog>
    </div>
  );
};

export default Category;
