import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { Button } from "./UI/Button";
import { postData } from "../Redux/slices/questionnaire/questionnaire.api";

const routes = ["/", "/Questionnaire", "/preview"];

export const NavButtons = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;

  const { sections } = useSelector((st) => st.questionnaire);

  const isLastRoute = pathname === "/preview";
  const isFirstRoute = pathname === "/";

  const onClickNext = () => {
    const currentRouteIndex = routes.findIndex((fn) => fn === pathname);
    const nextPath = routes[currentRouteIndex + 1];
    if (nextPath) navigate(nextPath);
  };

  const onClickBack = () => {
    const currentRouteIndex = routes.findIndex((fn) => fn === pathname);
    const prvPath = routes[currentRouteIndex - 1];
    if (prvPath) navigate(prvPath);
  };

  const onSubmit = () => {
    dispatch(postData(sections));
  };
  return (
    <>
      {isFirstRoute ? null : <Button onClick={onClickBack}>Back</Button>}
      {isLastRoute ? (
        <Button onClick={onSubmit}>Send</Button>
      ) : (
        <Button onClick={onClickNext}>Next</Button>
      )}
    </>
  );
};
