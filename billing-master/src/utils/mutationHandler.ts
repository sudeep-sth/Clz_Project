import toast from "react-hot-toast";

export const mutationHandler = async (func: any, data: any) => {
  try {
    const response = await func(data);
    if (response.error) {
      toast.error(response.error.data.msg ?? "error");
      return;
    } else {
      toast.success(response.data.msg ?? "success");
    }
    return response;
  } catch (error) {
    toast.error("some error occured");
  }
};
