import React from "react";
import { useForm } from "react-hook-form";
import Input from "../common/Input";
import productfields from "../inputfields/product";
import { useGetAllCategoriesQuery } from "@/redux/rtk/user/categoryApi";
import { TCategory } from "@/pages/shop/category";
import {
  useCreateProductMutation,
  useUpdateProductMutation,
} from "@/redux/rtk/user/productApi";
import { mutationHandler } from "@/utils/mutationHandler";

type Props = {
  product?: any;
};

const Modal = ({ product }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();
  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const submithandler = async (data: any) => {
    if (product) {
      await mutationHandler(updateProduct, { body: data, id: product._id });
    } else {
      await mutationHandler(createProduct, data);
    }
  };
  const { data: Categories } = useGetAllCategoriesQuery({});
  React.useEffect(() => {
    if (product) {
      productfields.forEach((field) => {
        console.log(field.name, product[field.name]);
        if (field.name === "category") {
          setValue(field.name, product[field.name]._id);
        } else {
          setValue(field.name, product[field.name]);
        }
      });
    }
  }, [Categories, product]);
  return (
    <>
      <form
        onSubmit={handleSubmit(submithandler)}
        method="dialog"
        className="modal-box max-w-sm"
      >
        <h3 className="font-bold text-lg">{product?"Edit" : "Add"} Product?</h3>
        {Categories &&
          productfields.map((field) =>
            field.name === "category" ? (
              <Input
                key={field.name}
                label={field.label}
                name={field.name}
                placeholder={field.placeholder}
                register={register}
                errors={errors}
                validation={field.validation}
                type={field.type}
                options={Categories.categories.map((category: TCategory) => ({
                  value: category._id,
                  label: category.name,
                }))}
              />
            ) : (
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
            )
          )}

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
