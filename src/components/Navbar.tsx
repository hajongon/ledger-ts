import { StyledNavbar, StyledNavItem } from "./styles/StyledNavbar"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return <StyledNavbar>
    <StyledNavItem onClick={() => navigate('/')}>input</StyledNavItem>
    <StyledNavItem onClick={() => navigate('/list')}>list</StyledNavItem>
    <StyledNavItem onClick={() => navigate('/about')}>about</StyledNavItem>
  </StyledNavbar>
}
export default Navbar;