/* eslint-disable @next/next/no-img-element */
import Input from "@/components/common/Input";
import login from "@/components/inputfields/login";
import { useLoginMutation } from "@/redux/rtk/user/userApi";
import { mutationHandler } from "@/utils/mutationHandler";
import React from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";

const randomImage =
  "https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp";

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loginMutate] = useLoginMutation();
  const submithandler = async (data: any) => {
    const res = await mutationHandler(loginMutate, data);
    console.log(res);
    if (res) {
      Cookies.set("auth_token", res?.data?.auth_token, { expires: 1 });
      window.location.href = "/shop/dashboard";
    }
  };
  return (
    <form
      onSubmit={handleSubmit(submithandler)}
      className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0"
    >
      <div className="md:w-1/3 max-w-sm">
        <img src={randomImage} alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        {login.map((field) => {
          return (
            <Input
              placeholder={field.placeholder}
              key={field.name}
              name={field.name}
              label={field.label}
              type={field.type}
              register={register}
              errors={errors}
              validation={field.validation}
            />
          );
        })}
        <div className="mt-4 flex justify-between font-semibold text-sm"></div>
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
}

export default Login;
