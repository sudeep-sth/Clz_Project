import {
  useGetDailysalesQuery,
} from "@/redux/rtk/user/salesApi";
import React from "react";

type Props = {};

const DailySaleReport = (props: Props) => {
  // const {data} = useGetDailySalesQuery({})
  const { data } = useGetDailysalesQuery({});
  console.log(data);
  return (
    <div>
      <div className=" text-xl font-semibold text-gray-700 my-6">
        Daily Sales Report
      </div>
      <div className="overflow-x-auto">
        <table className="table table-lg">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr className="hover">
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DailySaleReport;
