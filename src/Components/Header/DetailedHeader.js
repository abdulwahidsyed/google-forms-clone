import { Box } from "@mui/material";
import styled from "styled-components";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import { StyledTypoBig, StyledTypoSmallGray } from "../UI/Typography";
import { Button } from "../UI/Button";

export const DetailedHeader = () => {
  return (
    <Wrapper>
      <StyledSection1>
        <StyledFileIcon />
        <StyledTypoBig>Contact Information</StyledTypoBig>
        <StyledFolderIcon />
        <StyledStarIcon />
        <StyledTypoSmallGray>All changes saved in drive</StyledTypoSmallGray>
      </StyledSection1>
      <StyledSection2>
        <StyledPaintIcon />
        <StyledEyeIcon />
        <StyledUndoIcon />
        <StyledRedoIcon />
        <Button>Send</Button>
      </StyledSection2>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

const StyledSection1 = styled(Box)`
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const StyledSection2 = styled(Box)`
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const StyledFileIcon = styled(InsertDriveFileIcon)`
  color: rgb(103, 58, 183);
  width: 40px !important;
  height: 40px !important;
`;

const generateIconStyles = () => `
  width: 24px;
  height: 24px;
  color: rgb(95, 99, 104);
  cursor: pointer;
`;

const StyledFolderIcon = styled(FolderOpenIcon)`
  ${generateIconStyles()}
`;

const StyledStarIcon = styled(StarBorderIcon)`
  ${generateIconStyles()}
`;

const StyledPaintIcon = styled(ColorLensIcon)`
  ${generateIconStyles()}
`;
const StyledEyeIcon = styled(RemoveRedEyeIcon)`
  ${generateIconStyles()}
`;
const StyledUndoIcon = styled(UndoIcon)`
  ${generateIconStyles()}
`;
const StyledRedoIcon = styled(RedoIcon)`
  ${generateIconStyles()}
`;
