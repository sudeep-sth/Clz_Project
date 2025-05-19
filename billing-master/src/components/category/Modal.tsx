import React from "react";
import Input from "../common/Input";
import { useForm } from "react-hook-form";
import categoryfields from "../inputfields/category";
import { TCategory } from "@/pages/shop/category";
import {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} from "@/redux/rtk/user/categoryApi";
import { mutationHandler } from "@/utils/mutationHandler";

type Props = {
  category?: any;
};

const Modal = ({ category }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const [createCategory] = useCreateCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  const submithandler = async (data: any) => {
    if (category) {
      await mutationHandler(updateCategory, { id: category._id, body: data });
    } else {
      await mutationHandler(createCategory, data);
    }
  };

  React.useEffect(() => {
    if (category) {
      categoryfields.forEach((field) => {
        setValue(field.name, category[field.name]);
      });
    }
  }, [category]);

  return (
    <>
      <form
        onSubmit={handleSubmit(submithandler)}
        method="dialog"
        className="modal-box   max-w-sm"
      >
        <h3 className="font-bold text-lg">{category ? "Edit" : "Add"} Category?</h3>
        {categoryfields.map((field) => (
          <Input
            key={field.name}
            label={field.label}
            name={field.name}
            placeholder={field.placeholder}
            register={register}
            errors={errors}
            validation={field.validation}
            type={field.type}
            options={field.options ? field.options : []}
          />
        ))}

        <div className="modal-action">
          {/* <button className="btn">
          Close
        </button> */}
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </>
  );
};

export default Modal;
