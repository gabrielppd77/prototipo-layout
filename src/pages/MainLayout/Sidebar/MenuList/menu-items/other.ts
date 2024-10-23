import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const other = {
  id: "sample-docs-roadmap",
  type: "group",
  children: [
    {
      id: "sample-page",
      title: "Sample Page",
      type: "item",
      url: "/sample-page",
      icon: FiberManualRecordIcon,
      breadcrumbs: false,
    },
    {
      id: "documentation",
      title: "Documentation",
      type: "item",
      url: "https://codedthemes.gitbook.io/berry/",
      icon: FiberManualRecordIcon,
      external: true,
      target: true,
    },
  ],
};

export default other;
