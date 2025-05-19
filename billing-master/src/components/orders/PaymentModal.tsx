import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../common/Input";
import { mutationHandler } from "@/utils/mutationHandler";
import { useCreateSalesMutation } from "@/redux/rtk/user/salesApi";
import Invoice from "../common/Inoice";
import { useReactToPrint } from "react-to-print";

type Props = {
  gross: any;
  orderid: any;
};

const PaymentModal = ({ gross, orderid }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm();

  const [createSales, { data }] = useCreateSalesMutation();

  const addref = React.useRef<any>(null);
  const handlePrint = useReactToPrint({
    content: () => addref.current,
  });

  const submithandler = async (data: any) => {
    await mutationHandler(createSales, {
      ...data,
      tax: data.tax === 0 ? "0" : data.tax,
      discount: data.discount === 0 ? "0" : data.discount,
      order: orderid,
    });
    handlePrint();
  };

  useEffect(() => {
    if (gross) {
      setValue("gross", gross);
      setValue("net", gross);
    }
    setValue("discount", 0);
    setValue("tax", 0);
  }, [gross]);

  useEffect(() => {
    if (gross) {
      const discount = Number(watch("discount"))
        ? Number(watch("discount"))
        : 0;
      const tax = Number(watch("tax")) ? Number(watch("tax")) : 0;
      const net = gross - discount + tax;
      setValue("net", net);
    }
  }, [watch("discount"), watch("tax")]);

  return (
    <>
      <form
        onSubmit={handleSubmit(submithandler)}
        method="dialog"
        className="modal-box   max-w-sm"
      >
        <h3 className="font-bold text-lg">Proceed To Payment</h3>
        <div>
          <Input
            label="Gross Amount"
            name="gross"
            placeholder="Enter Gross Amount"
            register={register}
            errors={errors}
            type="text"
            validation={{}}
            disabled={true}
          />
        </div>

        <div>
          <Input
            label="Discount"
            name="discount"
            placeholder="Enter Discount"
            register={register}
            errors={errors}
            type="number"
            validation={{
              required: "Discount is required",
            }}
          />
        </div>

        <div>
          <Input
            label="Tax"
            name="tax"
            placeholder="Enter Tax"
            register={register}
            errors={errors}
            type="number"
            validation={{
              required: "Tax is required",
            }}
          />
        </div>

        <div>
          <Input
            label="Net Amount"
            name="net"
            placeholder="Enter Net Amount"
            register={register}
            errors={errors}
            type="text"
            validation={{}}
            disabled={true}
          />
        </div>

        <div>
          <Input
            label="Payment Method"
            name="paymentmethod"
            placeholder="Payment Method"
            register={register}
            errors={errors}
            validation={{
              required: "Customer Name is required",
            }}
            type="selection"
            options={[
              {
                label: "Cash",
                value: "Cash",
              },
              {
                label: "Card",
                value: "Card",
              },
              {
                label: "Cheque",
                value: "Cheque",
              },
              {
                label: "Digital Wallet",
                value: "Digital Wallet",
              },
              {
                label: "Other",
                value: "Other",
              },
            ]}
          />
        </div>

        <div className="modal-action">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button id="close">close</button>
      </form>
      {data && (
        <div className=" printer" ref={addref}>
          <Invoice order={data?.order} />
        </div>
      )}
    </>
  );
};

export default PaymentModal;
