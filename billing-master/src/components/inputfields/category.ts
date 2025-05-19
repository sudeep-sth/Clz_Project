const categoryfields = [
  {
    type: "text",
    label: "Category Name",
    name: "name",
    placeholder: "Enter Category Name",
    validation: {
      required: {
        value: true,
        message: "Category Name is required",
      },
      //should contain only strings
      pattern: {
        value: /^[a-zA-Z]+$/,
        message: "Category Name should contain only strings",
      },
    },
  },
  {
    type: "text",
    label: "Category Description",
    name: "description",
    placeholder: "Enter Category Description",
    validation: {},
  },
  {
    type: "selection",
    label: "Category Status",
    name: "status",
    placeholder: "Enter Category Status",
    validation: {
      required: {
        value: true,
        message: "Category Status is required",
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

export default categoryfields;
