const accordeon = document.querySelectorAll(".container__wrapper__text__item");
const accordeonContent = document.querySelectorAll(
  ".container__wrapper__text__item__accordeon"
);

accordeon.forEach((accordeon) => {
  const accordeonTitleRow = accordeon.firstElementChild;

  accordeonTitleRow.addEventListener("click", (e) => {
    accordeonContent.forEach((content) => {
      if (content.previousElementSibling === e.target) {
        content.classList.remove("change");
        content.parentElement.classList.add("active");
      } else {
        content.classList.add("active");
        content.parentElement.classList.remove("change");
      }
    });
  });
});
