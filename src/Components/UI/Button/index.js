import styled from "styled-components";

export const Button = ({ variant, children, onClick, styles }) => {
  const generateButton = () => {
    switch (variant) {
      case "secondary":
        return <button>{children}</button>;

      default:
        return (
          <StyledNormalBtn style={{ ...styles }} onClick={onClick}>
            {children}
          </StyledNormalBtn>
        );
    }
  };
  return <>{generateButton()}</>;
};

const StyledNormalBtn = styled.button`
  height: 36px;
  background-color: rgb(103, 58, 183);
  border-radius: 4px;
  border: none;
  color: #fff;
  padding: 0 20px;
  cursor: pointer;

  &:hover {
    background-color: rgb(112 75 179);
    box-shadow: 0 2px 1px -1px rgba(103, 58, 183, 0.2),
      0 1px 1px 0 rgba(103, 58, 183, 0.14), 0 1px 3px 0 rgba(103, 58, 183, 0.12);
  }
`;
