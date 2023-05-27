export const NavBarEffect = (): void => {
  var prevScrollpos = window.scrollY;
  var navbar = document.querySelector<HTMLElement>("#navbar")!;

  const showAndHideNavbar = () => {
    var currentScrollPos = window.scrollY;

    if (window.scrollY > 0) {
      navbar.style.backgroundColor = "transparent";
      navbar.style.boxShadow =
        "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
      navbar.style.borderEndEndRadius = "10px";
      navbar.style.backdropFilter = "blur(30px) brightness(30%)";
    } else {
      navbar.style.backgroundColor = "transparent";
      navbar.style.boxShadow = "none";
      navbar.style.backdropFilter = "none";
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
