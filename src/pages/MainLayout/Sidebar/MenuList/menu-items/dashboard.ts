import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const dashboard = {
  id: "dashboard",
  title: "Dashboard",
  type: "group",
  children: [
    {
      id: "default",
      title: "Dashboard",
      type: "item",
      url: "/dashboard/default",
      icon: FiberManualRecordIcon,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
