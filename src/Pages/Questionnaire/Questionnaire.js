import styled from "styled-components";
import { QULayout } from "../../Components/UI/Layout/Layout";
import HeadingImage from "../../assets/Forms-heading.png";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../Components/UI/Input/Input";
import { qsnSelectorInput } from "../../Redux/slices/questionnaire/questionnaire.helper";
import { Box } from "@mui/material";
import {
  StyledTypoBig,
  StyledTypoHeading,
  StyledTypoSmallGray,
} from "../../Components/UI/Typography";
import { Button } from "../../Components/UI/Button";
import { updateQuestions } from "../../Redux/slices/questionnaire/questionnaire.slice";
import { sectionMock } from "../../Redux/slices/questionnaire/questionnaire.helper";
import { scrollToBottomOfScreen } from "../../utils/commonUtils";
import { TextComp } from "./QsnComps/TextComp";
import { NumberComp } from "./QsnComps/NumberComp";
import { DropdownComp } from "./QsnComps/DropdownComp";
import { CheckBoxComp } from "./QsnComps/CheckBoxComp";

const Questionnaire = () => {
  const dispatch = useDispatch();
  const { sections } = useSelector((st) => st.questionnaire);
  console.log("my sections from Questionnaire page", sections);

  const onChangeQsnType = (e, secI) => {
    const { value } = e.target;
    const newSections = [...sections].map((section, i) => {
      if (i === secI) {
        return {
          ...section,
          answer: { ...section.answer, type: value },
          questionType: { ...section.questionType, value },
        };
      }
      return section;
    });

    dispatch(updateQuestions(newSections));
  };

  const onChangeQuestion = (e, secI, k) => {
    const { value } = e.target;
    const newSections = [...sections].map((section, i) => {
      if (i === secI) {
        return { ...section, question: { ...section.question, value } };
      }
      return section;
    });

    dispatch(updateQuestions(newSections));
  };

  const onAddHandler = () => {
    const newSections = [...sections, { ...sectionMock }];
    dispatch(updateQuestions(newSections));
    scrollToBottomOfScreen();
  };

  const onDeleteHandler = (i) => {
    const newSections = [...sections];
    newSections.splice(i, 1);
    if (newSections.length < 1) return;
    dispatch(updateQuestions(newSections));
  };

  const chooseComponent = (key, i) => {
    switch (key) {
      //   case "text":
      //     return <TextComp index={i} />;
      //   case "number":
      //     return <NumberComp index={i} />;
      case "dropdown":
        return <DropdownComp index={i} />;
      case "checkbox":
        return <CheckBoxComp index={i} />;

      default:
        return;
    }
  };

  return (
    <QULayout>
      <StyledImage src={HeadingImage} alt="Heading Image" />
      <StyledQsnCtn>
        <StyledTypoHeading>Travel Information</StyledTypoHeading>
      </StyledQsnCtn>
      <StyledAddButton onClick={onAddHandler}>Add</StyledAddButton>
      {sections.map((section, secIdx) => (
        <StyledQsnCtn>
          <StyledLeftSection>
            <Input
              {...section.question}
              onChange={(e) => onChangeQuestion(e, secIdx)}
            />

            {chooseComponent(section.questionType.value, secIdx)}
          </StyledLeftSection>

          <StyledRightSection>
            <Input
              {...section.questionType}
              onChange={(e) => onChangeQsnType(e, secIdx)}
            />
            <Button onClick={() => onDeleteHandler(secIdx)}>Delete</Button>
          </StyledRightSection>
        </StyledQsnCtn>
      ))}
    </QULayout>
  );
};

export default Questionnaire;

const StyledImage = styled.img`
  border-radius: 10px;
  width: 100%;
`;

const StyledAddButton = styled(Button)`
  backgroud: red;
  position: fixed;
`;

const StyledQsnCtn = styled(Box)`
  border-radius: 10px;
  margin: 20px 0px;
  background: #fff;
  padding: 20px;
  display: flex;
  gap: 40px;
`;

const StyledRightSection = styled(Box)`
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const StyledLeftSection = styled(Box)`
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
