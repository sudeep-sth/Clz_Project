// {
//     type: "text",
//     label: "Category Name",
//     name: "name",
//     placeholder: "Enter Category Name",
//     validation: {
//       required: {
//         value: true,
//         message: "Category Name is required",
//       },
//     },
//   },
const login = [
  {
    type: "text",
    label: "Username",
    name: "username",
    placeholder: "Enter Username",
    validation: {
      required: {
        value: true,
        message: "Username is required",
      },
    },
  },
  {
    type: "password",
    label: "Password",
    name: "password",
    placeholder: "Enter Password",
    validation: {
      required: {
        value: true,
        message: "Password is required",
      },
    },
  },
];

export default login;
