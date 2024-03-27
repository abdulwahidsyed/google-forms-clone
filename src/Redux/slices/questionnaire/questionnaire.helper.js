export const questionsMock = {
  name: "place",
  type: "text",
  label: "Question",
  value: "",
};

export const qsnSelectorInput = {
  name: "selector",
  type: "dropdown",
  value: "text",
  label: "Select Question Type",
  options: [
    { value: "text", label: "Text" },
    { value: "number", label: "Number Field" },
    { value: "dropdown", label: "dropdown" },
    // { value: "radio", label: "Radio" },
    { value: "checkbox", label: "Checkbox" },
  ],
};

export const answerMock = {
  name: "answer",
  type: "text",
  label: "Answer/Options",
  value: "",
};

export const sectionMock = {
  questionType: { ...qsnSelectorInput },
  question: { ...questionsMock },
  answer: { ...answerMock },
};

export const dropdownAnswer = {};

export const answer_option_text_mock = {
  name: "option Text",
  type: "text",
  label: "Option",
  value: "",
};
