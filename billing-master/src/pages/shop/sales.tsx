import {
  useGetAllSalesByDateQuery,
  useLazyGetAllSalesByDateQuery,
} from "@/redux/rtk/user/salesApi";
import React, { useEffect, useState } from "react";

type Props = {};

const Sales = (props: Props) => {
  const [getAllSalesQuery, { data: salesdata }] =
    useLazyGetAllSalesByDateQuery();
  const newdate = new Date();
  const formattedToday = newdate.toISOString().split("T")[0];
  const [date, setDate] = useState<any>(formattedToday);

  // const [date, setDate] = useState<any>(new Date());

  useEffect(() => {
    getAllSalesQuery(date);
  }, [date]);

  console.log(salesdata, "salesdata");
  return (
    <div>
      <div className=" flex items-center justify-between">
        <div className=" text-xl font-semibold text-gray-700 my-6">Sales</div>
        {/* <div className=" h-fit">
          <input
            value={date}
            onChange={(event) => setDate(event.target.value)}
            type="date"
          />
        </div> */}
        <div className="bg-white p-4  my-4 flex gap-2 items-center rounded-lg shadow-md">
          <label htmlFor="date" className="block text-gray-600 font-medium">
            Select Date:
          </label>
          <input
            value={date}
            onChange={(event) => setDate(event.target.value)}
            type="date"
            id="date"
            name="date"
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring focus:ring-blue-400"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        {/* <table className="table table-lg">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
             <tr className="hover">
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table> */}
        <table className="table table-lg">
          {/* head */}
          <thead>
            <tr>
              <th>Invoice Id</th>
              <th>Customer Name</th>
              <th>Order Details</th>
              <th>Disount Amount</th>
              <th>Tax Amount</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {salesdata &&
              salesdata?.sales?.length > 0 &&
              salesdata?.sales?.map((salesdata: any) => {
                return (
                  <tr key={salesdata?._id}>
                    <td>{`INV-${salesdata?._id?.slice(0, 3)}`}</td>
                    <td>{salesdata?.order?.customername}</td>
                    <td>
                      {salesdata?.order?.orderdetails?.map(
                        (order: any, index: number) => {
                          return (
                            <div
                              className=" flex gap-1 font-medium"
                              key={index}
                            >
                              <div>{order?.product.name}</div>(Rs.
                              {order?.product.price}) X
                              <div>{order?.quantity}</div>
                            </div>
                          );
                        }
                      )}
                    </td>
                    <td>{salesdata?.discount}</td>
                    <td>{salesdata?.tax}</td>
                    <td>{salesdata?.net}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {salesdata?.sales?.length === 0 && (
          <div className=" font-semibold text-sm flex justify-center my-20">
            No Data Found
          </div>
        )}
      </div>
    </div>
  );
};

export default Sales;
