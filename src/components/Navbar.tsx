import { StyledNavbar, StyledNavItem } from "./styles/StyledNavbar";
import { useNavigate, useLocation } from "react-router-dom";
const Navbar = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  return (
    <StyledNavbar>
      <StyledNavItem
        isSelected={pathname === "/"}
        onClick={() => navigate("/")}
      >
        결제입력
      </StyledNavItem>
      <StyledNavItem
        isSelected={pathname === "/list"}
        onClick={() => navigate("/list")}
      >
        결제내역
      </StyledNavItem>
      <StyledNavItem
        isSelected={pathname === "/fixed"}
        onClick={() => navigate("/fixed")}
      >
        고정지출
      </StyledNavItem>
      <StyledNavItem
        isSelected={pathname === "/about"}
        onClick={() => navigate("/about")}
      >
        about
      </StyledNavItem>
    </StyledNavbar>
  );
};
export default Navbar;
