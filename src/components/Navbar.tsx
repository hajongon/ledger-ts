import { StyledNavbar, StyledNavItem } from "./styles/StyledNavbar"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return <StyledNavbar>
    <StyledNavItem onClick={() => navigate('/')}>main</StyledNavItem>
    <StyledNavItem onClick={() => navigate('/list')}>list</StyledNavItem>
  </StyledNavbar>
}
export default Navbar;