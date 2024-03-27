import { useDispatch, useSelector } from "react-redux";
import Input from "../../../Components/UI/Input/Input";
import { updateQuestions } from "../../../Redux/slices/questionnaire/questionnaire.slice";

export const TextComp = ({ index }) => {
  const dispatch = useDispatch();

  const { sections } = useSelector((st) => st.questionnaire);
  const section = sections[index];

  const onChange = (e) => {
    const { value } = e.target;
    const newSections = [...sections].map((section, i) => {
      if (i === index) {
        return { ...section, answer: { ...section.answer, value } };
      }
      return section;
    });

    dispatch(updateQuestions(newSections));
  };

  return <Input {...section.answer} onChange={onChange} />;
};
