import { Typography } from "@mui/material";
import { Button } from "../../Components/UI/Button";
import { useNavigate } from "react-router";
import { Layout } from "../../Components/UI/Layout/Layout";
import { StyledTypoHeading } from "../../Components/UI/Typography";

const Home = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/Questionnaire");
  };
  return (
    <Layout>
      <StyledTypoHeading>Google Forms</StyledTypoHeading>
      <Button onClick={onClick}>Get Started</Button>
    </Layout>
  );
};

export default Home;
