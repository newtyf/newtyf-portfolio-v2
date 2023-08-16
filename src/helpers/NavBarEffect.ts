export const NavBarEffect = (): void => {
  var prevScrollpos = window.scrollY;
  var navbar = document.querySelector<HTMLElement>("#navbar")!;

  const showAndHideNavbar = () => {
    var currentScrollPos = window.scrollY;

    if (window.scrollY > 0) {
      navbar.classList.add("transparent")
    } else {
      navbar.classList.remove("transparent")
    }

    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0px";
    } else {
      navbar.style.top = "-120px";
    }
    prevScrollpos = currentScrollPos;
  };
  window.addEventListener("scroll", showAndHideNavbar);
};
