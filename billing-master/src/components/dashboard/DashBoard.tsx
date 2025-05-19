import React from "react";
import ReactApexChart from "react-apexcharts";

type Props = {};

const DashBoard = (props: Props) => {
  const data = [30, 40, 45, 50, 49, 60, 70, 91, 125];
  const lineGraphOptions = {
    chart: {
      type: "line",
      // Add title to line chart
      toolbar: {
        show: true,
        tools: {
          download: false,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
        },
        autoSelected: "zoom",
      },
    },
    series: [
      {
        name: "Series 1",
        data: data,
      },
    ],
    title: {
      text: "Business Analytics",
      align: "center",
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#263238",
      },
    },
  };
  const pieChartOptions = {
    chart: {
      type: "pie",
      // Add title to pie chart
      toolbar: {
        show: true,
        tools: {
          download: false,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
        },
        autoSelected: "zoom",
      },
    },
    series: [44, 55, 41, 17, 15],
    labels: ["A", "B", "C", "D", "E"],
    title: {
      text: "Product Sales ",
      align: "center",
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#263238",
      },
    },
  };

  const barChartOptions = {
    chart: {
      type: "bar",
      // Add title to bar chart
      toolbar: {
        show: true,
        tools: {
          download: false,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
        },
        autoSelected: "zoom",
      },
    },
    series: [
      {
        name: "Series 1",
        data: data,
      },
    ],
    title: {
      text: "Sales Growth",
      align: "center",
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#263238",
      },
    },
  };
  return (
    <div className="bg-white p-4 flex flex-col shadow-lg rounded-lg">
      <div className=" max-w-3xl ">
        <ReactApexChart
          options={lineGraphOptions}
          series={lineGraphOptions.series}
          type="line"
          height={270}
        />
      </div>
      <div className=" flex justify-between ">
        <div className=" w-96">
          <ReactApexChart
            options={barChartOptions}
            series={barChartOptions.series}
            type="bar"
            height={300}
          />
        </div>
        <div className="w-96 ">
          <ReactApexChart
            options={pieChartOptions}
            series={pieChartOptions.series}
            type="pie"
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
