// {
//     type: "selection",
//     label: "User Role",
//     name: "role",
//     placeholder: "Enter User Role",
//     validation: {
//       required: {
//         value: true,
//         message: "User Role is required",
//       },
//     },
//     options: [
//       {
//         value: "admin",
//         label: "Admin",
//       },
//       {
//         value: "editor",
//         label: "Editor",
//       },
//       {
//         value: "user",
//         label: "User",
//       },
//     ],
//   },

const productfields = [
  {
    type: "text",
    label: "Product Name",
    name: "name",
    placeholder: "Enter Product Name",
    validation: {
      required: {
        value: true,
        message: "Product Name is required",
      },
      pattern: {
        value: /^[A-Za-z]+$/i,
        message: "Product should only contain alphabets",
      },
    },
  },
  {
    type: "text",
    label: "Product Description",
    name: "description",
    placeholder: "Enter Product Description",
    validation: {},
  },
  {
    type: "number",
    label: "Product Price",
    name: "price",
    placeholder: "Enter Product Price",
    validation: {
      required: {
        value: true,
        message: "Product Price is required",
      },
    },
  },
  {
    type: "selection",
    label: "Category",
    name: "category",
    placeholder: "Enter Category",
    validation: {
      required: {
        value: true,
        message: "Category is required",
      },
    },
    options: [],
  },
  {
    type: "selection",
    label: "Product Status",
    name: "status",
    placeholder: "Enter Product Status",
    validation: {
      required: {
        value: true,
        message: "Product Status is required",
      },
    },
    options: [
      {
        value: "active",
        label: "Active",
      },
      {
        value: "inactive",
        label: "Inactive",
      },
    ],
  },
];

export default productfields;
