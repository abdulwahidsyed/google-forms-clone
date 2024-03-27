import React from "react";
import { Box, Checkbox, MenuItem, Select, TextField } from "@mui/material";
import { StyledTypoSmallGray } from "../Typography";
import styled from "styled-components";

const Input = ({
  name,
  type,
  onChange,
  value,
  label,
  isError = false,
  options = [],
  isDisabled = false,
  checked,
  ...props
}) => {
  const generateInput = () => {
    switch (type) {
      case "text":
        return (
          <TextField
            value={value}
            onChange={onChange}
            type={type}
            name={name}
            label={label}
            variant="standard"
            {...props}
          />
        );
      case "number":
        return (
          <TextField
            label={label}
            value={value}
            onChange={onChange}
            type="number"
            variant="standard"
            name={name}
            {...props}
          />
        );

      case "dropdown":
        return (
          <Select
            id="demo-simple-select"
            value={value}
            onChange={onChange}
            sx={{ width: "100%" }}
          >
            {options.map((el) => (
              <MenuItem value={el.value}>{el.label}</MenuItem>
            ))}
          </Select>
        );

      case "checkbox":
        return (
          <>
            {options.map((el) => (
              <StyledCheckboxCtn>
                <Checkbox
                  value={el.value}
                  onChange={onChange}
                  checked={checked}
                />
                <StyledTypoSmallGray>{el.value}</StyledTypoSmallGray>
              </StyledCheckboxCtn>
            ))}
          </>
        );

      default:
        return;
    }
  };
  return <>{generateInput()}</>;
};

export default Input;

const StyledCheckboxCtn = styled(Box)`
  display: flex;
  align-items: center;
`;
