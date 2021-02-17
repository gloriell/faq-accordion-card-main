const accordeon = document.querySelectorAll(".container__wrapper__text__item");
const accordeonContent = document.querySelectorAll(
  ".container__wrapper__text__item__accordeon"
);

function addClass(el, klass) {
  el.classList.add(klass);
}

function removeClass(el, klass) {
  el.classList.remove(klass);
}

accordeon.forEach((accordeon) => {
  const accordeonTitleRow = accordeon.firstElementChild;

  accordeonTitleRow.addEventListener("click", (e) => {
    accordeonContent.forEach((content) => {
      if (content.previousElementSibling === e.target) {
        content.classList.remove("hidden");
        content.parentElement.classList.add("active");
        // removeClass(content, "hidden");
        // addClass(content.parentElement, "active");
      } else {
        content.parentElement.classList.remove("active");
        content.classList.add("hidden");
        // removeClass(content.parentElement, "active");
        // addClass(content, "hidden");

        console.log(content.parentElement);
      }
    });
  });
});
