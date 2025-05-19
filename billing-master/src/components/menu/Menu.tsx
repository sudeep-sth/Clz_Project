// src/components/MenuPage.js
import { useCreateOrderMutation } from "@/redux/rtk/user/orderApi";
import { useGetAllProductsQuery } from "@/redux/rtk/user/productApi";
import { mutationHandler } from "@/utils/mutationHandler";
import React, { useState } from "react";

function MenuItem({ item, onOrder }: { item: any; onOrder: any }) {
  return (
    <div className="menu-item capitalize shadow rounded-md p-4 mb-4">
      <h3 className="text-xl font-semibold">{item.name}</h3>
      <p className="text-gray-600">Price: Rs.{item.price}</p>
      <p>{}</p>
      <button
        className="bg-blue-500 rounded hover:bg-blue-600 text-white px-4 py-2 mt-2"
        onClick={() => onOrder(item)}
      >
        Add
      </button>
    </div>
  );
}

function MenuPage() {
  const { data: products } = useGetAllProductsQuery({});
  const [createOrder] = useCreateOrderMutation()

  const placeorderhandler = async() => {
    const datatosend = {
      customername:"N/A",
      orderstatus:"requested",
      orderdetails : cart.map((cart:any)=>(
        {
          product:cart.item._id,
          quantity:cart.quantity
        }
      ))
    }
    await mutationHandler(createOrder, datatosend)
    setTotalPrice(0);
    setCart([]);
  }

  const [cart, setCart] = useState<any>([]);
  const [totalPrice, setTotalPrice] = useState<any>(0);
  const addtocart = (item: any) => {
    const temodata = [...cart];
    const index = temodata.findIndex((x) => x.item._id === item._id);
    if (index === -1) {
      temodata.push({ item, quantity: 1 });
      setCart(temodata);
    } else {
      temodata[index].quantity += 1;
      setCart(temodata);
    }
    setTotalPrice(totalPrice + item.price);
  };

  return (
    <div className="menu-page container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-4">Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.products?.map((item: any) => (
          <MenuItem key={item.id} item={item} onOrder={addtocart} />
        ))}
      </div>
      <div className="cart mt-8">
        <h2 className="text-2xl font-semibold">Cart</h2>
        <ul className="list-disc list-inside">
          {cart.map((item: any) => (
            <li key={item.item.id} className="text-lg">
              {item.item.name}({item.quantity}) - Rs.{item.item.price}
            </li>
          ))}
        </ul>

        <p className="text-xl mt-4">Total Price: Rs.{totalPrice.toFixed(2)}</p>
        <div className=" flex gap-2">
          <p>
            <button
              className="border-blue-500 border hover:text-white duration-300 rounded hover:bg-blue-600 text-blue-500 px-4 py-2 mt-2"
              onClick={() => {
                setTotalPrice(0);
                setCart([]);
              }}
            >
              Clear
            </button>
          </p>
          <p>
            <button
              className="bg-blue-500 rounded hover:bg-blue-600 duration-300 text-white px-4 py-2 mt-2"
              onClick={placeorderhandler}
            >
              Make Order
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
