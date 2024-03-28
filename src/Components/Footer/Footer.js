import { Box } from "@mui/material";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { NavButtons } from "../NavButtons";

export const Footer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;

  const { sections } = useSelector((st) => st.questionnaire);

  const isLastRoute = pathname === "/preview";
  const isFirstRoute = pathname === "/";

  return (
    <StyledFooter>
      <NavButtons />
    </StyledFooter>
  );
};

const StyledFooter = styled(Box)`
  justify-content: right;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #00800045;
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 40px;
`;
