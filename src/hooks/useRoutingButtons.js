import { useLocation } from "react-router";

export const useRoutingButtons = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const isLastRoute = pathname === "/preview";
  const isFirstRoute = pathname === "/";
  return {};
};
