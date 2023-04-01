import React from "react";
import { StyledMain } from "./styles/StyledMain";

type MainPageProps = {};

const MainPage: React.FC<MainPageProps> = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default MainPage;
