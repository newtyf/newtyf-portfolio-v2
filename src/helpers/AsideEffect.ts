export const AsideEffect = () => {
  let showSlide: () => void = () => {};
  let hideSlide: () => void = () => {};
  const body = document.querySelector<HTMLBodyElement>("body")!;
  const aside = document.querySelector("aside")!;
  const backgroundClose =
    document.querySelector<HTMLDivElement>(".background-close")!;
  const xButton = document.querySelector<HTMLButtonElement>(
    ".menu-hamburger button"
  )!;

  hideSlide = () => {
    backgroundClose.style.backgroundColor = "transparent";
    body.style.overflow = "visible";
    xButton.children.item(0)?.classList.remove("open");
    aside.style.right = "-100vw";
  };

  showSlide = () => {
    aside.style.right = "0";
    body.style.overflow = "hidden";
    setTimeout(() => {
      backgroundClose.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }, 1000);
  };

  return { showSlide, hideSlide };
};
