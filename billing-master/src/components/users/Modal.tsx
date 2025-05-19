import React, { useEffect } from "react";
import Input from "../common/Input";
import { useForm } from "react-hook-form";
import userfields from "../inputfields/user";
import { TUser } from "@/pages/shop/users";
import {
  useRegisterMutation,
  useUpdateUserMutation,
} from "@/redux/rtk/user/userApi";
import { mutationHandler } from "@/utils/mutationHandler";

type Props = {
  user?: any;
};

const Modal = ({ user }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const [registerUser, { data }] = useRegisterMutation();
  const [updateUser] = useUpdateUserMutation();

  const submithandler = async (data: any) => {
    if (user) {
      await mutationHandler(updateUser, { id: user._id, body: data });
    } else {
      await mutationHandler(registerUser, data);
    }
  };

  useEffect(() => {
    if (user) {
      userfields.forEach((field) => {
        setValue(field.name, user[field.name]);
      });
    }
  }, [user]);

  return (
    <>
      <form
        onSubmit={handleSubmit(submithandler)}
        method="dialog"
        className="modal-box   max-w-sm"
      >
        <h3 className="font-bold text-lg">{user ? "Edit" : "Add"} User?</h3>
        {userfields.map((field) => (
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
        <button id="close">close</button>
      </form>
    </>
  );
};

export default Modal;
