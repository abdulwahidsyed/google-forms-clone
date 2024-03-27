import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const HeaderTabs = () => {
  const tabs = [
    { label: "Questions", name: "questions", id: 1 },
    { label: "Preview", name: "preview", id: 2 },
    { label: "Responses", name: "responses", id: 2 },
    { label: "Settings", name: "settings", id: 3 },
  ];
  return (
    <StyledDiv>
      {tabs.map((el) => (
        <StyledTab key={el.id} selected={el.id === 1}>
          {el.label}
        </StyledTab>
      ))}
    </StyledDiv>
  );
};

const StyledDiv = styled(Box)`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
`;

const StyledTab = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  color: ${(props) => (props.selected ? "rgb(61, 143, 45)" : "black")};
`;
