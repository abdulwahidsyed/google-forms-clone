import { Box } from "@mui/material";
import styled from "styled-components";
import { DetailedHeader } from "./DetailedHeader";
import { HeaderTabs } from "./HeaderTabs";

export const Header = () => {
  return (
    <StylesHeader>
      <DetailedHeader />
      <HeaderTabs />
    </StylesHeader>
  );
};

const StylesHeader = styled(Box)`
  height: 106px;
  background-color: rgb(255, 255, 255);
`;
