const userfields = [
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
      pattern: {
        value: /^[A-Za-z]+$/i,
        message: "Username should only contain alphabets",
      },
    },
  },
  {
    type: "text",
    label: "First Name",
    name: "firstName",
    placeholder: "Enter First Name",
    validation: {
      required: {
        value: true,
        message: "First Name is required",
      },
      pattern: {
        value: /^[A-Za-z]+$/i,
        message: "Username should only contain alphabets",
      },
    },
  },
  {
    type: "text",
    label: "Last Name",
    name: "lastName",
    placeholder: "Enter Last Name",
    validation: {
      required: {
        value: true,
        message: "Last Name is required",
      },
      pattern: {
        value: /^[A-Za-z]+$/i,
        message: "Username should only contain alphabets",
      },
    },
  },
  {
    type: "text",
    label: "Email",
    name: "email",
    placeholder: "Enter Email",
    validation: {
      required: {
        value: true,
        message: "Email is required",
      },
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Email is invalid",
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
      minLength: {
        value: 8,
        message: "Password should be at least 8 characters",
      },
    },
  },
  {
    type: "selection",
    label: "User Role",
    name: "role",
    placeholder: "Enter User Role",
    validation: {
      required: {
        value: true,
        message: "User Role is required",
      },
    },
    options: [
      {
        value: "admin",
        label: "Admin",
      },
      {
        value: "editor",
        label: "Editor",
      },
      {
        value: "user",
        label: "User",
      },
    ],
  },
];

export default userfields;
