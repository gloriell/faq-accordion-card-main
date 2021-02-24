const accordeon = document.querySelectorAll(".container__wrapper__text__item");
const accordeonContent = document.querySelectorAll(
  ".container__wrapper__text__item__accordeon"
);
const titleImg = document.querySelector(
  ".container__wrapper__text__item__content"
);
accordeonContent[1].classList.remove("hidden");

accordeon.forEach((accordeon) => {
  const accordeonTitleRow = accordeon.firstElementChild;

  accordeonTitleRow.addEventListener("click", (e) => {
    accordeonContent.forEach((content) => {
      if (content.previousElementSibling === e.target) {
        content.classList.remove("hidden");
        content.parentElement.classList.add("active");
      } else {
        content.parentElement.classList.remove("active");
        content.classList.add("hidden");
      }
    });
  });
});
