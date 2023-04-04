import { StyledNavbar, StyledNavItem } from "./styles/StyledNavbar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <StyledNavbar>
      <StyledNavItem onClick={() => navigate("/")}>결제입력</StyledNavItem>
      <StyledNavItem onClick={() => navigate("/list")}>결제내역</StyledNavItem>
      <StyledNavItem onClick={() => navigate("/fixed")}>고정지출</StyledNavItem>
      <StyledNavItem onClick={() => navigate("/about")}>about</StyledNavItem>
    </StyledNavbar>
  );
};
export default Navbar;
