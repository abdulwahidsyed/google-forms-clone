import { useDispatch, useSelector } from "react-redux";
import Input from "../../../Components/UI/Input/Input";
import { updateQuestions } from "../../../Redux/slices/questionnaire/questionnaire.slice";
import styled from "styled-components";
import { Box } from "@mui/material";
import { useEffect } from "react";

import { answer_option_text_mock } from "../../../Redux/slices/questionnaire/questionnaire.helper";
import { Button } from "../../../Components/UI/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { StyledTypoSmallGray } from "../../../Components/UI/Typography";

export const CheckBoxComp = ({ index }) => {
  const dispatch = useDispatch();

  const { sections } = useSelector((st) => st.questionnaire);
  const section = sections[index];

  useEffect(() => {
    if (!section?.options || !section?.options.length) {
      const newSections = [...sections].map((section, i) => {
        if (i === index) {
          return {
            ...section,
            answer: {
              ...section.answer,
              options: [{ ...answer_option_text_mock }],
            },
          };
        }
        return section;
      });

      dispatch(updateQuestions(newSections));
    }
  }, []);

  const onChange = (e, optionIndex) => {
    const { value } = e.target;
    const newSections = [...sections].map((section, i) => {
      if (i === index) {
        const options = [...section.answer.options].map((op, opi) => {
          if (optionIndex === opi) {
            return { ...op, value };
          }
          return op;
        });
        return {
          ...section,
          answer: {
            ...section.answer,
            options,
          },
        };
      }
      return section;
    });

    dispatch(updateQuestions(newSections));
  };

  const onAddHandler = () => {
    const newSections = [...sections].map((section, i) => {
      if (i === index) {
        return {
          ...section,
          answer: {
            ...section.answer,
            options: [
              ...section.answer.options,
              { ...answer_option_text_mock },
            ],
          },
        };
      }
      return section;
    });

    dispatch(updateQuestions(newSections));
  };

  const onDelete = (idx) => {
    const newSections = [...sections].map((section, i) => {
      if (i === index) {
        const options = [...section.answer.options];
        options.splice(idx, 1);
        return {
          ...section,
          answer: {
            ...section.answer,
            options,
          },
        };
      }
      return section;
    });

    dispatch(updateQuestions(newSections));
  };

  return (
    <>
      <StyledTypoSmallGrayLoc>Add Options below</StyledTypoSmallGrayLoc>
      <StyledCtn>
        {section?.answer?.options?.length
          ? section?.answer?.options.map((option, idx) => {
              return (
                <StyledOptionCtn>
                  <Input {...option} onChange={(e) => onChange(e, idx)} />
                  {idx !== 0 ? (
                    <DeleteOutlineIcon onClick={() => onDelete(idx)} />
                  ) : null}
                </StyledOptionCtn>
              );
            })
          : null}
        <Button onClick={() => onAddHandler()}>Add</Button>
      </StyledCtn>
    </>
  );
};

const StyledCtn = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledOptionCtn = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const StyledTypoSmallGrayLoc = styled(StyledTypoSmallGray)`
  //   margin-top: 20px !important;
`;
