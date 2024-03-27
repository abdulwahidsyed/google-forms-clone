import { Box } from "@mui/material";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { useLocation, useNavigate } from "react-router";

const routes = ["/", "/Questionnaire", "/preview"];

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const isLastRoute = pathname === "/preview";
  const isFirstRoute = pathname === "/";
  console.log("my location", { isLastRoute });

  const onClickNext = () => {
    const currentRouteIndex = routes.findIndex((fn) => fn === pathname);
    const nextPath = routes[currentRouteIndex + 1];
    if (nextPath) navigate(nextPath);
  };
  const onClickBack = () => {
    const currentRouteIndex = routes.findIndex((fn) => fn === pathname);
    const prvPath = routes[currentRouteIndex - 1];
    if (prvPath) navigate(prvPath);
  };

  const onSubmit = () => {};
  return (
    <StyledFooter>
      {isFirstRoute ? null : <Button onClick={onClickBack}>Back</Button>}
      {isLastRoute ? (
        <Button onClick={onSubmit}>Submit</Button>
      ) : (
        <Button onClick={onClickNext}>Next</Button>
      )}
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
