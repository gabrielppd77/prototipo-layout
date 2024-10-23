import { Link } from "react-router-dom";

import ButtonBase from "@mui/material/ButtonBase";

import logo from "../../../../assets/logo.png";

const LogoSection = () => {
  return (
    <ButtonBase disableRipple component={Link} to={"/"}>
      <img src={logo} alt="Berry" width="100" />
    </ButtonBase>
  );
};

export default LogoSection;
