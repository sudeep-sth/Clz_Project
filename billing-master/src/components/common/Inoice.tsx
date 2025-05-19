import React, { useState } from "react";

type Props = {
  order?: any;
};

function Invoice({ order }: Props) {
  const [invoiceId, setInvoiceId] = useState(order._id);
  const [customerName, setCustomerName] = useState(order.order.customername);
  const [products, setProducts] = useState<any>(order.order.orderdetails);

  // Calculate total, discount, tax, and final amount
  const total = products.reduce(
    (acc: any, product: any) => acc + product.quantity * product.product.price,
    0
  );
  //   const discount = order.discount; // Example discount percentage
  const discountAmount = order.discount;
  //   const taxRate = 8; // Example tax rate percentage
  const taxAmount = order.tax;
  const finalAmount = total - discountAmount + taxAmount;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Invoice</h1>
        <p>Invoice ID: INV{invoiceId.slice(0, 3)}</p>
        <p>Customer Name: {customerName}</p>
      </div>
      <div className="mb-4">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-400 py-2">Product Name</th>
              <th className="border border-gray-400 py-2">Quantity</th>
              <th className="border border-gray-400 py-2">Price</th>
              <th className="border border-gray-400 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: any, index: any) => (
              <tr key={index}>
                <td className="border pl-2 border-gray-400 py-2">{product?.product?.name}</td>
                <td className="border border-gray-400 py-2 pl-2">
                  {product.quantity}
                </td>
                <td className="border border-gray-400 py-2 pl-2">
                  Rs.{product.product.price}
                </td>
                <td className="border border-gray-400 py-2 pl-2">
                  Rs.{product.quantity * product.product.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-4">
        <p className="text-xl font-bold">Discount: Rs.{discountAmount}</p>
        <p className="text-xl font-bold">Tax: Rs.{taxAmount}</p>
        <p className="text-xl font-bold">Total: Rs.{total.toFixed(2)}</p>
      </div>
      <div className="mb-4">
        <p className="text-xl font-bold">
          Final Amount: Rs.{finalAmount.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default Invoice;
