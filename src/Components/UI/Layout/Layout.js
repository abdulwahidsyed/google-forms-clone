import { Box } from "@mui/material";
import styled from "styled-components";

export const Layout = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export const QULayout = ({ children }) => {
  return <StyledQuLayout>{children}</StyledQuLayout>;
};

const StyledLayout = styled(Box)`
  padding: 16px 100px 100px 100px;
`;

const StyledQuLayout = styled(Box)`
  padding: 16px 100px 100px 100px;
  background: #16a6163d;
`;
