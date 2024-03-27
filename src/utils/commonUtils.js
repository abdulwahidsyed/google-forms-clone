export const scrollToBottomOfScreen = () => {
  setTimeout(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }, 100);
};
