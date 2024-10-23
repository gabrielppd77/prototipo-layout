import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const pages = {
  id: "pages",
  title: "Pages",
  caption: "Pages Caption",
  type: "group",
  children: [
    {
      id: "authentication",
      title: "Authentication",
      type: "collapse",
      icon: FiberManualRecordIcon,

      children: [
        {
          id: "login3",
          title: "Login",
          type: "item",
          url: "/pages/login/login3",
          target: true,
        },
        {
          id: "register3",
          title: "Register",
          type: "item",
          url: "/pages/register/register3",
          target: true,
        },
      ],
    },
  ],
};

export default pages;
