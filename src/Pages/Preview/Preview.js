import { useDispatch, useSelector } from "react-redux";
import { QULayout } from "../../Components/UI/Layout/Layout";
import styled from "styled-components";
import {
  StyledTypoBig,
  StyledTypoHeading,
} from "../../Components/UI/Typography";
import HeadingImage from "../../assets/Forms-heading.png";
import { Box } from "@mui/material";
import Input from "../../Components/UI/Input/Input";
import { updateQuestions } from "../../Redux/slices/questionnaire/questionnaire.slice";

const Preview = () => {
  const dispatch = useDispatch();
  const { sections } = useSelector((st) => st.questionnaire);
  console.log("my sections from preview page", sections);

  const onChange = (e, index) => {
    const { value } = e.target;

    const newSections = [...sections].map((section, i) => {
      if (i === index) {
        return {
          ...section,
          answer: {
            ...section.answer,
            value,
          },
        };
      }
      return section;
    });

    dispatch(updateQuestions(newSections));
  };

  return (
    <QULayout>
      <StyledImage src={HeadingImage} alt="Heading Image" />
      <StyledQsnCtn>
        <StyledTypoHeading>Preview</StyledTypoHeading>
      </StyledQsnCtn>
      {sections.map((section, sectionIndex) => {
        return (
          <StyledQsnCtn>
            <StyledTypoBig>{section.question.value}</StyledTypoBig>
            <Input
              type={section.questionType.value}
              value={section.answer.value}
              onChange={(e) => onChange(e, sectionIndex)}
              options={section.answer.options}
            />
          </StyledQsnCtn>
        );
      })}
    </QULayout>
  );
};

export default Preview;

const StyledImage = styled.img`
  border-radius: 10px;
  width: 100%;
`;

const StyledQsnCtn = styled(Box)`
  border-radius: 10px;
  margin: 20px 0px;
  background: #fff;
  padding: 20px;
`;
