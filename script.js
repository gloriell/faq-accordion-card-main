const accordeon = document.querySelectorAll(".container__wrapper__text__item");
const change = document.querySelector(
  ".container__wrapper__text__item__accordeon__text"
);

accordeon.forEach((accordeon) => {
  accordeon.addEventListener("click", () => {
    change.forEach((change) => {
      change.classList.toggle("change");
    });
  });
});
